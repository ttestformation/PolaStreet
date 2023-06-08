# Configuration

Configuration is made through the config.sh file.

```bash
#! /bin/bash

# Configuration files
CFG_FILE="./config.xml"
XSL_FILE="./config.xsl"

# Host information
HOST_ADDRESS=http://127.0.0.1:8000

# Path to unit test scripts
LIBRARY_PATH=./test_library

# List of tests to run (keeps order)
declare -a TESTS_LIST
TESTS_LIST+=( "unit_000" )
TESTS_LIST+=( "unit_001" )
TESTS_LIST+=( "unit_002" )
TESTS_LIST+=( "unit_003" )
```

# Test library

Scripts must be stored in the folder specified in the LIBRARY_PATH variable. They must follow the \<unit_test_id\>.sh naming rule.