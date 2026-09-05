window.naturalCapitalMap = window.naturalCapitalMap || {};

(function () {
    var state = {};
    var palette = {
        Province: "#2563eb",
        District: "#16a34a",
        Constituency: "#f59e0b",
        Ward: "#7c3aed",
        Catchment: "#0f766e"
    };

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function parsePayload(payloadJson) {
        if (!payloadJson) {
            return { points: [] };
        }

        if (typeof payloadJson === "string") {
            return JSON.parse(payloadJson);
        }

        return payloadJson;
    }

    function getMarkerRadius(layer) {
        switch ((layer || "").toLowerCase()) {
            case "province":
                return 14;
            case "district":
                return 10;
            case "constituency":
                return 8;
            case "ward":
                return 6;
            case "catchment":
                return 11;
            default:
                return 7;
        }
    }

    function getLayerDelta(layer) {
        switch ((layer || "").toLowerCase()) {
            case "province":
                return 0.7;
            case "district":
                return 0.35;
            case "constituency":
                return 0.22;
            case "ward":
                return 0.14;
            case "catchment":
                return 0.5;
            default:
                return 0.2;
        }
    }

    function getLayerOrder(layer) {
        switch ((layer || "").toLowerCase()) {
            case "province":
                return 1;
            case "district":
                return 2;
            case "constituency":
                return 3;
            case "ward":
                return 4;
            case "catchment":
                return 5;
            default:
                return 9;
        }
    }

    function buildPopup(point) {
        var title = escapeHtml(point.name || point.code || "Geography");
        var level = escapeHtml(point.level || point.layer || "");
        var notes = escapeHtml(point.notes || "");
        var url = point.url || "";
        var selected = point.selected ? "<span style='display:inline-block;padding:0.15rem 0.45rem;border-radius:999px;background:#eff6ff;color:#1d4ed8;font-size:0.72rem;font-weight:700;margin-bottom:0.35rem;'>Selected</span>" : "";

        return [
            "<div style='min-width:220px;max-width:280px;'>",
            selected,
            "<div style='font-size:1rem;font-weight:800;margin-bottom:0.1rem;'>", title, "</div>",
            "<div style='font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;margin-bottom:0.4rem;'>", level, "</div>",
            "<div style='font-size:0.82rem;color:#374151;margin-bottom:0.65rem;'>", notes, "</div>",
            "<div style='display:flex;gap:0.45rem;flex-wrap:wrap;'>",
            "<a href='", url, "' style='display:inline-block;padding:0.45rem 0.65rem;border-radius:0.5rem;background:#0f766e;color:#fff;text-decoration:none;font-size:0.78rem;font-weight:700;'>Open Drill-Down</a>",
            "</div>",
            "</div>"
        ].join("");
    }

    function buildBoundaryPolygon(point) {
        var delta = getLayerDelta(point.layer);
        var lat = Number(point.latitude);
        var lng = Number(point.longitude);

        return L.polygon([
            [lat + delta, lng - delta],
            [lat + delta * 0.6, lng + delta],
            [lat - delta, lng + delta * 0.75],
            [lat - delta * 0.85, lng - delta * 0.6]
        ], {
            color: palette[point.layer] || "#475569",
            weight: 2,
            fillColor: palette[point.layer] || "#475569",
            fillOpacity: point.selected ? 0.28 : 0.16,
            opacity: point.selected ? 0.95 : 0.7
        });
    }

    function setActiveFeature(stateEntry, code) {
        stateEntry.activeFeatureCode = code;

        Object.keys(stateEntry.featuresByCode).forEach(function (featureCode) {
            var feature = stateEntry.featuresByCode[featureCode];
            var isActive = String(featureCode).toLowerCase() === String(code || "").toLowerCase();
            feature.polygon.setStyle({
                weight: isActive ? 3 : 2,
                opacity: isActive ? 1 : 0.7,
                fillOpacity: isActive ? 0.28 : 0.16
            });
            feature.marker.setStyle({
                weight: isActive ? 3 : 1.5,
                fillOpacity: isActive ? 0.98 : 0.8
            });
            if (isActive) {
                feature.polygon.bringToFront();
                feature.marker.bringToFront();
            }
        });
    }

    function buildLegendControl() {
        return L.control({ position: "bottomleft" });
    }

    window.naturalCapitalMap.renderGeographyMap = function (elementId, payloadJson, dotNetRef) {
        var payload = parsePayload(payloadJson);
        var existing = state[elementId];
        if (existing && existing.map) {
            existing.map.remove();
            state[elementId] = null;
        }

        var map = L.map(elementId, {
            zoomControl: true,
            scrollWheelZoom: false,
            preferCanvas: true
        });

        var streets = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "&copy; OpenStreetMap contributors"
        });

        var terrain = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
            maxZoom: 19,
            attribution: "Tiles &copy; Esri"
        });

        streets.addTo(map);

        var layers = {};
        var featuresByCode = {};
        var bounds = L.latLngBounds([]);
        var points = Array.isArray(payload.points) ? payload.points : [];
        var activeFeatureCode = payload.selectedCode || "";

        points
            .filter(function (p) { return p && p.latitude !== null && p.longitude !== null && p.latitude !== undefined && p.longitude !== undefined; })
            .sort(function (a, b) { return getLayerOrder(a.layer) - getLayerOrder(b.layer); })
            .forEach(function (point) {
                var layerName = point.layer || "Other";
                if (!layers[layerName]) {
                    layers[layerName] = L.layerGroup();
                }

                var polygon = buildBoundaryPolygon(point);
                var color = palette[layerName] || "#475569";
                var marker = L.circleMarker([point.latitude, point.longitude], {
                    radius: getMarkerRadius(layerName),
                    color: point.selected ? "#111827" : color,
                    weight: point.selected ? 3 : 1.5,
                    fillColor: color,
                    fillOpacity: point.selected ? 0.95 : 0.8
                });

                polygon.bindPopup(buildPopup(point), { maxWidth: 340, closeButton: true, autoPanPadding: [16, 16] });
                marker.bindPopup(buildPopup(point), { maxWidth: 340, closeButton: true, autoPanPadding: [16, 16] });

                var onSelect = function () {
                    activeFeatureCode = point.code;
                    setActiveFeature(state[elementId], point.code);
                    if (dotNetRef && dotNetRef.invokeMethodAsync) {
                        dotNetRef.invokeMethodAsync("HandleMapSelection", JSON.stringify(point));
                    }
                };

                polygon.on("click", onSelect);
                marker.on("click", onSelect);

                polygon.addTo(layers[layerName]);
                marker.addTo(layers[layerName]);

                featuresByCode[String(point.code).toLowerCase()] = {
                    polygon: polygon,
                    marker: marker,
                    point: point
                };

                bounds.extend(polygon.getBounds());
            });

        var baseLayers = {
            "Street": streets,
            "Satellite": terrain
        };

        var overlayLayers = {};
        Object.keys(layers).sort(function (a, b) { return getLayerOrder(a) - getLayerOrder(b); }).forEach(function (key) {
            overlayLayers[key + " Layer"] = layers[key].addTo(map);
        });

        L.control.layers(baseLayers, overlayLayers, { collapsed: false, position: "topright" }).addTo(map);

        var legend = buildLegendControl();
        legend.onAdd = function () {
            var div = L.DomUtil.create("div", "leaflet-control leaflet-bar");
            div.style.background = "white";
            div.style.padding = "0.75rem 0.85rem";
            div.style.lineHeight = "1.4";
            div.style.borderRadius = "0.75rem";
            div.style.boxShadow = "0 10px 30px rgba(15, 23, 42, 0.18)";
            div.innerHTML = [
                "<div style='font-weight:800;margin-bottom:0.45rem;'>Layer Colors</div>",
                Object.keys(palette).map(function (key) {
                    return "<div style='display:flex;align-items:center;gap:0.45rem;font-size:0.78rem;margin-bottom:0.25rem;'>" +
                        "<span style='width:10px;height:10px;border-radius:999px;background:" + palette[key] + ";display:inline-block;'></span>" +
                        "<span>" + key + "</span>" +
                        "</div>";
                }).join("")
            ].join("");
            return div;
        };
        legend.addTo(map);

        var titleControl = L.control({ position: "topright" });
        titleControl.onAdd = function () {
            var div = L.DomUtil.create("div", "leaflet-control");
            div.style.background = "rgba(255,255,255,0.96)";
            div.style.padding = "0.65rem 0.85rem";
            div.style.borderRadius = "0.75rem";
            div.style.boxShadow = "0 10px 30px rgba(15, 23, 42, 0.18)";
            div.innerHTML = "<div style='font-weight:800;'>" + escapeHtml(payload.countryName || "Natural Capital") + "</div>" +
                "<div style='font-size:0.78rem;color:#6b7280;'>Use the overlays to inspect the administrative and basin layers.</div>";
            return div;
        };
        titleControl.addTo(map);

        if (bounds.isValid()) {
            map.fitBounds(bounds.pad(0.18));
        } else {
            map.setView([-15.5, 28.0], 5);
        }

        state[elementId] = { map: map, featuresByCode: featuresByCode, activeFeatureCode: activeFeatureCode };
        setActiveFeature(state[elementId], activeFeatureCode);
        setTimeout(function () {
            map.invalidateSize();
        }, 120);
    };

    window.naturalCapitalMap.focusFeature = function (elementId, code) {
        var entry = state[elementId];
        if (!entry || !entry.featuresByCode) {
            return;
        }

        var feature = entry.featuresByCode[String(code || "").toLowerCase()];
        if (!feature) {
            return;
        }

        entry.map.fitBounds(feature.polygon.getBounds().pad(0.35));
        feature.polygon.openPopup();
        setActiveFeature(entry, code);
    };
})();
