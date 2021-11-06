    //Somente Letra e Números sem espaço.
    //Sem caracteres especiais, sem acentuação
    function apenasLetraENumero() {
        var tecla = (window.event) ? event.keyCode : e.which;
        if ((tecla > 63 && tecla < 91 || tecla == 46)) return true;
        else {
            if (tecla > 96 && tecla < 123 || tecla == 95) return true;
            else {
                if (tecla > 47 && tecla < 58) return true;
                else
                    return false;
            }
        }
    }
