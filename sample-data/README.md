# Sample Data Documentation for MinistryFinanceWebApp

This directory contains sample JSON data files organized by government ministries and institutions. The data is structured to support the mock services used throughout the application for testing and demonstration purposes.

## Directory Structure

The sample data is organized into folders representing each government ministry and institution. Each folder contains JSON files corresponding to the mock services that handle data for that entity.

### Government Ministries (15)

1. **ministry-of-finance** - Ministry of Finance
2. **ministry-of-home-affairs** - Ministry of Home Affairs
3. **ministry-of-health** - Ministry of Health
4. **ministry-of-education** - Ministry of Education
5. **ministry-of-agriculture** - Ministry of Agriculture
6. **ministry-of-transport** - Ministry of Transport
7. **ministry-of-energy** - Ministry of Energy
8. **ministry-of-water** - Ministry of Water and Sanitation
9. **ministry-of-defence** - Ministry of Defence
10. **ministry-of-foreign-affairs** - Ministry of Foreign Affairs
11. **ministry-of-justice** - Ministry of Justice
12. **ministry-of-labour** - Ministry of Labour
13. **ministry-of-tourism** - Ministry of Tourism
14. **ministry-of-sports** - Ministry of Sports
15. **ministry-of-youth** - Ministry of Youth Development

### Government Institutions (13)

1. **ceec** - Citizen Economic Empowerment Commission (CEEC)
2. **zra** - Zambia Revenue Authority (ZRA)
3. **bank-of-zambia** - Bank of Zambia (Central Bank)
4. **napsa** - National Pension Scheme Authority (NAPSA)
5. **nhima** - National Health Insurance Management Authority (NHIMA)
6. **zicta** - Zambia Information and Communications Technology Authority (ZICTA)
7. **zema** - Zambia Environmental Management Agency (ZEMA)
8. **zda** - Zambia Development Agency (ZDA)
9. **pacra** - Patents and Companies Registration Agency (PACRA)
10. **ncc** - National Construction Council (NCC)
11. **eiz** - Engineering Institution of Zambia (EIZ)
12. **znbc** - Zambia National Broadcasting Corporation (ZNBC)
13. **zanis** - Zambia News and Information Services (ZANIS)

## Mock Services and Their Data Files

The application uses **161 mock services** across three components:
- **73 services** in CompanyApp.Government.MinistryFinanceWebApp
- **26 services** in CompanyApp.Components.MinistryofFinance
- **62 services** in CompanyApp.Components.National.Budget

### Service Categories and Sample Data Files

Each folder may contain the following JSON data files based on the services applicable to that ministry/institution:

#### 1. Budget Services (6 files)
- `budget-warrants.json` - Budget warrant data (MockBudgetWarrantService)
- `budget-amendments.json` - Budget amendment records (MockBudgetAmendmentService)
- `budget-utilization.json` - Budget utilization tracking (MockBudgetUtilizationService)
- `supplementary-budgets.json` - Supplementary budget requests (MockSupplementaryBudgetService)
- `virements.json` - Budget virement records (MockVirementService)
- `commitments.json` - Budget commitment tracking (MockCommitmentService)

#### 2. Accounting Services (9 files)
- `journal-entries.json` - Journal entry records (MockJournalEntryService)
- `vendor-payments.json` - Vendor payment data (MockVendorPaymentService)
- `withholding-tax.json` - Withholding tax records (MockWithholdingTaxService)
- `payment-vouchers.json` - Payment voucher data (MockPaymentVoucherService)
- `check-management.json` - Check management records (MockCheckManagementService)
- `payment-requests.json` - Payment request data (MockPaymentRequestService)
- `payment-batches.json` - Payment batch records (MockPaymentBatchService)
- `trial-balance.json` - Trial balance data (MockTrialBalanceService)
- `bank-reconciliation.json` - Bank reconciliation records (MockBankReconciliationService)

