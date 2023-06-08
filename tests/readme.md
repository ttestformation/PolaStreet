# Configuration

Configuration is made through the config.sh file.

```bash
#! /bin/bash

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

# Usage

Simply launch the _run_tests.sh_ shell script.

Here's a sample output:

```
2023-06-08 23:31:56 - unit_000                                           [Failure]
2023-06-08 23:31:56 - unit_001                                           [Success]
2023-06-08 23:31:56 - unit_002                                           [Success]
2023-06-08 23:31:56 - unit_003                                           [Missing]
```