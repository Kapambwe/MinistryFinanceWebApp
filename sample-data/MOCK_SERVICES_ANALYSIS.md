# Mock Services Data Source Analysis

## Summary
Analysis of all 161 mock services across MinistryFinanceWebApp and its dependencies to ensure data is loaded from JSON files.

**Total Mock Services**: 161
- **73** in MinistryFinanceWebApp (`src/WebApps/CompanyApp.Government.MinistryFinanceWebApp/Services/Mock`)
- **26** in MinistryofFinance Component (`src/Components/CompanyApp.Components.MinistryofFinance`)
- **62** in National.Budget Component (`src/Components/CompanyApp.Components.National.Budget/Services/Mock`)

## Current Status

### ✅ Services with JSON Data Files Created

The following service categories have corresponding JSON data files in `wwwroot/sample-data/ministry-of-finance/`:

1. **Budget Warrants** → `budget-warrants.json`
2. **Grants** → `grants.json`
3. **Treasury Cash** → `treasury-cash.json`
4. **Employees** → `employees.json`
5. **Assets** → `assets.json`
6. **Revenue Collection** → `revenue-collection.json`
7. **Donors** → `donors.json`
8. **Journal Entries** → `journal-entries.json`
9. **Payment Vouchers** → `payment-vouchers.json`
10. **PIM Projects** → `pim-projects.json`
11. **Bank Accounts** → `bank-accounts.json`
12. **SOE Registry** → `soe-registry.json`
13. **SOE Performance** → `soe-performance.json`
14. **SOE Ownership** → `soe-ownership.json`
15. **SOE Governance** → `soe-governance.json`
16. **Municipal Bonds** → `municipal-bonds.json`
17. **Municipal Bond Payments** → `municipal-bond-payments.json`
18. **Municipal Credit Ratings** → `municipal-credit-ratings.json`
19. **Municipal Bond Performance** → `municipal-bond-performance.json`

### 🔄 Implementation Status

#### Current Implementation Pattern
Most mock services currently use **hard-coded data** with the following pattern:

```csharp
public class MockService
{
    private readonly List<DataType> _data = new();
    
    public MockService()
    {
        InitializeSampleData();
    }
    
    private void InitializeSampleData()
    {
        // Hard-coded data initialization
        _data.Add(new DataType { /* ... */ });
    }
}
```

#### Recommended Pattern for JSON Loading

```csharp
public class MockService
{
    private readonly HttpClient _httpClient;
    private List<DataType> _data = new();
    private bool _initialized = false;
    
    public MockService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }
    
    private async Task InitializeDataAsync()
    {
        if (_initialized) return;
        
        try
        {
            var data = await _httpClient.GetFromJsonAsync<List<DataType>>(
                "sample-data/ministry-of-finance/data-file.json");
            
            if (data != null)
            {
                _data = data;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error loading sample data: {ex.Message}");
            // Fallback to empty list or minimal hard-coded data
            _data = new List<DataType>();
        }
        
        _initialized = true;
    }
    
    public async Task<List<DataType>> GetAllAsync()
    {
        await InitializeDataAsync();
        return _data.ToList();
    }
}
```

## Mock Services by Category

### 1. Budget Services (6 services)

**Services:**
- MockBudgetWarrantService
- MockBudgetAmendmentService
- MockBudgetUtilizationService
- MockSupplementaryBudgetService
- MockVirementService
- MockCommitmentService

**JSON Files:**
- ✅ `budget-warrants.json` (Created)
- ⏳ `budget-amendments.json` (Needed)
- ⏳ `budget-utilization.json` (Needed)
- ⏳ `supplementary-budgets.json` (Needed)
- ⏳ `virements.json` (Needed)
- ⏳ `commitments.json` (Needed)

### 2. Accounting Services (9 services)

**Services:**
- MockJournalEntryService
- MockVendorPaymentService
- MockWithholdingTaxService
- MockPaymentVoucherService (uses payment-vouchers.json)
- MockCheckManagementService
- MockPaymentRequestService
- MockPaymentBatchService
- MockTrialBalanceService
- MockBankReconciliationService

