	function addDiasUteis(){
		let data = document.getElementById('txtData').value;
		data = data.split('/').reverse().join().replaceAll(',','-'); // Conversão para data no formato americano, necessário para utilizar moment.js
		let dias = Number(document.getElementById('valorConta').value) + 1; // Aqui define o valor que vai para a conta (+ 5 dias úteis, +10 dias úteis). É necessário o +1 para a conta dar certo.
		let d = moment(new Date(data)).add(Math.floor(dias / 5) * 7, 'd');
		let restando = dias % 5;

		while (restando) {
				d.add(1, 'd');
				if (d.day() !== 0 && d.day() !== 6)
				restando--;
		}

		document.getElementById('txtData2').value = d.format('DD/MM/YYYY');
		return d
  }


// REMOÇÃO

function removeDiasUteis(){ // Não conta sábados e domingos. Não retira feriados que caem em dias úteis.
      let data = document.getElementById('txt_dtProtocoloSAS').value;
      data = data.split('/').reverse().join().replaceAll(',','-');
      let dias = Math.max.apply(null, arrayPrazosLiq) - 1; // Aqui define o número para a remoção de dias. Necessário o -1 para a conta ser exata.

      // console.log(arrayPrazosLiq);
      //  console.log(`posição do elemento com o mais maior valor ${indexOfMaxValue}`);

      let d = moment(new Date(data)).subtract(Math.floor(dias / 5) * 7, 'd');
      let remaining = dias % 5;
      
      while (restando) { // O valor passado para days não pode ser 0, senão esse while entrará em loop infinito.
          d.subtract(1, 'd');
          if (d.day() !== 0 && d.day() !== 6)
            restando--;
      }

      document.getElementById('txtDtLimitePag').value = d.format('DD/MM/YYYY');
      return d;
  }
