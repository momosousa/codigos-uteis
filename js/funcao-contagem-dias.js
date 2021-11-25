/* 
<label for="dtDataInicio">Data de Início:</label>
<input type="date" id="dtDataInicio" onchange="contagemDias();">

<label for="dtDataFim">Data Final:</label>
<input type="date" id="dtDataFim" onchange="contagemDias();">

<label for="txtQuantDias">Quantidade de dias:</label>
<input type="text" id="txtQuantDias" readonly> */

function GetDays(){
    var dataInicio = new Date(document.getElementById("dtDataInicio").value);
    var dataFim = new Date(document.getElementById("dtDataFim").value);
    return parseInt((dataFim - dataInicio) / (24 * 3600 * 1000));
}

function contagemDias(){
if(document.getElementById("txtDataFim")){
    document.getElementById("txtQuantDias").value=GetDays();
}

}