**JSON Files:**
- ✅ `journal-entries.json` (Created)
- ✅ `payment-vouchers.json` (Created)
- ⏳ `vendor-payments.json` (Needed)
- ⏳ `withholding-tax.json` (Needed)
- ⏳ `check-management.json` (Needed)
- ⏳ `payment-requests.json` (Needed)
- ⏳ `payment-batches.json` (Needed)
- ⏳ `trial-balance.json` (Needed)
- ⏳ `bank-reconciliation.json` (Needed)

### 3. Treasury Services (9 services)

**Services:**
- MockTreasuryWarrantService
- MockTreasuryCashService (uses treasury-cash.json)
- MockBankAccountService (uses bank-accounts.json)
- MockCashRationingService
- MockCashSweepService
- MockTSAService
- MockLoanService
- MockInvestmentService
- MockBankIntegrationService

**JSON Files:**
- ✅ `treasury-cash.json` (Created)
- ✅ `bank-accounts.json` (Created)
- ⏳ `treasury-warrants.json` (Needed)
- ⏳ `cash-rationing.json` (Needed)
- ⏳ `cash-sweep.json` (Needed)
- ⏳ `tsa.json` (Needed)
- ⏳ `loans.json` (Needed)
- ⏳ `investments.json` (Needed)
- ⏳ `bank-integration.json` (Needed)

### 4. Revenue Services (5 services)

**Services:**
- MockRevenueCollectionService (uses revenue-collection.json)
- MockBillingService
- MockCustomerManagementService
- MockInvoiceManagementService
- MockAccountsReceivableService

**JSON Files:**
- ✅ `revenue-collection.json` (Created)
- ⏳ `billing.json` (Needed)
- ⏳ `customers.json` (Partially created - in ZRA folder)
- ⏳ `invoices.json` (Needed)
- ⏳ `accounts-receivable.json` (Needed)

### 5. Asset Services (5 services)

**Services:**
- MockAssetService (uses assets.json)
- MockAssetMaintenanceService
- MockAssetTransferService
- MockAssetVerificationService
- MockDepreciationService

**JSON Files:**
- ✅ `assets.json` (Created)
- ⏳ `asset-maintenance.json` (Needed)
- ⏳ `asset-transfers.json` (Needed)
- ⏳ `asset-verification.json` (Needed)
- ⏳ `depreciation.json` (Needed)

### 6. Grant Services (2 services)

**Services:**
- MockGrantService (uses grants.json)
- MockDonorService (uses donors.json)

**JSON Files:**
- ✅ `grants.json` (Created)
- ✅ `donors.json` (Created)

### 7. PIM Services (3 services)

**Services:**
- MockProjectService (uses pim-projects.json)
- MockProjectPipelineService
- MockProjectSelectionService

**JSON Files:**
- ✅ `pim-projects.json` (Created)
- ⏳ `project-pipeline.json` (Needed)
- ⏳ `project-selection.json` (Needed)

### 8. HR & Payroll (1 service)

**Services:**
- MockEmployeeService (uses employees.json)

**JSON Files:**
- ✅ `employees.json` (Created)

### 9. Integration Services (6 services)

**Services:**
- MockZRAIntegrationService
- MockNAPSAIntegrationService
- MockEGPIntegrationService
- MockCustomsIntegrationService
- MockBankIntegrationService
- MockStatisticalIntegrationService

**JSON Files:**
- ✅ `zra-integration.json` (Created in ZRA folder)
- ✅ `napsa-integration.json` (Created in NAPSA folder)
- ⏳ `egp-integration.json` (Needed)
- ⏳ `customs-integration.json` (Needed)
- ⏳ `statistical-integration.json` (Needed)

### 10. Decision Engine Services (11 services)

**Services:**
- MockRiskAssessmentService
- MockComplianceCheckService
- MockAnalyticsService
- MockRecommendationService
- MockAnomalyDetectionService
- MockFraudDetectionService
- MockPredictiveAnalyticsService
- MockBudgetRecommendationService
- MockSpendingPatternService
- MockPerformanceInsightService
- MockAuditRecommendationService

**JSON Files:**
- ⏳ All need JSON files (11 files needed)

