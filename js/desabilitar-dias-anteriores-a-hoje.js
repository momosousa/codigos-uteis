var today = new Date().toISOString().split('T')[0];
document.getElementsByName("txtPerido1_inicio_1")[0].setAttribute('min', today);

// ----

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
