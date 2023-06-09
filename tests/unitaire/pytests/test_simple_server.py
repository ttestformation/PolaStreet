import requests
import pytest
import urllib
import os
import json

def validateJSON(jsonData):
    """Valide que le texte est au format JSON
    """ 
    try:
        json.loads(jsonData)
    except ValueError as err:
        return False
    return True

def ping_site(url=os.environ.get('HOST_ADDRESS', 'http://127.0.0.1:8080')):
    """Retourne le champ overview d'un site basé sur HUG
    """ 
    result = requests.get(url)
    overview = "500"
    if result.status_code==404:
        if validateJSON(result.text):
            result_json = result.json()
            overview = result_json .get('documentation',{}).get('overview',None)
    return overview

def get_adresse_coordonnees(url=os.environ.get('HOST_ADDRESS', 'http://127.0.0.1:8080'), adresse=''):
    """Retourne les coordonnées GPS d'une adresse
    """ 
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
    """Vérifie l'accès au site
    """    
    assert ping_site() == "Create a simple HTTP server"
    
def test_get_adresse_coordonnees_success():
    """Vérifie le résultat pour une adresse connue
    """
    latitude,longitude = get_adresse_coordonnees(adresse="16 rue Berthollet 94110 ARCUEIL")
    assert latitude == 48.803823
    assert longitude == 2.330629
    
def test_get_adresse_coordonnees_failure():
    """Vérifie le résultat pour une adresse inconnue
    """
    latitude,longitude = get_adresse_coordonnees(adresse="16 rue Berthollet 94110 ARC")
    assert latitude == None
    assert longitude == None    