### 11. Workflow Services (4 services)

**Services:**
- MockWorkflowEngineService
- MockWorkflowRoutingService
- MockWorkflowEnhancementService
- MockWorkflowDelegationService

**JSON Files:**
- ⏳ All need JSON files (4 files needed)

### 12. Parliamentary Services (2 services)

**Services:**
- MockAccountsCommitteeService
- MockMPBudgetAnalysisService

**JSON Files:**
- ⏳ `parliamentary-accounts.json` (Needed)
- ⏳ `mp-budget-analysis.json` (Needed)

### 13. Performance & Analytics (4 services)

**Services:**
- MockDashboardService
- MockAnalyticsDashboardService
- MockPerformanceReportingService
- MockKPIDashboardService

**JSON Files:**
- ⏳ All need JSON files (4 files needed)

### 14. Specialized Financial Services (4 services)

**Services:**
- MockMunicipalBondsService (uses municipal bonds JSON files)
- MockWealthFundService
- MockPPPService
- MockSpecialFundsService

**JSON Files:**
- ✅ `municipal-bonds.json` (Created)
- ✅ `municipal-bond-payments.json` (Created)
- ✅ `municipal-credit-ratings.json` (Created)
- ✅ `municipal-bond-performance.json` (Created)
- ⏳ `wealth-fund.json` (Needed)
- ⏳ `ppp-projects.json` (Needed)
- ⏳ `special-funds.json` (Needed)

### 15. SOE Governance Services (in National.Budget component)

**Services:**
- MockSOEGovernanceService (uses SOE JSON files)
- MockSOEMonitoringService
- MockSOERealTimeMonitoringService

**JSON Files:**
- ✅ `soe-registry.json` (Created)
- ✅ `soe-performance.json` (Created)
- ✅ `soe-ownership.json` (Created)
- ✅ `soe-governance.json` (Created)

### 16. System Services (2 services)

**Services:**
- MockUserManagementService
- MockSLAManagementService

**JSON Files:**
- ⏳ `users.json` (Needed)
- ⏳ `sla.json` (Needed)

## Summary Statistics

**JSON Files Created**: 19 files
**JSON Files Needed**: ~80-100 additional files
**Coverage**: ~16% of services have JSON data files

## Recommendations

### Immediate Actions

1. **Update services with existing JSON files** to use HttpClient loading pattern:
   - MockBudgetWarrantService → budget-warrants.json
   - MockGrantService → grants.json
   - MockTreasuryCashService → treasury-cash.json
   - MockEmployeeService → employees.json
   - MockAssetService → assets.json
   - MockRevenueCollectionService → revenue-collection.json
   - MockDonorService → donors.json
   - MockJournalEntryService → journal-entries.json
   - MockPaymentVoucherService → payment-vouchers.json
   - MockProjectService (PIM) → pim-projects.json
   - MockBankAccountService → bank-accounts.json
   - MockMunicipalBondsService → municipal bonds JSON files
   - MockSOEGovernanceService → SOE JSON files

2. **Create remaining JSON files** following the template pattern in INDEX.md

3. **Update service registration** to inject HttpClient where needed

### Priority Order

**High Priority** (Services with JSON files already created):
1. Budget, Grant, Treasury, Asset, Revenue services
2. Municipal Bonds and SOE Governance services

**Medium Priority** (Core financial services):
1. Accounting services (vendor payments, withholding tax, etc.)
2. Additional budget services (amendments, utilization)
3. Additional treasury services (loans, investments)

**Low Priority** (Support services):
1. Decision engine services
2. Workflow services
3. Analytics services

## Implementation Notes

- All mock services should inject `HttpClient` in constructor
- Use lazy loading pattern with `_initialized` flag
- Implement error handling with fallback to empty data
- Keep data loading async to avoid blocking
- Store loaded data in private fields for performance
- Entity-specific services can use entity code to determine folder path

## Next Steps

1. Document the current hard-coded pattern in each service
2. Update high-priority services to use JSON loading
3. Create templates for remaining JSON files
4. Update service registration in DI container
5. Test JSON loading functionality
6. Migrate remaining services progressively
