# Sample Data Implementation Guide

This guide provides instructions for developers on how to use and extend the sample data structure in the MinistryFinanceWebApp.

## Overview

The sample data structure has been created to support **161 mock services** across **28 government entities** (15 ministries and 13 institutions). The data is organized in JSON files within entity-specific folders.

## Current Implementation Status

### ✅ Completed
- **28 entity folders** created (all ministries and institutions from TestLogin.razor)
- **22 JSON sample data files** created across key entities
- **README.md** with comprehensive documentation
- **INDEX.md** with quick reference and templates
- **Updated .csproj** with all folder references

### 📊 Statistics
- Total Folders: 28
- Total JSON Files: 22
- Folders with Data: 8 (Ministry of Finance, Health, Education, Agriculture, ZRA, CEEC, Bank of Zambia, NAPSA)
- Folders Ready for Data: 20 (with .gitkeep placeholders)

## Directory Structure

```
wwwroot/sample-data/
├── README.md                          # Main documentation
├── INDEX.md                           # Quick reference and templates
├── IMPLEMENTATION_GUIDE.md            # This file
├── weather.json                       # Legacy file (can be removed)
│
├── ministry-of-finance/               # 11 files - Full implementation
│   ├── budget-warrants.json
│   ├── grants.json
│   ├── treasury-cash.json
│   ├── employees.json
│   ├── assets.json
│   ├── revenue-collection.json
│   ├── donors.json
│   ├── journal-entries.json
│   ├── payment-vouchers.json
│   ├── pim-projects.json
│   └── bank-accounts.json
│
├── ministry-of-health/                # 2 files
│   ├── grants.json
│   └── budget-warrants.json
│
├── ministry-of-education/             # 1 file
│   └── grants.json
│
├── ministry-of-agriculture/           # 2 files
│   ├── budget-warrants.json
│   └── grants.json
│
├── zra/                               # 3 files
│   ├── revenue-collection.json
│   ├── customers.json
│   └── zra-integration.json
│
├── ceec/                              # 1 file
│   └── assets.json
│
├── bank-of-zambia/                    # 1 file
│   └── treasury-cash.json
│
├── napsa/                             # 1 file
│   └── napsa-integration.json
│
└── [20 other entity folders with .gitkeep]
```

## How to Use the Sample Data

### 1. Loading Data in Mock Services

Mock services can load data from JSON files using the `HttpClient` in Blazor:

```csharp
public class MockBudgetWarrantService : IBudgetWarrantService
{
    private readonly HttpClient _httpClient;
    private List<BudgetWarrant> _warrants = new();

    public MockBudgetWarrantService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    private async Task InitializeDataAsync()
    {
        try
        {
            // Load from JSON file in wwwroot/sample-data
            var warrants = await _httpClient
                .GetFromJsonAsync<List<BudgetWarrant>>(
                    "sample-data/ministry-of-finance/budget-warrants.json");
            
            if (warrants != null)
            {
                _warrants = warrants;
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error loading sample data: {ex.Message}");
            // Fall back to hard-coded data or empty list
            _warrants = new List<BudgetWarrant>();
        }
    }
}
```

### 2. Entity-Specific Data Loading

Services can load data for specific entities based on the current user's ministry/institution:

```csharp
private async Task<List<Grant>> LoadGrantsForEntityAsync(string entityCode)
{
    var folderName = GetFolderNameForEntity(entityCode);
    var url = $"sample-data/{folderName}/grants.json";
    
    try
    {
        return await _httpClient.GetFromJsonAsync<List<Grant>>(url);
    }
    catch
    {
        // Fallback to Ministry of Finance data or empty list
        return new List<Grant>();
    }
}

private string GetFolderNameForEntity(string entityCode)
{
    return entityCode switch
    {
        "mof" => "ministry-of-finance",
        "mohealth" => "ministry-of-health",
        "moedu" => "ministry-of-education",
        "zra" => "zra",
        "ceec" => "ceec",
        // ... add all 28 entities
        _ => "ministry-of-finance" // default
    };
}
```

