for (var i = 1; i <11; i++) {
	document.write('<table border="2"><thead><td colspan="2"><b>Produtos de '+i+'</b></td></thead><tbody>');
	for (var j = 1; j <11; j++) {
		document.write('<tr><td>'+i+'x'+j+'</td><td>'+(i*j)+'</td></tr>');
	}
	document.write('</tbody></table>');
}