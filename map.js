var topMenuToggle = false;

window.onload = function() {
	// Menu Button
	const B = document.getElementsByClassName("menuBtn")[0];
	B.addEventListener("click", () => {B.classList.toggle("menuBtnT");});
	
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
			
			// Adding and decorating marker
			new maplibregl.Marker({element: m}).setLngLat([PLACES[i][2], PLACES[i][1]]).addTo(map)
				.setPopup(new maplibregl.Popup({offset: 25}).setHTML(
					`<div style="font-size: 12.5px; line-height: 1.15;">
						<strong style="font-size: 20px; color: #CFB991;">${PLACES[i][0]}</strong>
						<hr style="border: 0; background-color: #CFB991; height: 2px;">
						<em style="font-size: 12px; margin-bottom: 20px;">${PLACES[i][4]}</em><br><br>
						<strong>Occupancy: </strong>${Math.floor(occupancy*PLACES[i][3])}/${PLACES[i][3]}<br>
						<strong>Sound-Level: </strong>${noiseScale[Math.floor(Math.random()*4)]}<br>
						<strong>Light-Level: </strong>${lightScale[Math.floor(Math.random()*4)]}
					</div>`
				)
			);
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

function toggleTopMenu() {
	if (!topMenuToggle) {
		document.getElementById("topMenu").style.width = "250px";
		topMenuToggle = true;
	} else {
		document.getElementById("topMenu").style.width = "0";
		topMenuToggle = false;
	}
}
