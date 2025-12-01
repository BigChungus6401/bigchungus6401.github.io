var map = L.map('map').setView([40.427627, -86.915430], 16);

/*L.tileLayer(//'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
	'https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png',
	{
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributers',
		maxZoom: 19
	}
).addTo(map);*/

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=386a14e0-4be2-4246-824f-cc5cad94f5dd', {
	attribution: 'Map tiles by Stamen Design — Data © OpenStreetMap contributors'
}).addTo(map);

/*L.vectorGrid.protobuf("https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.pbf?key=O25HJX84zRELhSSf1dc4", {
  vectorTileLayerStyles: {
    place_label: {
      icon: false,
      textSize: 18,
      textFill: "#000"
    }
  }
}).addTo(map);*/



L.marker([40.427412, -86.913220]).addTo(map).bindPopup("WALC<br>Whilley Meth AckTive Learndening Scenter");