### 3. Combining Multiple Data Sources

Services can combine data from multiple files:

```csharp
public async Task<DashboardData> GetDashboardDataAsync(string ministry)
{
    var folderName = GetFolderNameForEntity(ministry);
    
    var budgetTask = LoadDataAsync<BudgetWarrant>($"{folderName}/budget-warrants.json");
    var grantsTask = LoadDataAsync<Grant>($"{folderName}/grants.json");
    var revenueTask = LoadDataAsync<RevenueCollection>($"{folderName}/revenue-collection.json");
    
    await Task.WhenAll(budgetTask, grantsTask, revenueTask);
    
    return new DashboardData
    {
        BudgetWarrants = budgetTask.Result,
        Grants = grantsTask.Result,
        RevenueCollections = revenueTask.Result
    };
}
```

## Adding New Sample Data

### Step 1: Identify the Entity and Service

Determine which entity folder and which service category your data belongs to.

### Step 2: Create the JSON File

Use the templates in `INDEX.md` as a starting point:

```bash
# Navigate to the entity folder
cd wwwroot/sample-data/ministry-of-{name}/

# Create the JSON file
touch {service-category}.json
```

### Step 3: Follow the Data Format

Ensure your JSON follows these guidelines:

1. **Use an array**: Even for single records, wrap in an array `[...]`
2. **Follow naming conventions**: Use camelCase for properties
3. **Use ISO 8601 dates**: Format as `YYYY-MM-DDTHH:mm:ss`
4. **Maintain referential integrity**: Ensure IDs match across related files
5. **Use realistic data**: Include realistic Zambian names, locations, amounts

Example:
```json
[
  {
    "id": 1,
    "name": "Sample Record",
    "date": "2024-01-15T00:00:00",
    "amount": 1000000.00,
    "status": "Active"
  }
]
```

### Step 4: Update Documentation

If you add a new file type, update:
- `README.md` - Add to the service categories section
- `INDEX.md` - Add to the files by entity section
- This file - Update the statistics

## Testing Sample Data

### Verify JSON Validity

Use an online JSON validator or VS Code:

```bash
# In VS Code, open the JSON file and it will highlight errors
# Or use jq to validate:
jq empty your-file.json
```

### Test in the Application

1. Build and run the application
2. Navigate to TestLogin page
3. Login as a user from the relevant ministry/institution
4. Verify that data loads correctly in the UI
5. Check browser console for any errors

### Common Issues and Solutions

**Issue**: Data not loading
- **Solution**: Check file path is correct and matches entity folder name
- **Solution**: Ensure JSON is valid (no trailing commas, proper escaping)
- **Solution**: Verify file is included in build (check .csproj)

**Issue**: Dates not parsing
- **Solution**: Use ISO 8601 format: `YYYY-MM-DDTHH:mm:ss`
- **Solution**: Ensure DateTime fields in C# models match JSON format

**Issue**: Referential integrity errors
- **Solution**: Check that related IDs exist in referenced files
- **Solution**: Use consistent ID sequences across files

## Data Distribution Strategy

### Major Entities (Full Implementation)
These should have 40-50+ files covering all applicable service categories:
- Ministry of Finance
- Ministry of Health
- Ministry of Education
- ZRA (Zambia Revenue Authority)

### Medium Entities
These should have 15-25 files covering their primary functions:
- Ministry of Agriculture
- Ministry of Transport
- Ministry of Energy
- Bank of Zambia
- NAPSA
- CEEC

### Smaller Entities
These should have 5-10 files covering essential services:
- Other ministries
- Specialized institutions (ZICTA, ZEMA, etc.)

## Mock Service Categories and Files

### 1. Budget Services
Files: `budget-warrants.json`, `budget-amendments.json`, `budget-utilization.json`, `supplementary-budgets.json`, `virements.json`, `commitments.json`

