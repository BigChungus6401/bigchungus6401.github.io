const months = [
	["January",   31, 4],
	["February",  28, 0],
	["March",     31, 0],
	["April",     30, 3],
	["May",       31, 5],
	["June",      30, 1],
	["July",      31, 3],
	["August",    31, 6],
	["September", 30, 2],
	["October",   31, 4],
	["November",  30, 0],
	["December",  31, 2]
];

const defaultData = {
	"Holidays": {
		"Name": "Holiday",
		"Color": "305482",
		"Year": 2026,
		"Meetings": [],
		"Links": [],
		"Events": [
			"0101NNew Year's Day§All Day",
			"0119NMLK Day (No-School)§All Day",
			"0214NValentine's Day§All Day",
			"0216NPresident's Day§All Day",
			"0317NSt. Patrick's Day§All Day",
			"0405NEaster Sunday§All Day",
			"0406NEaster Monday§All Day",
			"0415NTax Day§All Day",
			"0505NCinco de Mayo§All Day",
			"0510NMother's Day§All Day",
			"0525NMemorial Day§All Day",
			"0621NFather's Day§All Day",
			"0704NIndependence Day§All Day",
			"0907NLabor Day§All Day",
			"1012NColumbus Day§All Day",
			"1031NHalloween§All Day",
			"1111NVeteran's Day§All Day",
			"1126NThanksgiving§All Day",
			"1224NChristmas Eve§All Day",
			"1225NChristmas Day§All Day",
			"1231NNew Year's Eve§All Day"
		]
	}
};

var date, current, classes, keys;

window.onload = function() {
	// Date setup
	date = new Date();
	current = date.getMonth();
	
	getJSONData();
	
	calender();
}

function next() {
	if (current < months.length - 1) {
		current++;
		clear();
		calender();
	}
}

function prev() {
	if (current > 0) {
		current--;
		clear();
		calender();
	}
}

function menu(num) {
	var overlay = document.getElementsByClassName("overlay")[0];
	
	if (num == 0) {
		overlay.style.backgroundColor = "#00000000";
		overlay.style.top = "-100vh";
	} else {
		overlay.style.backgroundColor = "#00000088";
		overlay.style.top = "0";
	}
}

function saveJSON() {
	var JSONInput = document.getElementById("jsonInput").value;
	if (JSONInput.length == 0) JSONInput = JSON.stringify(defaultData);
	
	localStorage.setItem("classes", JSONInput);
	
	getJSONData()
	clear();
	calender();
}

function clearJSON() {
	localStorage.setItem("classes", JSON.stringify(defaultData));
	
	getJSONData()
	clear();
	calender();
}

function getJSONData() {
	// Local JSON storage
	classes = JSON.parse(localStorage.getItem("classes")) || defaultData;
	
	keys = Object.keys(classes);
}

function clear() {
	document.getElementById("calendarBody").innerHTML = "";
}

