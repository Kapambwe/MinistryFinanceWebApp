# Sample Data Files Index

This document provides a quick reference to all sample data files organized by government entity.

## Summary Statistics

- **Total Government Entities**: 28 (15 ministries + 13 institutions)
- **Total Mock Services**: 161 services
- **Sample Data Files Created**: 13+ files
- **Total Folders**: 28 entity folders

## Files by Entity

### Ministry of Finance
- `budget-warrants.json` - Budget warrant records
- `grants.json` - Grant management data  
- `treasury-cash.json` - Treasury cash flow records
- `employees.json` - Employee/staff information
- `assets.json` - Asset register
- `revenue-collection.json` - Revenue collection data
- `donors.json` - Donor information

**Total Files**: 7

### Ministry of Health
- `grants.json` - Health sector grants
- `budget-warrants.json` - Budget warrants for health

**Total Files**: 2

### Ministry of Education  
- `grants.json` - Education sector grants

**Total Files**: 1

### Zambia Revenue Authority (ZRA)
- `revenue-collection.json` - Tax revenue collections
- `customers.json` - Taxpayer information

**Total Files**: 2

### Other Entities
The following entities have `.gitkeep` placeholder files and are ready to receive sample data:

**Ministries**:
- Ministry of Home Affairs
- Ministry of Agriculture
- Ministry of Transport
- Ministry of Energy
- Ministry of Water and Sanitation
- Ministry of Defence
- Ministry of Foreign Affairs
- Ministry of Justice
- Ministry of Labour
- Ministry of Tourism
- Ministry of Sports
- Ministry of Youth Development

**Government Institutions**:
- CEEC (Citizen Economic Empowerment Commission)
- Bank of Zambia
- NAPSA (National Pension Scheme Authority)
- NHIMA (National Health Insurance Management Authority)
- ZICTA (Zambia Information and Communications Technology Authority)
- ZEMA (Zambia Environmental Management Agency)
- ZDA (Zambia Development Agency)
- PACRA (Patents and Companies Registration Agency)
- NCC (National Construction Council)
- EIZ (Engineering Institution of Zambia)
- ZNBC (Zambia National Broadcasting Corporation)
- ZANIS (Zambia News and Information Services)

## Sample Data File Templates

### Budget Warrants Template
```json
[
  {
    "id": 1,
    "warrantNumber": "WAR-YYYY-QN-NNN",
    "fiscalYear": "YYYY",
    "issueDate": "YYYY-MM-DDTHH:mm:ss",
    "type": "Quarterly|Special|Supplementary",
    "period": "Q1|Q2|Q3|Q4",
    "issuedTo": "Accounting Officer",
    "ministry": "Ministry Name",
    "department": "Department Name",
    "totalAmount": 0.00,
    "status": "Draft|Released|FullyUtilized|PartiallyUtilized|Expired",
    "issuedBy": "Issuer Name",
    "approvedBy": "Approver Name",
    "approvedDate": "YYYY-MM-DDTHH:mm:ss",
    "releaseDate": "YYYY-MM-DDTHH:mm:ss",
    "releasedBy": "Releaser Name",
    "justification": "Reason for warrant",
    "conditions": "Terms and conditions",
    "expiryDate": "YYYY-MM-DDTHH:mm:ss"
  }
]
```

### Grants Template
```json
[
  {
    "grantId": 1,
    "grantNumber": "GRT-YYYY-NNN",
    "grantName": "Project Name",
    "description": "Project description",
    "donorId": 1,
    "donorCode": "DONOR_CODE",
    "donorName": "Donor Name",
    "donorRepresentative": "Representative Name",
    "agreementNumber": "AGR/DONOR/YYYY/SECTOR/NNN",
    "agreementDate": "YYYY-MM-DDTHH:mm:ss",
    "startDate": "YYYY-MM-DDTHH:mm:ss",
    "endDate": "YYYY-MM-DDTHH:mm:ss",
    "totalGrantAmount": 0.00,
    "currency": "USD|ZMW",
    "exchangeRate": 25.5,
    "totalDisbursed": 0.00,
    "totalExpended": 0.00,
    "grantType": "ProjectGrant|BudgetSupport|TechnicalAssistance",
    "purpose": "Education|Health|Infrastructure|Agriculture",
    "sectorCode": "EDU|HLT|INF|AGR",
    "sectorName": "Sector Name",
    "implementingMinistryId": 1,
    "implementingMinistryName": "Ministry Name",
    "projectManager": "Manager Name",
    "projectManagerEmail": "email@ministry.gov.zm",
    "projectManagerPhone": "+260 XXX XXX XXX",
    "hasConditions": true,
    "conditionsDescription": "Grant conditions",
    "requiresCounterpartFunding": true,
    "counterpartFundingAmount": 0.00,
    "procurementRestrictions": "Procurement requirements",
    "reportingFrequency": "Monthly|Quarterly|Annually",
    "lastReportDate": "YYYY-MM-DDTHH:mm:ss",
    "nextReportDueDate": "YYYY-MM-DDTHH:mm:ss",
    "reportsSubmitted": 0,
    "reportsRequired": 0,
    "status": "Draft|Active|Suspended|Completed|Closed",
    "isSuspended": false,
    "createdDate": "YYYY-MM-DDTHH:mm:ss",
    "createdBy": "Creator Name"
  }
]
```

