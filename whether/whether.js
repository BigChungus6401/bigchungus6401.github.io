// Token: mnPIIPQHTyhoLYDYyYmcCwGLRqStnPct
const divviyyituhhp = document.getElementById("divviyyituhhp");

const options = {
	headers: {
		crossorigin: "anonymous",
		token: "mnPIIPQHTyhoLYDYyYmcCwGLRqStnPct"
	}
};

window.onload = function() {
	getData('https://www.ncei.noaa.gov/cdo-web/api/v2/datasets', options);
}

async function getData(url, options) {
	try {
		const response = await fetch(url, options);
		if (response.ok) {
			const data = await response.json();
			divviyyituhhp.textContent = data;
		} else {
			throw new Error("Failed to fetch data");
		}
	} catch (error) {
		console.error("Error: ", error);
	}
}
