//VALIDAÇÃO DE DATA QUANDO COLOCADA NUM INPUT TEXT
// !! Adicione função somente números e máscara para data (00/00/0000) !!
// onblur="ValidaData(this, event);"

    function ValidaData(campo) {
        var erro = true;
        if (campo.value != '') {
            var strData = campo.value;

            var dia = strData.substr(0, 2);
            var mes = strData.substr(3, 2);
            var ano = strData.substr(6, 4);
            var datainteira = new String();
            datainteira = "";

            if (dia > 31) {
                alert("Dia inválido!");
                campo.value = "";
                return false;
            }
            datainteira = dia + '/';

            if (mes > 12) {
                alert("Mês inválido!");
                campo.value = "";
                return false;
            }

            datainteira = datainteira + mes + '/';
            if (ano < 1900 || ano > 2200) {
                alert("Ano inválido!");
                campo.value = "";
                return false;
            }
            datainteira = datainteira + ano;
            if (mes == 02 && ano % 4 == 0) {
                if (dia > 29) {
                    alert("O mês de fevereiro em um ano bissexto só possui 29 dias!");
                    campo.value = "";
                    return false;
                }
            }
            if (mes == 02 && ano % 4 != 0) {
                if (dia > 28) {
                    alert("O mês de fevereiro só possui 28 dias!");
                    campo.value = ""
                    return false;
                }
            }
            if (mes != 01 || mes != 03 || mes != 05 || mes != 07 || mes != 08 || mes != 10 || mes != 12) {
                if (dia > 31) {
                    alert("O mês informado não possui 31 dias!")
                    campo.value = ""
                    return false;
                }
            }
            campo.value = datainteira;
        }
    }