function addEvents() {
	for (var k=0; k<keys.length; k++) {
		// Events Loop
		for (var e=0; e<classes[keys[k]]["Events"].length; e++) {
			// Get some event data
			const event = classes[keys[k]]["Events"][e];
			const eventMonth = Number(event.substring(0, 2)) - 1;
			
			// Most common "don't do" occurance (probably) continue;
			if (eventMonth < current - 1 || eventMonth > current + 1) continue;
			
			// More event data
			const eventDay = Number(event.substring(2, 4));
			
			// More "don't do" events
			// Previous month's events
			if (eventMonth == current - 1) {
				if (months[current][2] == 0 || current == 0) continue;
				if (eventDay < months[current - 1][1] - months[current][2] + 1) continue;
			}
			// Next month's events
			if (eventMonth == current + 1) {
				let subtotal = months[current][1] + months[current][2];
				if (subtotal % 7 == 0 || current == 11) continue;
				if (eventDay > Math.ceil(subtotal / 7) * 7 - subtotal) continue;
			}
			
			// Event formatting information
			const eventType = event.substring(4, 5); // E: exam, N: no link, #: link
			const exam = eventType === "E";
			const link = eventType !== "N";
			
			// Event display text
			const nameIndex = event.indexOf("§");
			let eventName;
			if (k <= 1 || nameIndex == -1) eventName = event.substring(5);
			else eventName = `${event.substring(5, nameIndex)}, Due: ${event.substring(nameIndex + 1)}`;
			
			// Create box for item
			let thing;
			if (link && !exam) {
				thing = document.createElement("a");
				thing.href = classes[keys[k]]["Links"][Number(eventType)];
				thing.target = "_blank";
			} else {
				thing = document.createElement("div");
				if (exam) thing.classList = "exam";
			}
			thing.id = "calEvent";
			thing.textContent = eventName;
			
			// Get calender day <td> and gray-out event if needed
			let day;
			if (eventMonth == current) {
				thing.style.backgroundColor = "#" + classes[keys[k]]["Color"];
				day = document.getElementById("day" + eventDay);
			} else {
				thing.style.backgroundColor = grayen("#" + classes[keys[k]]["Color"], 0.667);
				thing.style.color = "#DEDEDE";
				if (eventMonth == current - 1) day = document.getElementById("prev" + eventDay);
				else day = document.getElementById("next" + eventDay);
			}
			try{
			// Add box to calender day
			day.append(thing);
			}catch(e){console.log("Attempt: " + event);}
		}
	}
}

function grayen(hex, amt) {
	// Remove '#' if present and convert to integer
	hex = hex.replace(/^#/, '');
	let num = parseInt(hex, 16);
	
	// Extract R, G, B components
	let r = (num >> 16);
	let g = (num >> 8) & 0x00FF;
	let b = num & 0x0000FF;
	
	var avg = (r + g + b) / 3;
	r += (avg - r) * amt;
	g += (avg - g) * amt;
	b += (avg - b) * amt;
	
	// Combine back into a single integer
	let newNum = (r << 16) | (g << 8) | b;
	
	// Convert to hex string and pad with leading zeros if necessary
	let newHex = newNum.toString(16);
	return '#' + ('000000' + newHex).slice(-6);
}

function calender() {
	// Setup
	const t = document.getElementById("calendarBody");
	var dayNum = 1 - months[current][2];
	var next = false;
	
	// Change Title
	document.getElementById("titleMonth").textContent = months[current][0];
	
	// Week loop
	for (var w=0; w<(months[current][1] + months[current][2]) / 7; w++) {
		var week = document.createElement("tr"); // Row (week) element
		
		// Day loop
		for (var d=0; d<7; d++) {
			// Column (day) element
			const day = document.createElement("td");
			// Day numbers (for days of the previous & current month)
			if (w == 0 && d < months[current][2] && current > 0) day.textContent = months[current - 1][1] - months[current][2] + d + 1;
			else if (w == 0 && d < months[current][2] && current == 0) day.textContent = 28 + d; // January exception
			else day.textContent = dayNum;
			
			// Gray out day numbers for previous and next months
			if (w == 0 && d < months[current][2] || next) {
				day.style.color = "#8C8C8C";
				
				if (next) day.id = "next" + dayNum;
				else if (current > 0) day.id = "prev" + (d + months[current - 1][1] + 1 - months[current][2]);
			} else day.id = "day" + dayNum; // Add html id to days of current month
			
			// Current Day && Darken background for weekends
			if (dayNum == date.getDate() && current == date.getMonth() && day.id.substring(0,3) == "day") day.className = "today";
			else if (d == 0 || d == 6) day.style.backgroundColor = "#E5E5E5";
			
			// Add day to week row
			week.append(day);
			
			// Increment day number & reset for next month
			dayNum++;
			if (dayNum > months[current][1]) {
				dayNum = 1;
				next = true;
			}
		}
		
		// Add week to calender
		t.append(week);
	}
	
	addEvents();
}
