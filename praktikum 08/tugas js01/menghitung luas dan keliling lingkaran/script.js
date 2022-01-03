const phi = 3.14;
var luas;
var keliling;
var r;
var d;
function hitung() {
	r = parseFloat(document.getElementById("r").value);
	luas = phi * Math.pow(r,2);
	d = 2 * r;
	keliling = phi * d;
	document.getElementById('luas').value = luas;
	document.getElementById('keliling').value = keliling;
}