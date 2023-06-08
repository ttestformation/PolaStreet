#! /bin/bash
# =============================================================================
# Script used to launch PolaStreet test campaign
# -----------------------------------------------------------------------------
# GDE - 2023-06-08 - Creation
# =============================================================================

# =============================================================================
# Initialisations
# =============================================================================
CFG_FILE="./config.xml"
XSL_FILE="./config.xsl"
HOST_URL=$(xsltproc --stringparam items "host" ${XSL_FILE} ${CFG_FILE})
LIBRARY_PATH=$(xsltproc --stringparam items "library" ${XSL_FILE} ${CFG_FILE})

# =============================================================================
# Running tests
# =============================================================================
TESTS_DEFINITION=$(xsltproc --stringparam items "tests" ${XSL_FILE} ${CFG_FILE})
if [ ! -z "${TESTS_DEFINITION}" ]
then
    while IFS=";" read -r NAME DESCRIPTION TYPE CRITICAL
    do
        # ------------------------------------------
        # Run current test
        # ------------------------------------------
        CURRENT_TEST=$LIBRARY_PATH/$NAME.sh
        if [ -f ${CURRENT_TEST} ]
        then
            RESULT=$($CURRENT_TEST)
            if [ $? -ne 0 ]
            then
                [ "${CRITICAL}" == "no" ] && __STATUS="Warning" || __STATUS="Failure"
            else
                __STATUS="Success"
            fi
        else
            __STATUS="Missing script"
        fi
        printf "$(date +"%Y-%m-%d %H:%M:%S") - %-50s [%-14s].\n" "[${TYPE}] Test: ${DESCRIPTION}" "${__STATUS}"
    done <<< "$TESTS_DEFINITION"
fi