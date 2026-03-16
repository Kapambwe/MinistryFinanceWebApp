# Ministry of Finance Sample Data

## Overview
This directory contains comprehensive JSON sample data files for the Ministry of Finance Web Application mock services. All files have been standardized to contain **at least 20 items** each for proper testing and demonstration purposes.

## Data Structure

### Total Files: 75 JSON files
- **73 files** contain exactly **20 items** each
- **2 files** contain more than 20 items:
  - `municipal-bond-payments.json`: 22 items
  - `soe-registry.json`: 29 items

## File Categories

### Accounting & Financial Management (15 files)
- `accounts-receivable.json` - Receivables tracking
- `bank-accounts.json` - Bank account registry
- `bank-reconciliation.json` - Bank reconciliation records
- `check-management.json` - Check register
- `journal-entries.json` - General ledger journal entries
- `payment-batches.json` - Payment batch processing
- `payment-requests.json` - Payment request records
- `payment-vouchers.json` - Payment vouchers
- `trial-balance.json` - Trial balance reports
- `vendor-payments.json` - Vendor payment history
- `withholding-tax.json` - Withholding tax records
- `billing.json` - Billing records
- `invoices.json` - Invoice management
- `revenue-collection.json` - Revenue collection data
- `depreciation.json` - Asset depreciation schedules

### Budget Management (7 files)
- `budget-amendments.json` - Budget amendment requests
- `budget-recommendations.json` - AI-powered budget recommendations
- `budget-utilization.json` - Budget utilization tracking
- `budget-warrants.json` - Budget warrant issuance
- `commitments.json` - Budget commitments
- `supplementary-budgets.json` - Supplementary budget requests
- `virements.json` - Budget virements

### Treasury Operations (6 files)
- `cash-rationing.json` - Cash allocation and rationing
- `cash-sweep.json` - Cash sweep operations
- `investments.json` - Investment portfolio
- `loans.json` - Loan management
- `treasury-cash.json` - Treasury cash positions
- `treasury-warrants.json` - Treasury warrants
- `tsa.json` - Treasury Single Account operations

### Asset Management (5 files)
- `assets.json` - Fixed asset register
- `asset-maintenance.json` - Asset maintenance records
- `asset-transfers.json` - Asset transfer tracking
- `asset-verification.json` - Asset verification results

### Grant & Donor Management (2 files)
- `grants.json` - Grant portfolio management
- `donors.json` - Donor information

### Project Management (5 files)
- `pim-projects.json` - Public Investment Management projects
- `ppp-projects.json` - Public-Private Partnership projects
- `project-pipeline.json` - Project pipeline
- `project-selection.json` - Project selection criteria

### Integration & External Systems (4 files)
- `customs-integration.json` - Customs system integration
- `egp-integration.json` - E-Government Procurement integration
- `statistical-integration.json` - Statistical system integration

### State-Owned Enterprises (4 files)
- `soe-governance.json` - SOE governance monitoring
- `soe-ownership.json` - SOE ownership structure
- `soe-performance.json` - SOE performance metrics
- `soe-registry.json` - Complete SOE registry (29 items)

### Municipal Finance (4 files)
- `municipal-bonds.json` - Municipal bond issuance
- `municipal-bond-payments.json` - Bond payment schedules (22 items)
- `municipal-bond-performance.json` - Bond performance tracking
- `municipal-credit-ratings.json` - Municipal credit ratings

### Parliamentary Oversight (2 files)
- `mp-budget-analysis.json` - MP budget analysis tools
- `parliamentary-accounts.json` - Parliamentary accounts committee

### Decision Engine & Analytics (11 files)
- `analytics-insights.json` - Analytics insights
- `analytics-reports.json` - Analytics reports
- `anomaly-detections.json` - Financial anomaly detection
- `compliance-checks.json` - Compliance monitoring
- `dashboard-metrics.json` - Dashboard KPIs
- `fraud-detections.json` - Fraud detection alerts
- `kpi-tracking.json` - KPI tracking
- `performance-insights.json` - Performance insights
- `performance-reports.json` - Performance reports
- `predictive-analytics.json` - Predictive analytics
- `risk-assessments.json` - Risk assessment results

