var map = L.map('map').setView([40.427627, -86.915430], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
	{
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributers',
		maxZoom: 19}).addTo(map);

L.marker([40.427412, -86.913220]).addTo(map).bindPopup("WALC<br>Whilley Meth AckTive Learndening Scenter");
