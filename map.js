const styleJSON = {
	"version": 8,
	"sources": {
		"openmaptiles": {
			"type": "vector",
			//"url": "https://api.maptiler.com/tiles/v3/tiles.json?key=O25HJX84zRELhSSf1dc4"
			"url": "https://api.maptiler.com/maps/streets-v2/style.json?key=O25HJX84zRELhSSf1dc4"
		}
	},
	"glyphs": "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=O25HJX84zRELhSSf1dc4",
	"layers": [
		{
			"id": "background",
			"type": "background",
			"paint": { "background-color": "#e4e4e4" }
		},
		{
			"id": "place-labels",
			"type": "symbol",
			"source": "openmaptiles",
			"source-layer": "place",
			"layout": {
				"text-field": "{name}",
				"text-font": ["Open Sans Regular"],
				"text-size": 18,
				"text-anchor": "center"
			},
				"paint": {
				"text-color": "#111",
				"text-halo-color": "white",
				"text-halo-width": 2
			}
		},
		{
			"id": "roads",
			"type": "line",
			"source": "openmaptiles",
			"source-layer": "transportation",
			"paint": {
				"line-color": "#666",
				"line-width": 1.5
			}
		}
	]
};

// MapLibre
const map = new maplibregl.Map({
	container: "map",
	style: "https://api.maptiler.com/maps/streets-v2/style.json?key=O25HJX84zRELhSSf1dc4",
	center: [-86.915430, 40.427627],
	zoom: 16
});

// Default Marker
new maplibregl.Marker().setLngLat([-86.913220, 40.427412]).addTo(map);

// Custom HTML + CSS Marker
const el = document.createElement("div");
el.className = "custom-marker";

new maplibregl.Marker({element: el}).setLngLat([-86.914945, 40.427900]).addTo(map);

// Custom Image Marker
const eL = document.createElement("div");
eL.className = "image-marker";

new maplibregl.Marker({element: eL}).setLngLat([-86.911654, 40.427608]).addTo(map);






/*var map = L.map('map').setView([40.427627, -86.915430], 16);

/*L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
	{
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributers',
		maxZoom: 19
	}
).addTo(map);*/


/*L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png?api_key=386a14e0-4be2-4246-824f-cc5cad94f5dd', {
	attribution: 'Map tiles by Stamen Design — Data © OpenStreetMap contributors'
}).addTo(map);


L.marker([40.427412, -86.913220]).addTo(map).bindPopup("WALC<br>Whilley Meth AckTive Learndening Scenter");*/
