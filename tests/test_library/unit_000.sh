#! /bin/bash

# =================================================================================================
# Test ID: unit_000
# -------------------------------------------------------------------------------------------------
# This unit test is testing connetion with the PolaStreet host
# =================================================================================================
source config.sh

# =================================================================================================
# Testing connection with the HOST
# =================================================================================================
RESULT=$(curl --silent --noproxy '*' ${HOST_ADDRESS})
[ $? -ne 0 ] && exit 1 || exit 0
