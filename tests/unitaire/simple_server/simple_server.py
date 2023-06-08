
"""Create a simple HTTP server"""
import hug
from geopy.geocoders import Nominatim

geolocator = Nominatim(user_agent="PolaStreet")

api = hug.API(__name__)

@hug.get('/adresse/coordonnees', examples="adresse=16%20rue%20berthollet%2094110%20ARCUEIL")
@hug.local()
def get_location_vers_coordonnees(adresse: hug.types.text):
    '''Retourne les coordonnées GPS d'une adresse
    :param string adresse: L'adresse à géocoder.
    :return: les coordonnées GPS'''
    location = geolocator.geocode(adresse)
    if location is not None:
        latitude = location.latitude
        longitude = location.longitude
        return {'latitude': latitude, 'longitude': longitude}
    else:
        return {'erreur': 'adresse non trouvée'}

if __name__ == '__main__':
    api = hug.API(__name__)
    api.http.serve(port=8080)