### 2. Accounting Services
Files: `journal-entries.json`, `vendor-payments.json`, `withholding-tax.json`, `payment-vouchers.json`, `check-management.json`, `payment-requests.json`, `payment-batches.json`, `trial-balance.json`, `bank-reconciliation.json`

### 3. Treasury Services
Files: `treasury-warrants.json`, `treasury-cash.json`, `bank-accounts.json`, `cash-rationing.json`, `cash-sweep.json`, `tsa.json`, `loans.json`, `investments.json`, `bank-integration.json`

### 4. Revenue Services
Files: `revenue-collection.json`, `billing.json`, `customers.json`, `invoices.json`, `accounts-receivable.json`

### 5. Asset Services
Files: `assets.json`, `asset-maintenance.json`, `asset-transfers.json`, `asset-verification.json`, `depreciation.json`

### 6. Grant Services
Files: `grants.json`, `donors.json`

### 7. Integration Services
Files: `zra-integration.json`, `napsa-integration.json`, `egp-integration.json`, `customs-integration.json`, `bank-integration.json`, `statistical-integration.json`

(See README.md for complete list of all 15 categories)

## Best Practices

1. **Start Small**: Begin with 2-3 files per entity, expand as needed
2. **Use Templates**: Copy from existing files or use templates in INDEX.md
3. **Maintain Consistency**: Keep property names and structures consistent
4. **Version Control**: Track changes to sample data files in git
5. **Document Changes**: Update INDEX.md when adding new file types
6. **Test Regularly**: Verify data loads correctly after changes
7. **Realistic Data**: Use appropriate Zambian context (names, locations, amounts)
8. **Cross-Reference**: Ensure related entities reference each other correctly

## Migration from Hard-Coded Data

To migrate existing mock services from hard-coded data to JSON files:

1. **Extract Existing Data**: Copy current hard-coded data from mock service
2. **Format as JSON**: Convert C# objects to JSON format
3. **Save to File**: Create appropriate JSON file in entity folder
4. **Update Service**: Modify service to load from JSON instead
5. **Test**: Verify data loads correctly
6. **Remove Hard-Coded Data**: Clean up old initialization code

Example migration:

**Before:**
```csharp
private void InitializeData()
{
    _grants = new List<Grant>
    {
        new Grant { GrantId = 1, GrantName = "Example", ... },
        // ... more hard-coded data
    };
}
```

**After:**
```csharp
private async Task InitializeDataAsync()
{
    _grants = await _httpClient
        .GetFromJsonAsync<List<Grant>>(
            "sample-data/ministry-of-finance/grants.json") 
        ?? new List<Grant>();
}
```

## Performance Considerations

- JSON files are loaded once at service initialization
- Data is cached in memory for fast access
- Large files (>1MB) should be paginated or split
- Consider lazy loading for rarely accessed data
- Use async/await to prevent UI blocking

## Security Notes

- Sample data should NOT contain real sensitive information
- Use fictional but realistic data
- Do not include actual government data
- Clear sample data before production deployment
- Consider environment-specific data sets (dev/test/prod)

## Next Steps

1. **Complete High-Priority Entities**: Add comprehensive data for MoF, MoH, MoE
2. **Add Medium-Priority Data**: Populate data for other major ministries
3. **Integration Testing**: Test data flow across related services
4. **Performance Testing**: Measure load times with full data sets
5. **User Acceptance**: Review with stakeholders for data realism
6. **Documentation**: Keep README and INDEX up to date

## Support and Contribution

For questions or contributions:
1. Review existing sample files for patterns
2. Follow the templates in INDEX.md
3. Test thoroughly before committing
4. Update documentation for new file types
5. Maintain consistent formatting and structure

## Version History

- **v1.0** (January 2026): Initial implementation
  - 28 entity folders created
  - 22 JSON files with sample data
  - Comprehensive documentation
  - Ready for extension and use
