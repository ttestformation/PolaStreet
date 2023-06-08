# Configuration

Configuration is made through the config.xml file.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings>
    <Host>http://127.0.0.1:8000</Host>
    <LibraryPath>./test_library</LibraryPath>
    <Tests>
        <Test name="unit_000" descritpion="Unit 000" type="backend" critical="yes" />
        <Test name="unit_001" descritpion="Unit 001" type="backend" critical="no"  />
        <Test name="unit_002" descritpion="Unit 002" type="backend" critical="yes" />
        <Test name="unit_003" descritpion="Unit 003" type="backend" />
    </Tests>
</settings>
```

# Test library

Scripts must be stored in the folder specified by the /settings/LibraryPath node. They must follow the \<name\>.sh naming rule.