const months = [
	["January",   31, 3],
	["February",  28, 6],
	["March",     31, 6],
	["April",     30, 2],
	["May",       31, 4],
	["June",      30, 0],
	["July",      31, 2],
	["August",    31, 5],
	["September", 30, 1],
	["October",   31, 3],
	["November",  30, 6],
	["December",  31, 1]
];

//const Colors = ["#080e20","#070d20","#070d1f","#070d1f","#070c1f","#070c1f","#060b1f","#060a1e","#06091e","#05091e","#05081e","#04071d","#04061d","#04061d","#03051d","#03051d","#03041c","#03041c","#03041d","#03051d","#04051d","#04061d","#05071e","#06091e","#070b1f","#080d20","#091021","#0b1329","#0d1735","#0f1b47","#11205c","#142473","#16298b","#182da3","#1b31ba","#1c35cf","#1e37df","#1f39ec","#1f3af2","#203bf3","#203bf3","#203cf3","#213df3","#223ff4","#2341f4","#2443f4","#2546f5","#2748f6","#284bf6","#2a4ef7","#2b51f8","#2d54f8","#2e57f9","#305afa","#315dfa","#3360fb","#3462fc","#3665fc","#3767fd","#3869fd","#396bfe","#396dfe","#3a6efe","#3a6efe","#3b6fff","#3a6efe","#3a6efe","#396dfe","#396bfe","#3869fd","#3767fd","#3665fc","#3462fc","#3360fb","#315dfa","#305afa","#2e57f9","#2d54f8","#2b51f8","#2a4ef7","#284bf6","#2748f6","#2546f5","#2443f4","#2341f4","#223ff4","#213df3","#203cf3","#203bf3","#203bf3","#1f3af2","#1f3aef","#1f39e9","#1e37e1","#1c35d6","#1b32ca","#1a2fbc","#182cad","#16299d","#14258d","#13227c","#111e6c","#0f1b5d","#0e184e","#0c1541","#0b1336","#0a112d","#091026","#090f22","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20","#080e20"];

const Colors = ["#000764","#010c69","#03116e","#041774","#061d7b","#082381","#092a88","#0b308f","#0d3795","#0f3d9c","#1044a2","#124aa9","#144fae","#1555b4","#175ab9","#185ebe","#1a62c2","#1b65c5","#1c68c8","#1e69c9","#1f6aca","#206bcb","#226bcb","#256dcb","#296fcc","#2e72cd","#3375ce","#3979d0","#3f7ed1","#4683d3","#4e88d5","#568ed7","#5e93d9","#669adb","#6fa0dd","#78a6e0","#81ade2","#8ab4e4","#93bae7","#9bc1e9","#a4c8eb","#adceed","#b5d4f0","#bddaf2","#c4e0f4","#cbe5f6","#d2eaf7","#d8eff9","#ddf3fa","#e2f6fc","#e6f9fd","#e9fcfd","#ebfdfe","#ecfefe","#edfefe","#edfefd","#edfdfa","#edfbf5","#eef9ef","#eef7e8","#eff4df","#eff1d5","#f0edcb","#f1e9bf","#f2e5b3","#f3e1a7","#f4dd9a","#f5d88c","#f6d47f","#f6d072","#f7cb64","#f8c757","#f9c34b","#fabf3f","#fbbb33","#fcb729","#fcb41f","#fdb116","#fdaf0f","#fead09","#feab04","#feaa01","#feaa00","#fea900","#fca800","#f7a500","#f2a100","#ea9c00","#e29700","#d89000","#cd8900","#c18100","#b57900","#a87100","#9b6800","#8d5f00","#7f5500","#714c00","#634300","#563a00","#493200","#3d2a00","#312200","#261b00","#1c1400","#140f00","#0c0a00","#070600","#020300","#000200","#000200","#000201","#000204","#000208","#00020d","#000314","#00031b","#000322","#00042a","#000432","#00043b","#000543","#00054a","#000651","#000657","#00065c","#000660","#000663"];

