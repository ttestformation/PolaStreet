import requests
import pytest
import urllib
import os
import json

def validateJSON(jsonData):
    try:
        json.loads(jsonData)
    except ValueError as err:
        return False
    return True

def ping_site(url=os.environ.get('HOST_ADDRESS', 'http://127.0.0.1:8080')):
    result = requests.get(url)
    overview = "500"
    if result.status_code==404:
        if validateJSON(result.text):
            result_json = result.json()
            overview = result_json .get('documentation',{}).get('overview',None)
    return overview

def get_adresse_coordonnees(url=os.environ.get('HOST_ADDRESS', 'http://127.0.0.1:8080'), adresse=''):
    safe_adresse = urllib.request.pathname2url(adresse)
    uri = '{}/adresse/coordonnees?adresse={}'.format(url,safe_adresse)
    latitude,longitude = None,None
    result = requests.get(uri)
    if result:
        if validateJSON(result.text):
            result_json  = result.json()
            latitude = result_json .get('latitude',None)
            longitude = result_json .get('longitude',None)
    return latitude,longitude
    
def test_ping_site():
    assert ping_site() == "Create a simple HTTP server"
    
def test_get_adresse_coordonnees_success():
    latitude,longitude = get_adresse_coordonnees(adresse="16 rue Berthollet 94110 ARCUEIL")
    assert latitude == 48.803823
    assert longitude == 2.330629
    
def test_get_adresse_coordonnees_failure():
    latitude,longitude = get_adresse_coordonnees(adresse="16 rue Berthollet 94110 ARC")
    assert latitude == None
    assert longitude == None    