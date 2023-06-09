var map = L.map('map')


function search(lat, lon) {
	let lattitude = isInputNumber(document.getElementById('lattitude').value)
	let longitude = isInputNumber(document.getElementById('longitude').value)
	if(lattitude && longitude) {
		let apiURL = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lattitude}&lon=${longitude}`;

		let request = new XMLHttpRequest();
		request.open('GET', apiURL);
		request.send();
		request.onload = () => {
			if(request.status === 200) {
				let result = JSON.parse(request.response)
				showResult(result);
				updateMap(lattitude, longitude);
			} else {
				showResult('Une erreur est survenue lors de la requête');
			}
		}
	} 
	else {
		showResult('Valeur impossible à parser');
	}

}

function showResult(res) {
	document.getElementById('resultat').textContent = JSON.stringify(res);
}

function isInputNumber(inputToParse) {
	const value = parseFloat(inputToParse);
	if(value != NaN) { 
		return value; 
	} return false;
}

function updateMap(lattitude, longitude) {
	// updating map
		map.remove();
		map = L.map('map').setView([lattitude, longitude], 13);
		var marker = L.marker([lattitude, longitude]).addTo(map);
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

}