const things = [
	[ // January
		[ 1, "#AC49C3", "New Year's Day"],
		[20, "#AC49C3", "MLK Day"],
	], [ // February
		[14, "#AC49C3", "Valentine's Day"],
		[17, "#AC49C3", "President's Day"],
	], [ // March
		[17, "#AC49C3", "St. Patrick's Day"],
	], [ // April
	], [ // May
		[ 5, "#AC49C3", "Cinco de Mayo"],
		[11, "#AC49C3", "Mother's Day"],
		[26, "#AC49C3", "Memorial Day"],
	], [ // June
		[15, "#AC49C3", "Father's Day"],
	], [ // July
		[ 4, "#AC49C3", "Independence Day"],
	], [ // August
		[26, "#CD0000", "Quiz #0"],
	], [ // September
		[ 1, "#AC49C3", "Labor Day (No-School)"],
	], [ // October
		[13, "#AC49C3", "Columbus Day (No School)"],
		[14, "#AC49C3", "(No School)"],
		[31, "#AC49C3", "Halloween"],
	], [ // November
		[26, "#AC49C3", "(No School)"],
		[27, "#AC49C3", "Thanksgiving (No-School)"],
		[28, "#AC49C3", "(No School)"],
		[29, "#AC49C3", "(No School)"],
	], [ // December
		[13, "#AC49C3", "Classes End"],
		[20, "#AC49C3", "Term Ends"],
		[21, "#AC49C3", "Commencements"],
		[24, "#AC49C3", "Christmas Eve"],
		[25, "#AC49C3", "Christmas Day"],
		[31, "#AC49C3", "New Year's Eve"],
	]
];

var current;
var date;

window.onload = function() {
	date = new Date();
	current = date.getMonth();
	
	const time = Math.floor((date.getHours() * 60 + date.getMinutes()) / 1440 * Colors.length);
	document.getElementById("BOdy").style.backgroundColor = Colors[time];
	
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

function clear() {
	document.getElementById("TABLE").innerHTML = "";
}

function addEvents(month, ID, darken) {
	for (var i=0; i<things[month].length; i++) {
		// Get calender day td
		const day = document.getElementById(ID + things[month][i][0]);
		
		if (day !== null) {
			// Create box for item
			var thing = document.createElement("div");
			thing.id = "ITEM";
			if (!darken) thing.style.backgroundColor = things[month][i][1];
			else {
				thing.style.backgroundColor = grayen(things[month][i][1], 0.667);
				thing.style.color = "#DEDEDE";
			}
			
			// Create abbreviation for text. (in case text is too long)
			var abbr = document.createElement("abbr");
			abbr.title = things[month][i][2];
			abbr.textContent = things[month][i][2];
			
			// Add abbreviation to box
			thing.append(abbr);
			
			// Add box to calender day
			day.append(thing);
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
	const t = document.getElementById("TABLE");
	var dayNum = 1 - months[current][2];
	var next = false;
	
	// Change Title
	document.getElementById("MONTH").textContent = months[current][0];
	
	// Week loop
	for (var w=0; w<(months[current][1] + months[current][2]) / 7; w++) {
		var week = document.createElement("tr"); // Row (week) element
		
		// Day loop
		for (var d=0; d<7; d++) {
			// Column (day) element
			const day = document.createElement("td");
			// Day numbers (for days of the previous & current month)
			if (w == 0 && d < months[current][2] && current > 0) day.textContent = months[current - 1][1] - months[current][2] + d + 1;
			else if (w == 0 && d < months[current][2] && current == 0) day.textContent = 29 + d; // January exception
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
	
	// Loop to add calender items
	addEvents(current, "day", false);
	
	// Previous Month
	if (months[current][2] != 0 && current != 0) addEvents(current - 1, "prev", true);
	
	// Next Month
	if ((months[current][1] + months[current][2]) % 7 > 0 && current != 11) addEvents(current + 1, "next", true);
}