import hug
from geopy.geocoders import Nominatim
adresse = "16 rue berthollet 94110 Arcueil"

geolocator = Nominatim(user_agent="PolaStreet")

def get_location_vers_coordonnees(adresse):
    '''retourne les coordonnées GPO d'une adresse
    '''
    location = geolocator.geocode(adresse)
    if location is not None:
        latitude = location.latitude
        longitude = location.longitude
        return {'latitude': latitude, 'longitude': longitude}
    else:
        return {'erreur': 'adresse non trouvé'}


coordonnees = get_location_vers_coordonnees(adresse)

