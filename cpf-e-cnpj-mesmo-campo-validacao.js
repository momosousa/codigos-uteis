/**
 * Criado por Bethoven on 02/04/2015.
 * Modificado por Mônica em 2021
 */

// VALIDAÇÃO CPF E CNPJ NO MESMO CAMPO ===========================================
// onblur="validaFormato(this);"
 
  function validaFormato(element) {
    var strDocument = (element.value).replace(/\D/g,'');
    var sizeStrDocument = (strDocument).length;
    var RegExp = /(^[\d]{3}[\d]{3}[\d]{3}[\d]{2}$)|(^[\d]{2}[\d]{3}[\d]{3}[\d]{4}[\d]{2}$)/;

    if (RegExp.test(strDocument) == true) {
        if (sizeStrDocument == 11 ){
            if (!validaCPF(strDocument)){
                alert("CPF Inválido! Digite novamente.");
                element.value = "";
                return false;
            }
            else
            {
                return true;
            }
        }
        if (sizeStrDocument == 14){
            if(!validaCNPJ(strDocument)){
                alert("CNPJ Inválido! Digite novamente.");
                element.value = "";
                return false;
            }
            else {
                return true;
            }
        }
    } 
}

// Função que valida o CPF
function validaCPF(strDocument) {
    var soma;
    var resto;
    soma = 0;

    // Elimina CPF's invalidos conhecidos
    if (strDocument == "00000000000" ||
        strDocument == "11111111111" ||
        strDocument == "22222222222" ||
        strDocument == "33333333333" ||
        strDocument == "44444444444" ||
        strDocument == "55555555555" ||
        strDocument == "66666666666" ||
        strDocument == "77777777777" ||
        strDocument == "88888888888" ||
        strDocument == "99999999999")
    return false;

    for (i = 1; i <= 9; i++) soma = soma + parseInt(strDocument.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(strDocument.substring(9, 10))) return false;

    soma = 0;
    for (i = 1; i <= 10; i++) soma = soma + parseInt(strDocument.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(strDocument.substring(10, 11))) return false;
    return true;
}

// Função que valida o CNPJ
function validaCNPJ(CNPJ) {
    var validaArray = [6,5,4,3,2,9,8,7,6,5,4,3,2];
    var primeiroDigito = new Number;
    var segundoDigito = new Number;
    var digito = Number(eval(CNPJ.charAt(12)+CNPJ.charAt(13)));

    for(i = 0; i<validaArray.length; i++){
        primeiroDigito += (i>0? (CNPJ.charAt(i-1)*validaArray[i]):0);
        segundoDigito += CNPJ.charAt(i)*validaArray[i];
    }
    primeiroDigito = (((primeiroDigito%11)<2)? 0:(11-(primeiroDigito%11)));
    segundoDigito = (((segundoDigito%11)<2)? 0:(11-(segundoDigito%11)));

    resultado = (((primeiroDigito*10)+segundoDigito)) == digito ? true : false;
    return resultado;
}