#### 3. Treasury Services (9 files)
- `treasury-warrants.json` - Treasury warrant data (MockTreasuryWarrantService)
- `treasury-cash.json` - Cash management data (MockTreasuryCashService)
- `bank-accounts.json` - Bank account information (MockBankAccountManagementService)
- `cash-rationing.json` - Cash rationing records (MockCashRationingService)
- `cash-sweep.json` - Cash sweep data (MockCashSweepService)
- `tsa.json` - Treasury Single Account data (MockTSAService)
- `loans.json` - Loan management records (MockLoanManagementService)
- `investments.json` - Investment management data (MockInvestmentManagementService)
- `bank-integration.json` - Bank integration data (MockBankIntegrationService)

#### 4. Revenue Services (5 files)
- `revenue-collection.json` - Revenue collection data (MockRevenueCollectionService)
- `billing.json` - Billing records (MockBillingService)
- `customers.json` - Customer management data (MockCustomerManagementService)
- `invoices.json` - Invoice management records (MockInvoiceManagementService)
- `accounts-receivable.json` - Accounts receivable data (MockAccountsReceivableServices)

#### 5. Asset Services (5 files)
- `assets.json` - Asset register data (MockAssetService)
- `asset-maintenance.json` - Asset maintenance records (MockAssetMaintenanceService)
- `asset-transfers.json` - Asset transfer data (MockAssetTransferService)
- `asset-verification.json` - Asset verification records (MockAssetVerificationService)
- `depreciation.json` - Depreciation schedules (MockDepreciationService)

#### 6. Grant Services (2 files)
- `grants.json` - Grant management data (MockGrantService)
- `donors.json` - Donor information (MockDonorService)

#### 7. Project Investment Management (PIM) Services (3 files)
- `pim-projects.json` - Public investment projects (MockPIMServices)
- `project-pipeline.json` - Project pipeline data (MockProjectPipelineService)
- `selection-monitoring.json` - Project selection and monitoring (MockSelectionMonitoringServices)

#### 8. HR & Payroll Services (1 file)
- `employees.json` - Employee data (MockEmployeeService)

#### 9. Integration Services (6 files)
- `zra-integration.json` - ZRA tax integration data (MockZRAIntegrationService)
- `napsa-integration.json` - NAPSA pension integration (MockNAPSAIntegrationService)
- `egp-integration.json` - E-Government Procurement integration (MockEGPIntegrationService)
- `customs-integration.json` - Customs integration data (MockCustomsIntegrationService)
- `bank-integration.json` - Banking system integration (MockBankIntegrationService)
- `statistical-integration.json` - Statistical system integration (MockStatisticalSystemIntegrationService)

#### 10. Decision Engine Services (11 files)
- `risk-assessment.json` - Risk assessment data (MockRiskAssessmentService)
- `compliance-monitoring.json` - Compliance monitoring (MockComplianceMonitoringService)
- `pattern-detection.json` - Pattern detection results (MockPatternDetectionService)
- `network-analytics.json` - Network analytics data (MockNetworkAnalyticsService)
- `entity-resolution.json` - Entity resolution records (MockEntityResolutionService)
- `recommendation-engine.json` - Recommendations (MockRecommendationEngineService)
- `contextual-decisions.json` - Contextual decision data (MockContextualDecisionService)
- `alert-management.json` - Alert management (MockAlertManagementService)
- `contextual-alerts.json` - Contextual alerts (MockContextualAlertManagementService)
- `performance-benchmarking.json` - Performance benchmarks (MockPerformanceBenchmarkingService)
- `realtime-decision-engine.json` - Real-time decisions (MockRealTimeDecisionEngineService)

#### 11. Workflow Services (4 files)
- `workflow-engine.json` - Workflow engine data (MockWorkflowEngineService)
- `workflow-routing.json` - Workflow routing (MockWorkflowRoutingService)
- `workflow-enhancements.json` - Workflow enhancements (MockWorkflowEnhancementServices)
- `delegation.json` - Delegation records (MockDelegationService)

#### 12. Parliamentary Services (2 files)
- `accounts-committee.json` - Parliamentary Accounts Committee data (MockAccountsCommitteeService)
- `mp-budget-analysis.json` - MP budget analysis (MockMPBudgetAnalysisService)

