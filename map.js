var leftMenuToggle = false;
var preferencesMenuToggle = false;
var favoritesMenuToggle = false;
var studyMenuToggle = false;
var showFavs = false;
var S1, I1, S2, I2, S3, I3;
var favorites;

window.onload = function() {
	// Menu Button
	const B = document.getElementsByClassName("menuBtn")[0];
	B.addEventListener("click", () => {B.classList.toggle("menuBtnT");});
	
	// Preferences Input/Output
		// Occupancy
	I1 = document.getElementById("occupInd");
	S1 = document.getElementById("occupSld");
	S1.addEventListener("input", () => {
		I1.innerText = occupancyScale[4 - S1.value][0];
		S1.style.setProperty("--thumb-background", occupancyScale[4 - S1.value][1]);
		S1.style.setProperty("--slider-trail", "-112.5px 0 0 100px "+occupancyScale[4 - S1.value][1]+"99");
	});
	
		// Noise
	I2 = document.getElementById("noiseInd");
	S2 = document.getElementById("noiseSld");
	S2.addEventListener("input", () => {
		I2.innerText = noiseScale[S2.value][0];
		S2.style.setProperty("--thumb-background", noiseScale[S2.value][1]);
		S2.style.setProperty("--slider-trail", "-112.5px 0 0 100px "+noiseScale[S2.value][1]+"99");
	});
	
		// Light
	I3 = document.getElementById("lightInd");
	S3 = document.getElementById("lightSld");
	S3.addEventListener("input", () => {
		I3.innerText = lightScale[S3.value][0];
		S3.style.setProperty("--thumb-background", lightScale[S3.value][1]);
		S3.style.setProperty("--slider-trail", "-112.5px 0 0 100px "+lightScale[S3.value][1]+"99");
	});
	
	// Favorites Storage (localStorage)
	favorites = JSON.parse(localStorage.getItem("favorites")) || {};
	
	// MapLibre
	const map = new maplibregl.Map({
		container: "map",
		//style: "https://api.maptiler.com/maps/streets-v2/style.json?key=O25HJX84zRELhSSf1dc4",
		//style: "https://api.maptiler.com/maps/basic-v2/style.json?key=O25HJX84zRELhSSf1dc4",
		//style: "https://api.maptiler.com/maps/dataviz/style.json?key=O25HJX84zRELhSSf1dc4",
		//style: "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json?api_key=386a14e0-4be2-4246-824f-cc5cad94f5dd",
		//style: "https://tiles.stadiamaps.com/styles/osm_bright.json?api_key=386a14e0-4be2-4246-824f-cc5cad94f5dd",
		style: "https://api.maptiler.com/maps/topo-v4/style.json?key=O25HJX84zRELhSSf1dc4",
		center: [-86.91406, 40.42725],
		zoom: 15.75,
		minZoom: 13.75,
		maxZoom: 17.75,
		maxBounds: [[-86.98406, 40.39725], [-86.84406, 40.45725]]
	});
	
	map.on("load", () => {
		// Custom Markers
		for (var i=0; i<PLACES.length; i++) {
			// Occupancy "data"
			let occupancy = Math.random(), O;
			if	  (occupancy < 0.51) O = 0;
			else if (occupancy < 0.66) O = 1;
			else if (occupancy < 0.81) O = 2;
			else if (occupancy < 0.96) O = 3;
			else O = 4;
			// Other "data"
			let noise = Math.floor(Math.random()*4);
			let light = Math.floor(Math.random()*3);
			
			placeData.push([O, noise, light]);
			
			// Marker Element
			let m = document.createElement("div");
			m.className = "custom-marker";
			m.id = "_" + PLACES[i][0];
			m.style.backgroundImage = `url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2225%22%20height%3D%2225%22%20viewBox%3D%220%200%201%201%22%3E%3Ccircle%20cx%3D%220.5%22%20cy%3D%220.5%22%20r%3D%220.5%22%20fill%3D%22%233D4045%22%2F%3E%3Ccircle%20cx%3D%220.5%22%20cy%3D%220.5%22%20r%3D%220.425%22%20fill%3D%22${"%23" + occupancyScale[O][1].substring(1)}%22%2F%3E%3Ccircle%20cx%3D%220.5%22%20cy%3D%220.5%22%20r%3D%220.25%22%20fill%3D%22%233D4045%22%2F%3E%3C%2Fsvg%3E")`;
			
			let heart = document.createElement("div");
			heart.className = "heartMarker";
			heart.id = "h_" + PLACES[i][0];
			heart.style.color = favorites[PLACES[i][0]] ? "#D31C1C" : "transparent";
			heart.innerText = "♥";
			m.appendChild(heart);
			
			// Create Popup
			let Popup = new maplibregl.Popup({offset: 15});
			Popup.setHTML(`<div id="div_${PLACES[i][0]}" style="line-height: 1.15; min-width: 225px;">
				<div style="display:flex;margin:5px 0 10px 0;">
					<strong style="font-size:20px;color:#CFB991;display:flex;align-items:center;">${PLACES[i][0]}</strong>
					<div style="background-color:#CFB991;width:2px;margin:0 6.25px">&nbsp;</div>
					<em style="font-size:11.5px;display:flex;align-items:center;">${PLACES[i][4]}</em>
				</div>
				<div style="display:flex;flex-direction:row;justify-content:space-between;">
					<div class="infoBox" style="border-color:${occupancyScale[O][1]};background:${occupancyScale[O][2]};">
						<div style="font-size:10pt;margin-bottom:5px;font-weight:bold;">${Math.floor(occupancy*PLACES[i][3])}/${PLACES[i][3]}</div>
						Occupancy
					</div>
					<div class="infoBox" style="border-color:${noiseScale[noise][1]};background:${noiseScale[noise][2]};">
						<div style="font-size:10pt;margin-bottom:5px;font-weight:bold;">${noiseScale[noise][0]}</div>
						Sound&nbsp;Level
					</div>
					<div class="infoBox" style="border-color:${lightScale[light][1]};background:${lightScale[light][2]};">
						<div style="font-size:10pt;margin-bottom:5px;font-weight:bold;">${lightScale[light][0]}</div>
						Light&nbsp;Level
					</div>
				</div>
			</div>`);
			
			const b = document.createElement("button");
			b.className = favorites[PLACES[i][0]] ? "favorite favedButt" : "favorite";
			b.onclick = function(place = PLACES[i][0]) {toggleFave(place.target.parentElement.id.substring(4));};
			b.innerText = favorites[PLACES[i][0]] ? "Unfavorite" : "Favorite";
			
			b.addEventListener("click", () => {
				b.innerText = b.classList.contains("favedButt") ? "Favorite" : "Unfavorite";
				
				b.classList.toggle("favedButt");
			});
			
			Popup._content.children[0].appendChild(b);
			
			// Adding and decorating marker
			new maplibregl.Marker({element: m}).setLngLat([PLACES[i][2], PLACES[i][1]]).addTo(map).setPopup(Popup);
		}
		
		// Geolocation
		if ("geolocation" in navigator) {
			const geoLoc = new maplibregl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true
				},
				trackUserLocation: false,
				showAccuracyCircle: true
			});
			
			map.addControl(geoLoc);
		} else alert("Geolocation Unavailable");
	});
}

