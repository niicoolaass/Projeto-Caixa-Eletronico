seunome = prompt("Olá, qual o seu nome?");

		alert("Olá " + seunome + " é um prazer ter você por aqui!.");

		var saldo = 100.5; //Variavel Global

		var senha = 3589;

		function inicio() {
			//ESCOPO
			//Variavel Local
			var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair'));

			switch (escolha) {
				case 1:
					ver_saldo();
				case 2:
					extrato();
				case 3:
					fazer_saque();
				case 4:
					fazer_deposito();
				case 5:
					fazer_transferencia();
				case 6:
					sair();
				case 7:
					erro();
			}
		}

		function ver_saldo() {
			var infsenha = parseInt(prompt("Informe a senha:"));

			if (infsenha == senha){
			alert('Seu saldo atual é: ' + saldo);
			inicio();

			} else {
				alert("Senha incorreta");
				ver_saldo();
			}
		}


		function extrato() {
			var infsenha = parseInt(prompt("Informe a senha:"));

			if (infsenha == senha){
			alert("compras: \n (01/09) 1 garrafa d'água R$3,00 \n (15/09) 1 bolo de cenoura R$39,99 \n \n Depósitos: \n (17/09) R$20,00 \n \n Transferências: \n");
			inicio();

			} else {
				alert("Senha incorreta");
				ver_saldo();
			}
		}

		function fazer_saque() {
			var infsenha = parseInt(prompt("Informe a senha:"));

			if (infsenha == senha){
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			
			if(isNaN(saque) || saque === '') {
				alert('Por favor, informe um número.');
				fazer_saque();

			} else if (saque > saldo || saque <= 0) {
				alert("Operação não autorizada.");
				fazer_saque();

			} else {
				saldo -= saque;
				//saldo = saldo - saque;
				ver_saldo();
				inicio();
			}
			} else{
				alert("Senha incorreta");
				ver_saldo();
			}
		}
	
		function fazer_deposito() {

			var deposito = parseFloat(prompt('Qual o valor para depósito?'));

			// Not a Number --> Isso é um não-número?

			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número.');
				fazer_deposito();
			
			}
			if (deposito <= 0){
				alert("Operação não autorizada.");
				fazer_deposito();

			} else {
				saldo += deposito;
				//saldo = saldo + deposito;
				ver_saldo();
				inicio();
			}
		}

		
		function fazer_transferencia() {
			var infsenha = parseInt(prompt("Informe a senha:"));

			if (infsenha == senha){
			var conta = parseFloat(prompt("Informe o número da conta:"));

			if (isNaN(conta) || conta == ""){
				alert("Informe apenas números:");
				fazer_transferencia();
			}
			var valor = parseInt(prompt("Informe o valor para a transferência:"));

			if (valor > saldo || valor <= 0 || isNaN(valor)) {
				alert("Operação não autorizada.");
				fazer_transferencia();
			
			} else {
				saldo -= valor;

				ver_saldo();
				inicio();
			}
			} else {
				alert("Senha incorreta");
				fazer_transferencia();
			}
		}

		function erro() {
			if(escolha < 1 || escolha > 7){
			alert('Por favor, informe um número entre 1 e 6.');
			
			inicio();
			}
		}


		function sair() {
			var confirma = confirm('Você deseja sair?');

			if (confirma) {
				alert(seunome + ", foi um prazer ter você por aqui!");
				window.close();

			} else {
				inicio();
			}
		}
		
		inicio();