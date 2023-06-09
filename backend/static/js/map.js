var map = L.map('map')
let baseURL = "https://nominatim.openstreetmap.org";

function searchByAddress() {
	let address = document.getElementById('addressInput').value;
	if (address) {
		let apiURL = `${baseURL}/?addressdetails=1&q=${address}&format=json&limit=1`;
		let request = new XMLHttpRequest();
		request.open('GET', apiURL);
		request.send();
		request.onload = () => {
			if(request.status === 200) {
				let result = JSON.parse(request.response)
				updateMap(result[0].lat, result[0].lon);
			} else {
				showResult('Une erreur est survenue lors de la requête');
			}
		}
	}
}

function searchByCoordinate() {
	let lattitude = isInputNumber(document.getElementById('lattitude').value)
	let longitude = isInputNumber(document.getElementById('longitude').value)
	if(lattitude && longitude) {
		let apiURL = `${baseURL}/reverse?format=jsonv2&lat=${lattitude}&lon=${longitude}`;

		let request = new XMLHttpRequest();
		request.open('GET', apiURL);
		request.send();
		request.onload = () => {
			if(request.status === 200) {
				let result = JSON.parse(request.response)
				updateMap(lattitude, longitude);
			} else {
				printResult('Une erreur est survenue lors de la requête');
			}
		}
	} 
	else {
		printResult('Valeur impossible à parser');
	}

}

function printResult(res) {
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