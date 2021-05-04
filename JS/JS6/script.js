function desenha() {
	var larguraBarras = document.getElementById("largura-barras");
	var barras = []; 
	for(var i = 1; i <= 5; i++) { 
		barras[i] = document.getElementById("barra"+i); 
		barras[i].style.backgroundColor = "red";
		barras[i].style.width = larguraBarras.value + "px";
		barras[i].style.height = document.getElementById("altura"+i).value + "px"; 
	}
}