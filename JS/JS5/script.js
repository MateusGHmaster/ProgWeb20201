

function enviar(){
	let raio = document.getElementById("raio").value

	r = Number(raio)
	area = Math.PI * (r**2)
	circu = 2 * Math.PI * r

	document.getElementById("area").value = Math.round(area*100)/100
	document.getElementById("circ").value = Math.round(circu*100)/100
}