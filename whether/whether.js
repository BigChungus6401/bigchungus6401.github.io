// Token: mnPIIPQHTyhoLYDYyYmcCwGLRqStnPct
const divviyyituhhp = document.getElementById("divviyyituhhp");

const options = {
	headers: {
		"crossorigin": "anonymous",
		"token": "mnPIIPQHTyhoLYDYyYmcCwGLRqStnPct"
	}
};

const req = new Request(new URL("https://www.ncei.noaa.gov/cdo-web/api/v2/datasets"), options);

window.fetch(req).then((response) => {
	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	
	return response.blob();
}).then((response) => {
	divviyyituhhp.textContent = response;
});