#### 13. Performance & Analytics Services (4 files)
- `dashboard.json` - Dashboard data (MockDashboardService)
- `executive-dashboard.json` - Executive dashboard metrics (MockExecutiveDashboardService)
- `analytics.json` - Analytics data (MockAnalyticsService)
- `reporting.json` - Reporting data (MockReportingService)

#### 14. Specialized Financial Services (4 files)
- `municipal-bonds.json` - Municipal bonds data (MockMunicipalBondsService)
- `wealth-funds.json` - Sovereign wealth funds (MockWealthFundServices)
- `ppp-projects.json` - Public-Private Partnership projects (MockPPPServices)
- `funds.json` - Fund management (MockFundService)

#### 15. System Services (2 files)
- `users.json` - User management data (MockUserService)
- `sla-management.json` - SLA management (MockSLAManagementService)

## File Naming Conventions

- Use lowercase with hyphens for folder names (e.g., `ministry-of-finance`)
- Use lowercase with hyphens for JSON file names (e.g., `budget-warrants.json`)
- Each JSON file should contain an array of sample records
- Include realistic Zambian data where applicable (names, locations, currencies, etc.)

## Sample Data Guidelines

1. **Realistic Data**: Use realistic Zambian government ministry names, departments, and locations
2. **Consistent IDs**: Ensure entity IDs are consistent across related files
3. **Date Formats**: Use ISO 8601 format (YYYY-MM-DD) for dates
4. **Currency**: Use ZMW (Zambian Kwacha) as the primary currency, USD for international transactions
5. **Amounts**: Use realistic amounts appropriate for government budgets and transactions
6. **Status Values**: Use consistent status enumerations as defined in the model classes
7. **Cross-References**: Maintain referential integrity between related entities

## Usage

These sample data files are loaded by the mock services during application initialization. They provide:
- Demonstration data for UI testing
- Sample records for development and debugging
- Reference implementations for data structure
- Test data for integration testing

## Updating Sample Data

When adding or modifying sample data:
1. Ensure the JSON structure matches the corresponding model classes
2. Update all cross-referenced entities to maintain data integrity
3. Follow the naming conventions outlined above
4. Add appropriate comments in this README if introducing new data files
5. Test the mock service to ensure the data loads correctly

## Ministry-Specific Data Distribution

Not all ministries/institutions will have all types of data. The distribution should reflect the primary functions of each entity:

### Ministry of Finance
- All budget services
- All treasury services
- All accounting services
- Revenue services
- Decision engine services
- Workflow services
- Parliamentary services
- Integration services

### Ministry of Health
- Budget services (budget-warrants, budget-utilization)
- Accounting services (payment-vouchers, vendor-payments)
- Asset services (assets, asset-maintenance)
- HR services (employees)
- Grant services (grants, donors)

### Ministry of Education
- Budget services
- Accounting services
- Asset services
- HR services
- Grant services
- PIM services (for infrastructure projects)

### ZRA (Zambia Revenue Authority)
- Revenue services (all)
- Integration services (zra-integration)
- Compliance monitoring
- Risk assessment

### NAPSA (National Pension Scheme Authority)
- HR services
- Integration services (napsa-integration)
- Accounting services

### Bank of Zambia
- Treasury services (all)
- Investment management
- Cash management
- Bank integration

### Other Ministries/Institutions
Each receives a subset of services relevant to their mandate and operations.

## Total Files Expected

With 28 government entities and an average of 15-20 JSON files per major entity, expect approximately:
- **Major entities** (MoF, MoH, MoE): 40-50 files each
- **Medium entities** (other ministries): 15-25 files each
- **Smaller entities** (specialized institutions): 5-10 files each

**Total estimated files: 400-500 JSON files** across all folders.

## Version Information

- **Created**: January 2026
- **Last Updated**: January 2026
- **Application Version**: MinistryFinanceWebApp v1.0
- **Mock Services Count**: 161 services
- **Government Entities**: 28 (15 ministries, 13 institutions)