function toggleLeftMenu() {
	if (!leftMenuToggle) {
		document.getElementById("leftMenu").style.width = "250px";
		if (window.innerWidth > 650) {
			document.getElementById("map").style.left = "250px";
			document.getElementById("map").style.width = "calc(100% - 250px)";
		}
		leftMenuToggle = true;
	} else {
		document.getElementById("leftMenu").style.width = "0";
		if (window.innerWidth > 650) {
			document.getElementById("map").style.left = "0";
			document.getElementById("map").style.width = "100%";
		}
		if (preferencesMenuToggle) togglePreferncesMenu();
		if (favoritesMenuToggle) toggleFavoritesMenu();
		if (studyMenuToggle) toggleStudyMenu();
		leftMenuToggle = false;
	}
}

function togglePreferncesMenu() {
	if (!preferencesMenuToggle) {
		document.getElementById("prefsBox").style.height = "230px";
		document.getElementById("prefsBox").style.borderColor = "#CFB991";
		document.getElementById("prefsIcon").setAttribute("d", "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z");
		preferencesMenuToggle = true;
		if (favoritesMenuToggle) toggleFavoritesMenu();
		if (studyMenuToggle) toggleStudyMenu();
	} else {
		document.getElementById("prefsBox").style.height = "0";
		document.getElementById("prefsBox").style.borderColor = "#555960";
		document.getElementById("prefsIcon").setAttribute("d", "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z");
		preferencesMenuToggle = false;
	}
}

