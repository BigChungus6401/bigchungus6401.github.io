var leftMenuToggle = true;
var preferencesMenuToggle = true;
var S1, I1, S2, I2, S3, I3;

window.onload = function() {
	// Menu Button
	const B = document.getElementsByClassName("menuBtn")[0];
	B.addEventListener("click", () => {B.classList.toggle("menuBtnT");});
	
	// Preferences Input/Output
		// Occupancy
	I1 = document.getElementById("occupInd");
	S1 = document.getElementById("occupSld");
	S1.addEventListener("input", () => {I1.innerText = occupancyScale[S1.value];});
	
		// Noise
	I2 = document.getElementById("noiseInd");
	S2 = document.getElementById("noiseSld");
	S2.addEventListener("input", () => {I2.innerText = noiseScale[S2.value];});
	
		// Light
	I3 = document.getElementById("lightInd");
	S3 = document.getElementById("lightSld");
	S3.addEventListener("input", () => {I3.innerText = lightScale[S3.value];});
	
	
	// MapLibre
	const map = new maplibregl.Map({
		container: "map",
		style: "https://api.maptiler.com/maps/streets-v2/style.json?key=O25HJX84zRELhSSf1dc4",
		//style: "https://api.maptiler.com/maps/basic-v2/style.json?key=O25HJX84zRELhSSf1dc4",
		//style: "https://api.maptiler.com/maps/dataviz/style.json?key=O25HJX84zRELhSSf1dc4",
		center: [-86.91406, 40.42725],
		zoom: 15.75
	});
	
	map.on("load", () => {
		
		// Custom HTML + CSS Markers
		for (var i=0; i<PLACES.length; i++) {
			let occupancy = Math.random();
			
			// Marker Element
			let m = document.createElement("div");
			m.className = "custom-marker";
			if      (occupancy < 0.51) m.style.borderColor = "#2D9B2B";
			else if (occupancy < 0.66) m.style.borderColor = "#FFD700";
			else if (occupancy < 0.81) m.style.borderColor = "#FFA500";
			else if (occupancy < 0.96) m.style.borderColor = "#D40000";
			
			// Create Popup
			let Popup = new maplibregl.Popup({offset: 15});
			Popup.setHTML(`<div style="font-size: 12.5px; line-height: 1.15;">
				<strong style="font-size: 20px; color: #CFB991;">${PLACES[i][0]}</strong>
				<hr style="border: 0; background-color: #CFB991; height: 2px;">
				<em style="font-size: 12px; margin-bottom: 20px;">${PLACES[i][4]}</em><br><br>
				<strong>Occupancy: </strong>${Math.floor(occupancy*PLACES[i][3])}/${PLACES[i][3]}<br>
				<strong>Sound-Level: </strong>${noiseScale[Math.floor(Math.random()*4)]}<br>
				<strong>Light-Level: </strong>${lightScale[Math.floor(Math.random()*4)]}
			</div>`);
			
			// Adding and decorating marker
			new maplibregl.Marker({element: m})
				.setLngLat([PLACES[i][2], PLACES[i][1]])
				.addTo(map).setPopup(Popup);
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
		document.getElementById("map").style.left = "250px";
		document.getElementById("map").style.width = "calc(100% - 250px)";
		leftMenuToggle = true;
	} else {
		document.getElementById("leftMenu").style.width = "0";
		document.getElementById("map").style.left = "0";
		document.getElementById("map").style.width = "100%";
		if (preferencesMenuToggle) togglePreferncesMenu();
		leftMenuToggle = false;
	}
}

function togglePreferncesMenu() {
	if (!preferencesMenuToggle) {
		document.getElementsByClassName("prefsBox")[0].style.height = "230px";
		document.getElementsByClassName("prefsBox")[0].style.borderColor = "#CFB991";
		document.getElementById("prefsIcon").setAttribute("d", "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z");
		preferencesMenuToggle = true;
	} else {
		document.getElementsByClassName("prefsBox")[0].style.height = "0";
		document.getElementsByClassName("prefsBox")[0].style.borderColor = "#555960";
		document.getElementById("prefsIcon").setAttribute("d", "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z");
		preferencesMenuToggle = false;
	}
}

function applyPrefs() {
	console.log("Preferences Applied");
}

function resetPrefs() {
	S1.value = 1;
	I1.innerText = occupancyScale[1];
	S2.value = 1;
	I2.innerText = noiseScale[1];
	S3.value = 2;
	I3.innerText = lightScale[2];
}
