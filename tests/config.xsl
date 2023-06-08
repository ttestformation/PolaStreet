<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <!-- ================================================================== -->
    <!-- Output method and encoding                                         -->
    <!-- ================================================================== -->
    <xsl:output method="text"    encoding="utf-8" />

    <!-- ================================================================== -->
    <!-- Constants definition                                               -->
    <!-- ================================================================== -->
    <xsl:param  name="delimiter" select="';'"     />
    <xsl:param  name="break"     select="'&#xA;'" />
    <xsl:param  name="items"     select="''"      />

    <!-- ================================================================== -->
    <!-- Reading configuration                                              -->
    <!-- ================================================================== -->
    <xsl:template match="/">
        <xsl:choose>
            <xsl:when test="$items='host'">
                <xsl:apply-templates select="/settings/Host" />
            </xsl:when>
            <xsl:when test="$items='tests'">
                <xsl:apply-templates select="/settings/Tests" />
            </xsl:when>
            <xsl:when test="$items='library'">
                <xsl:apply-templates select="/settings/LibraryPath" />
            </xsl:when>
            <xsl:otherwise>unsupported</xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <!-- ================================================================== -->
    <!-- Extracts Host informations                                         -->
    <!-- ================================================================== -->
    <xsl:template match="/settings/Host">
        <xsl:value-of select="current()" />
    </xsl:template>

    <!-- ================================================================== -->
    <!-- Extracts library informations                                      -->
    <!-- ================================================================== -->
    <xsl:template match="/settings/LibraryPath">
        <xsl:value-of select="current()" />
    </xsl:template>

    <!-- ================================================================== -->
    <!-- Extract tests information                                          -->
    <!-- ================================================================== -->
    <xsl:template match="/settings/Tests">
        <xsl:for-each select="child::*">
            <xsl:value-of select="./@name" />
            <xsl:value-of select="concat($delimiter, ./@description)" />
            <xsl:value-of select="concat($delimiter, ./@type)" />
            <xsl:value-of select="concat($delimiter, ./@critical)" />
            <xsl:value-of select="$break" />
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>