function toggleFavoritesMenu() {
	if (!favoritesMenuToggle) {
		document.getElementById("favesBox").style.height = "50px";
		document.getElementById("favesBox").style.borderColor = "#CFB991";
		document.getElementById("favesIcon").setAttribute("d", "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z");
		favoritesMenuToggle = true;
		if (preferencesMenuToggle) togglePreferncesMenu();
		if (studyMenuToggle) toggleStudyMenu();
	} else {
		document.getElementById("favesBox").style.height = "0";
		document.getElementById("favesBox").style.borderColor = "#555960";
		document.getElementById("favesIcon").setAttribute("d", "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z");
		favoritesMenuToggle = false;
	}
}

function toggleStudyMenu() {
	if (!studyMenuToggle) {
		document.getElementById("studyBox").style.height = "637px";
		document.getElementById("studyBox").style.borderColor = "#CFB991";
		document.getElementById("studyIcon").setAttribute("d", "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z");
		studyMenuToggle = true;
		if (favoritesMenuToggle) toggleFavoritesMenu();
		if (preferencesMenuToggle) togglePreferncesMenu();
	} else {
		document.getElementById("studyBox").style.height = "0";
		document.getElementById("studyBox").style.borderColor = "#555960";
		document.getElementById("studyIcon").setAttribute("d", "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z");
		studyMenuToggle = false;
	}
}

function applyPrefs() {
	for (var i=0; i<PLACES.length; i++) {
		document.getElementById("_" + PLACES[i][0]).classList.remove("BAD");
	}
	
	let occupPref = 4 - S1.value; // Occupancy:  < selected
	let noisePref = S2.value; // Loudness:   < selected
	let lightPref = S3.value; // Brightness: = selection
	
	for (var i=0; i<PLACES.length; i++) {
		if (placeData[i][0] > occupPref || placeData[i][1] > noisePref || placeData[i][2] != lightPref) {
			document.getElementById("_" + PLACES[i][0]).classList.add("BAD");
		}
	}
	
	showFavs = false;
}

function resetPrefs() {
	// Occupancy
	S1.value = 3;
	I1.innerText = occupancyScale[1][0];
	S1.style.setProperty("--thumb-background", occupancyScale[1][1]);
	S1.style.setProperty("--slider-trail", "-112.5px 0 0 100px "+occupancyScale[1][1]+"99");
	// Noise
	S2.value = 1;
	I2.innerText = noiseScale[1][0];
	S2.style.setProperty("--thumb-background", noiseScale[1][1]);
	S2.style.setProperty("--slider-trail", "-112.5px 0 0 100px "+noiseScale[1][1]+"99");
	// Light
	S3.value = 1;
	I3.innerText = lightScale[1][0];
	S3.style.setProperty("--thumb-background", lightScale[1][1]);
	S3.style.setProperty("--slider-trail", "-112.5px 0 0 100px "+lightScale[1][1]+"99");
	
	for (var i=0; i<PLACES.length; i++) {
		document.getElementById("_" + PLACES[i][0]).classList.remove("BAD");
	}
	
	showFavs = false;
}

function showFavorites() {
	if (!showFavs) {
		for (var i=0; i<PLACES.length; i++) {
			document.getElementById("_" + PLACES[i][0]).classList.remove("BAD");
		}
		var favKeys = Object.keys(favorites);
		if (favKeys.length > 0) {
			for (var i=0; i<PLACES.length; i++) {
				let m = document.getElementById("_" + PLACES[i][0]);
				
				let add = true;
				for (var j=0; j<favKeys.length; j++) {
					if (!favorites[favKeys[j]]) continue;
					if (m.id.substring(1) === favKeys[j]) add = false;
				}
				if (add) m.classList.add("BAD");
			}
		}
		showFavs = true;
	} else {
		for (var i=0; i<PLACES.length; i++) {
			document.getElementById("_" + PLACES[i][0]).classList.remove("BAD");
		}
		showFavs = false;
	}
}

function toggleFave(place) {
	favorites = JSON.parse(localStorage.getItem("favorites")) || {};
	
	if (favorites[place]) {
		document.getElementById("h_"+place).style.color = "transparent";
		favorites[place] = false;
	} else {
		document.getElementById("h_"+place).style.color = "#D31C1C";
		favorites[place] = true;
	}
	
	localStorage.setItem("favorites", JSON.stringify(favorites));
}
