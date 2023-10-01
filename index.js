import entradaDados from 'readline-sync';


var jurosAte15 = 5;
var jurosPos15 = 10;
var valorTotal = "";

function CalcValorTotal(divida, juros) {
    return (Number(divida) + juros);
};

function valorJuros(divida, juros) {
    return (divida / 100) * juros;
};

console.log("Aplicação de Juros: ");
let valorDivida = entradaDados.question("Informe o valor devido: ");

if (valorDivida > 0) {//Se o valor for maior que "0", então a aplicação exigirá a quantidade de dias em atraso ao usuário.
    let diasAtrasados = entradaDados.question("Informe quantos dias se passaram desde o vencimento do boleto: ");

    if (diasAtrasados > 0) {//Se caso os dias em atraso for maior que "0", então o app verificará a quantidade de dias e sua proporção de juros.

        if (diasAtrasados > 15) {//Se caso os dias em atraso for maior que 15 dias, o app calculará jurosPos15 de juros.
            valorTotal = CalcValorTotal(valorDivida, valorJuros(valorDivida, jurosPos15));

            console.log("Valor original da dívida: R$" + valorDivida);
            console.log("Dias atrasados: " + diasAtrasados + " Dias");
            console.log("Taxa de Juros: " + jurosPos15 + "%");
            console.log("Valor total com juros: " + valorTotal);
        }
        else {//Se caso os dias em atraso for menor que 15 dias, o app calculará a porcentagem devida de jurosAte15 de juros.
            valorTotal = CalcValorTotal(valorDivida, valorJuros(valorDivida, jurosAte15));

            console.log("Valor original da dívida: R$" + valorDivida);
            console.log("Dias atrasados: " + diasAtrasados + " Dias");
            console.log("Taxa de Juros: " + jurosAte15 + "%");
            console.log("Valor total com juros: " + valorTotal);
        }

    }
    else
    {//Se caso não existir dias em atraso a aplicação se encerrará com ésta mensagem!
        console.log("você está em dias! Valor a ser pago: " + valorDivida);
    }

} else {
    console.log("Valor a ser informado deve ser maior que Zero!");
}