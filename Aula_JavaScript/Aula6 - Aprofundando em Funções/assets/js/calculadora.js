function calculadora(){
    const operacao = prompt("Escola A operação:\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n" +
                            " 4 - Divisão Real (/)\n 5 - Divisao Inteira (%)\n 6 - Potenciação (**) ");

    if(!operacao || operacao >= 7){
        alert(`Operacação ${operacao} Invalida, Escolha a opção correta`);
        calculadora();
    }else{

        let n1 = Number(prompt("Insira o Primeiro Valor:"));
        let n2 = Number(prompt("Insira o Segundo Valor:"));
        let resultado;

        if(!n1 || !n2){
            alert(`Numeros Invalidos ${n1} ${n2}, Digite corretamente`);
            calculadora();
        }else{

            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
            }

            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
            }

            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
            }

            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
            }    

            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O Resto da divisão Entre ${n1} e ${n2} é igual a ${resultado}`);
            }    

            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} Elevado a ${n2}ª é igual a ${resultado}`);
            }    

            if(operacao == 1){
                soma();
            } else if(operacao == 2){
                subtracao();
            } else if(operacao == 3){
                multiplicacao();
            } else if(operacao == 4){
                divisaoReal();
            } else if(operacao == 5){
                divisaoInteira();
            } else if(operacao == 6){
                potenciacao();
            }

            function novaOPeracao(){
                let opcao = prompt('Deseja Fazer outra OPeração?\n 1 - SIM \n 2 - NÃO')
                if(opcao == 1){
                    calculadora();
                }else if(opcao == 2){
                    alert('Fechando!!!');
                }else{
                    alert('Digite uma Opção Valida!');
                    novaOPeracao();
                }
            }
            novaOPeracao();
        }
    }
}        
calculadora();