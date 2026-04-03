# Sample Data Distribution Summary

## Overview
This document describes the distribution of sample data from `ministry-of-finance` folder to other entity folders in `wwwroot/sample-data/`.

## What Was Done

Sample JSON data files were copied and customized from the Ministry of Finance to appropriate entities based on their operational context. Each entity received data relevant to their specific functions and responsibilities.

## Data Types Distributed

### 1. **Assets (assets.json)**
Asset inventory data customized for each entity's specific equipment and resources:

- **Ministry of Health**: Medical equipment (X-Ray machines), ambulances
- **Ministry of Education**: Computer labs, school buses
- **Ministry of Agriculture**: Tractors, farm equipment, field vehicles
- **Ministry of Defence**: Communication equipment, military vehicles
- **Ministry of Energy**: Solar power systems, field inspection vehicles
- **Ministry of Water**: Water quality testing equipment, field vehicles
- **Ministry of Transport**: Road construction equipment (graders), inspection vehicles
- **ZRA**: Tax management servers, customs inspection vehicles

### 2. **Employees (employees.json)**
Employee records with ministry-specific positions and departments:

- **Ministry of Health**: Medical officers, public health directors
- **Ministry of Education**: Curriculum developers, education officers
- **Ministry of Agriculture**: Extension officers, agriculture coordinators
- **Ministry of Defence**: Military officers, logistics personnel
- **Ministry of Energy**: Energy planners, renewable energy officers
- **Ministry of Water**: Water engineers, sanitation officers
- **Ministry of Transport**: Roads engineers, transport planners
- **ZRA**: Tax commissioners, tax auditors
- **NAPSA**: Pension officers, benefits administrators

### 3. **Budget Warrants (budget-warrants.json)**
Quarterly budget allocation warrants:

- **Ministry of Education**: K8.5B - K8.7B (teacher salaries, infrastructure)
- **Ministry of Defence**: K6.5B - K6.7B (personnel, equipment maintenance)
- **Ministry of Transport**: K4.5B (road maintenance, infrastructure)

### 4. **Grants (grants.json)**
Already existed for:
- Ministry of Agriculture
- Ministry of Education
- Ministry of Health

## Data Customization Details

Each file was customized with:

1. **Entity-Specific Identifiers**
   - Asset numbers (e.g., MOH-AST-2024-001, MOE-AST-2024-001)
   - Employee numbers (e.g., MOA-2024-001, MOD-2024-001)
   - Warrant numbers (e.g., WAR-2024-Q1-EDU-001)

2. **Relevant Equipment/Resources**
   - Medical equipment for Health
   - Educational equipment for Education
   - Agricultural machinery for Agriculture
   - Military equipment for Defence
   - Energy infrastructure for Energy
   - Water testing equipment for Water
   - Road construction equipment for Transport
   - Tax systems for ZRA

3. **Appropriate Job Titles**
   - Medical professionals for Health
   - Teachers and education officers for Education
   - Agricultural extension officers for Agriculture
   - Military ranks for Defence
   - Engineers for technical ministries
   - Tax professionals for ZRA

4. **Realistic Budget Allocations**
   - Higher allocations for Education (largest ministry)
   - Substantial allocations for Defence
   - Appropriate amounts for Transport infrastructure

## Entities Updated

### Ministries
- ✅ Ministry of Health
- ✅ Ministry of Education
- ✅ Ministry of Agriculture
- ✅ Ministry of Defence
- ✅ Ministry of Energy
- ✅ Ministry of Water
- ✅ Ministry of Transport

### Agencies
- ✅ ZRA (Zambia Revenue Authority)
- ✅ NAPSA (National Pension Scheme Authority)

### Entities with Existing Data (Not Modified)
- Ministry of Finance (source data)
- Bank of Zambia (has treasury-cash.json)
- CEEC (has assets.json)

## File Structure

```
wwwroot/sample-data/
├── ministry-of-finance/          [Source - 80+ files]
├── ministry-of-health/
│   ├── assets.json               [NEW]
│   ├── employees.json            [NEW]
│   ├── budget-warrants.json      [Existing]
│   └── grants.json               [Existing]
├── ministry-of-education/
│   ├── assets.json               [NEW]
│   ├── employees.json            [NEW]
│   ├── budget-warrants.json      [NEW]
│   └── grants.json               [Existing]
├── ministry-of-agriculture/
│   ├── assets.json               [NEW]
│   ├── employees.json            [NEW]
│   ├── budget-warrants.json      [Existing]
│   └── grants.json               [Existing]
├── ministry-of-defence/
│   ├── assets.json               [NEW]
│   ├── employees.json            [NEW]
│   └── budget-warrants.json      [NEW]
├── ministry-of-energy/
│   ├── assets.json               [NEW]
│   └── employees.json            [NEW]
├── ministry-of-water/
│   ├── assets.json               [NEW]
│   └── employees.json            [NEW]
├── ministry-of-transport/
│   ├── assets.json               [NEW]
│   ├── employees.json            [NEW]
│   └── budget-warrants.json      [NEW]
├── zra/
│   ├── assets.json               [NEW]
│   ├── employees.json            [NEW]
│   ├── customers.json            [Existing]
│   ├── revenue-collection.json   [Existing]
│   └── zra-integration.json      [Existing]
└── napsa/
    ├── employees.json            [NEW]
    └── napsa-integration.json    [Existing]
```

## Purpose and Benefits

1. **Multi-Tenant Testing**: Each entity now has realistic sample data for testing multi-tenant functionality
2. **Realistic Scenarios**: Data reflects actual government operations and workflows
3. **Cross-Ministry Integration**: Enables testing of inter-ministry data sharing and workflows
4. **Comprehensive Coverage**: Assets, employees, budgets, and grants cover core IFMIS functions
5. **Scalability**: Template for adding more data types to other entities

## Next Steps (Optional)

Additional data types that could be distributed:
- Payment requests
- Journal entries
- Revenue collections
- Commitments
- Virements
- Workflow instances
- Performance indicators

## Usage

These files can be loaded by mock services or used for:
- Development testing
- Demo environments
- User training
- Integration testing
- Multi-tenant scenarios

---
*Generated: February 8, 2026*
*Total Files Created: 19 new JSON files across 9 entities*
