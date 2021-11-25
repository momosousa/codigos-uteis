// ORIGINAL
/* <input type="date" id="dval" value="" /> <button onclick="test()"> Testing </button> */
function test() {
var q = new Date();
var date = new Date(q.getFullYear(),q.getMonth(),q.getDate());

var mydate = new Date(document.getElementById('dval').value);

if(date > mydate) {
alert("Current Date is Greater THan the User Date"); // O dia atual é maior que o dia inserido
} else {
alert("Current Date is Less than the User Date");   // O dia atual é menor que o dia inserido
}

}


// ADAPTADA
/* <input type="date" onblur="compararData(this);"> */

function compararData(campo) {
	var q = new Date();
	var date = new Date(q.getFullYear(),q.getMonth(),q.getDate() -1 );

	var mydate = new Date(campo.value);

	if(date > mydate) {
		alert("Não é permitido datas anteriores a hoje."); 
		campo.value = undefined;
	} else {
		
	}

	}

