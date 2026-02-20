// Token: mnPIIPQHTyhoLYDYyYmcCwGLRqStnPct
const divviyyituhhp = document.getElementById("divviyyituhhp");


window.onload = function() {
	getData('https://whether-vercel-proxy.vercel.app/api/datasets');
}

async function getData(url) {
	try {
		const response = await fetch(url);
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
