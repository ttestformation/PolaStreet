import requests
import pytest
import urllib

def ping_site(host='127.0.0.1', port=8080):
    uri = 'http://{}:{}'.format(host,port)
    result = requests.get(uri).json()
    overview = result.get('documentation',{}).get('overview',None)
    if overview:
        return overview
    else:
        raise "500"

def get_adresse_coordonnees(host='127.0.0.1', port=8080, adresse=''):
    safe_adresse = urllib.request.pathname2url(adresse)
    uri = 'http://{}:{}/adresse/coordonnees?adresse={}'.format(host,port,safe_adresse)
    result = requests.get(uri).json()
    latitude = result.get('latitude',None)
    longitude = result.get('longitude',None)
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