### Workflow & Automation (5 files)
- `workflow-delegations.json` - Workflow delegation rules
- `workflow-enhancements.json` - Workflow enhancements
- `workflow-instances.json` - Active workflow instances
- `workflow-routing.json` - Workflow routing configuration

### Special Programs (3 files)
- `special-funds.json` - Special funds management
- `wealth-fund.json` - Sovereign wealth fund
- `sla.json` - Service level agreements

### Human Resources (2 files)
- `employees.json` - Employee records
- `users.json` - System users

### Other (5 files)
- `audit-recommendations.json` - Audit recommendations
- `recommendations.json` - System recommendations
- `spending-patterns.json` - Spending pattern analysis

## Data Characteristics

### Realistic Zambian Government Data
All JSON files contain realistic data representing:
- **Zambian Ministries**: Finance, Health, Education, Agriculture, Transport, Energy, Water, Defence, etc.
- **Government Departments**: Budget Division, Treasury Operations, Debt Management, etc.
- **Zambian Names**: Realistic first names, middle names, and surnames
- **Currency**: Zambian Kwacha (ZMW) with realistic amounts
- **Dates**: Mix of 2023 and 2024 fiscal years
- **Locations**: Zambian cities, provinces, and districts

### Data Quality Features
- **Proper ID Incrementing**: Sequential IDs (1-20)
- **Unique Identifiers**: Unique codes and numbers (e.g., GRT-2024-001 through GRT-2024-020)
- **Varied Status Fields**: Active, Pending, Completed, Approved, Rejected, etc.
- **Realistic Amounts**: Context-appropriate financial amounts
- **Consistent Structure**: Same field names and types across all items in each file
- **Valid JSON**: All files validated for proper JSON syntax

## Usage

### Loading in Blazor WebAssembly
```csharp
@inject HttpClient Http

protected override async Task OnInitializedAsync()
{
    var grants = await Http.GetFromJsonAsync<Grant[]>("sample-data/ministry-of-finance/grants.json");
}
```

### Example Data Access Pattern
```csharp
// Load grants with at least 20 items
var grants = await Http.GetFromJsonAsync<List<Grant>>(
    "sample-data/ministry-of-finance/grants.json"
);

// Process the data
foreach (var grant in grants)
{
    Console.WriteLine($"{grant.GrantNumber}: {grant.GrantName}");
}
```

## Testing Coverage

With 20+ items per file, the sample data provides:
- **Pagination Testing**: Sufficient data to test paging (e.g., 10 items per page = 2 pages)
- **Search & Filter Testing**: Multiple records to test search and filtering functionality
- **Sorting Testing**: Adequate variety to test sorting by different fields
- **Performance Testing**: Realistic data volumes for performance benchmarking
- **UI Testing**: Enough data to validate grid displays, charts, and dashboards

## Maintenance

### Adding New Items
When adding new items to any JSON file:
1. Maintain the same field structure
2. Increment IDs sequentially
3. Use realistic Zambian government data
4. Ensure valid JSON syntax
5. Keep at least 20 items minimum

### Validation
To validate all JSON files:
```bash
cd wwwroot/sample-data/ministry-of-finance
for file in *.json; do
    jq empty "$file" && echo "✓ $file" || echo "✗ $file"
done
```

## Related Mock Services

The data in these JSON files complements the inline mock data in:
- `/Services/Mock/Accounting/` - Accounting mock services
- `/Services/Mock/Budget/` - Budget mock services
- `/Services/Mock/Treasury/` - Treasury mock services
- `/Services/Mock/Grants/` - Grant management services
- `/Services/Mock/Assets/` - Asset management services
- And 60+ other mock service classes

## Statistics

- **Total JSON Files**: 75
- **Total Data Items**: ~1,500 items (75 files × 20 items average)
- **File Size Range**: 1 KB - 40 KB
- **Total Size**: ~800 KB
- **Last Updated**: 2025

## Notes

1. All monetary amounts are in Zambian Kwacha (ZMW) unless otherwise specified
2. Dates use ISO 8601 format (YYYY-MM-DDTHH:mm:ss)
3. Status values are consistent within each entity type
4. All files have been validated for JSON syntax correctness
5. Data is suitable for demo, testing, and development purposes

---

**Generated for**: CompanyApp.Government.MinistryFinanceWebApp  
**Purpose**: Mock service data for Accounting-As-A-Service system  
**Maintainer**: Ministry of Finance Development Team
