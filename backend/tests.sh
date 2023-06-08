#! /bin/bash

# [ "$(curl http://127.0.0.1:8000 | grep 'Map')" ] &&  echo "Test OK"
[ ! "$(curl http://127.0.0.1:8000 | grep 'leaflet-pane leaflet-map-pane')" ] &&  echo "Test FAIL" && exit 42

open http://127.0.0.1:8000