### Revenue Collection Template
```json
[
  {
    "id": 1,
    "revenueNumber": "REV-YYYY-NNN",
    "revenueSource": "Tax Collection|Non-Tax Revenue",
    "revenueType": "VAT|CorporateTax|PAYE|Licenses|Fees",
    "ministry": "Ministry/Agency Name",
    "department": "Department Name",
    "collectionDate": "YYYY-MM-DDTHH:mm:ss",
    "amount": 0.00,
    "currency": "ZMW|USD",
    "payerName": "Payer Name",
    "payerTpin": "NNNNNNNNNN",
    "receiptNumber": "RCP-YYYY-NNN",
    "bankName": "Bank Name",
    "accountNumber": "Account Number",
    "collectedBy": "Collector Name",
    "verifiedBy": "Verifier Name",
    "status": "Draft|Verified|Posted|Reversed"
  }
]
```

### Employees Template
```json
[
  {
    "employeeId": 1,
    "employeeNumber": "XXX-YYYY-NNN",
    "firstName": "First Name",
    "lastName": "Last Name",
    "middleName": "Middle Name",
    "dateOfBirth": "YYYY-MM-DDTHH:mm:ss",
    "gender": "Male|Female",
    "nationalId": "NNNNNN/NN/N",
    "email": "email@ministry.gov.zm",
    "phone": "+260 XXX XXX XXX",
    "position": "Position Title",
    "department": "Department Name",
    "ministry": "Ministry Name",
    "employmentType": "Permanent|Contract|Temporary",
    "hireDate": "YYYY-MM-DDTHH:mm:ss",
    "basicSalary": 0.00,
    "allowances": 0.00,
    "grade": "Grade N",
    "status": "Active|OnLeave|Suspended|Terminated"
  }
]
```

### Assets Template
```json
[
  {
    "id": 1,
    "assetNumber": "XXX-AST-YYYY-NNN",
    "assetName": "Asset Name",
    "assetCategory": "IT Equipment|Transport|Furniture|Building",
    "assetType": "Specific Type",
    "description": "Asset description",
    "ministry": "Ministry Name",
    "department": "Department Name",
    "location": "Physical Location",
    "acquisitionDate": "YYYY-MM-DDTHH:mm:ss",
    "acquisitionCost": 0.00,
    "currentValue": 0.00,
    "depreciationMethod": "StraightLine|ReducingBalance",
    "usefulLife": 0,
    "residualValue": 0.00,
    "serialNumber": "Serial Number",
    "manufacturer": "Manufacturer Name",
    "model": "Model Name",
    "warrantyExpiry": "YYYY-MM-DDTHH:mm:ss",
    "custodian": "Custodian Name",
    "status": "Active|InUse|UnderMaintenance|Disposed",
    "condition": "Excellent|Good|Fair|Poor"
  }
]
```

## Mock Service Categories

The 161 mock services are organized into the following categories:

1. **Budget Services** (6): Warrants, Amendments, Utilization, Supplementary, Virements, Commitments
2. **Accounting Services** (9): Journal Entries, Payments, Vouchers, Reconciliation, etc.
3. **Treasury Services** (9): Cash Management, TSA, Investments, Loans, etc.
4. **Revenue Services** (5): Collection, Billing, Invoices, Accounts Receivable
5. **Asset Services** (5): Assets, Maintenance, Transfers, Verification, Depreciation
6. **Grant Services** (2): Grants, Donors
7. **PIM Services** (3): Projects, Pipeline, Selection & Monitoring
8. **HR & Payroll** (1): Employees
9. **Integration Services** (6): ZRA, NAPSA, EGP, Customs, Bank, Statistical
10. **Decision Engine** (11): Risk, Compliance, Analytics, Recommendations, etc.
11. **Workflow Services** (4): Engine, Routing, Enhancements, Delegation
12. **Parliamentary Services** (2): Accounts Committee, MP Budget Analysis
13. **Performance & Analytics** (4): Dashboards, Analytics, Reporting
14. **Specialized Financial** (4): Municipal Bonds, Wealth Funds, PPP, Funds
15. **System Services** (2): Users, SLA Management

## Next Steps

To complete the sample data implementation:

1. **Populate remaining entity folders** with relevant JSON files based on their mandate
2. **Create comprehensive data sets** for each service category
3. **Ensure data consistency** across related entities
4. **Add cross-references** between related data files
5. **Update mock services** to load data from these JSON files
6. **Add validation** to ensure data integrity
7. **Document specific data requirements** for each mock service

## Notes

- All dates use ISO 8601 format: `YYYY-MM-DDTHH:mm:ss`
- Currency amounts are decimal values without thousand separators
- Status values should match the enumerations defined in model classes
- Cross-referenced IDs (e.g., donorId, ministryId) should be consistent across files
- File names use lowercase with hyphens for consistency
- Each JSON file contains an array of objects, even if only one record exists

## Version History

- **v1.0** (January 2026): Initial creation with 28 entity folders and 13+ sample files
