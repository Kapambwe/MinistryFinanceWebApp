window.portfolioGantt = window.portfolioGantt || {
    getElementWidth: function (element) {
        if (!element || !element.getBoundingClientRect) {
            return 0;
        }

        return element.getBoundingClientRect().width || 0;
    },
    downloadTextFile: function (fileName, content, mimeType) {
        var blob = new Blob([content || ""], { type: mimeType || "text/plain;charset=utf-8" });
        var url = URL.createObjectURL(blob);
        var anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = fileName || "download.txt";
        anchor.style.display = "none";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    }
};
