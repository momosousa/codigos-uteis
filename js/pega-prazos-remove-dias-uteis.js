	function buscaFundos(elem){ // Ajax
		let row = elem.parentNode;
		if(elem.value != 0){
			$.ajax({
				method:"post",
				url: "ajaxFundos.cfm",
				data: {
					nomeFundo: elem.value
				},
				cache:false,
				success: function(response){
					let retorno = JSON.parse(JSON.stringify(response));			

					retorno = retorno.replaceAll(`<meta http-equiv = "Express" content = "-1">`, '');
					retorno = retorno.replaceAll(`<META HTTP-EQUIV="Expires" CONTENT="Mon, 06 Jan 1990 00:00:01 GMT">`, '');
					retorno = retorno.replaceAll(`<link rel="shortcut icon" href="New_Images/favicon.ico" />`, '');
					retorno = retorno.replaceAll(`<title>CNX - Portal</title>`, '');
					retorno = retorno.trim();
					retorno = retorno.replaceAll(`\t`, '');
	
					retorno = JSON.parse(retorno);

					let tipoFundo = elem.nextElementSibling.nextElementSibling;
					let codFundo = elem.nextElementSibling.nextElementSibling.nextElementSibling;
					let prazoLiq = elem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

					codFundo.value = retorno.cod_fundo;
					tipoFundo.value = retorno.tipo_fundo;
					prazoLiq.value = retorno.prazo_liq;

					// pegaPrazos();
					removeDiasUteis(); // Após chamar o ajax, em seguida chama removeDiasUteis
				}
			});
		}
	}			
	var arrayPrazosLiq = [0];	
	
	function pegaPrazos(){ // A função coloca todos os prazos líquidos na arrayPrazoLiq. E atualiza os valores, caso ocorra nova seleção de fundo.
		let totalFundos = document.getElementById("hdnFundos").value;
		for(i=1;i<=totalFundos;i++){
			arrayPrazosLiq[i] = (Number(document.getElementById(`txtPrazoLiq${i}`).value));
		}
		 
	}

	function removeDiasUteis(){ // Não conta sábados e domingos. Não retira feriados que caem em dias úteis.
	  pegaPrazos();
      var date = document.getElementById('txt_dtProtocoloSAS').value;
      date = date.split('/').reverse().join().replaceAll(',','-');
      var days = Math.max.apply(null, arrayPrazosLiq) - 1; // Aqui define o número para a remoção de dias. Necessário o -1 para a conta ser exata.

      // console.log(arrayPrazosLiq);
      //  console.log(`posição do elemento com o mais maior valor ${indexOfMaxValue}`);

      var d = moment(new Date(date)).subtract(Math.floor(days / 5) * 7, 'd');
      var remaining = days % 5;
      
      while (remaining) { // O valor passado para days não pode ser 0, senão esse while entrará em loop infinito.
          d.subtract(1, 'd');
          if (d.day() !== 0 && d.day() !== 6)
            remaining--;
      }

      document.getElementById('txtDtLimitePag').value = d.format('DD/MM/YYYY');
      return d;
  	}
