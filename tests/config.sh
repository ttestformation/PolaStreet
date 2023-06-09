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
