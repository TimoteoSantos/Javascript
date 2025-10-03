

//desafio preco combustivel
function calcularCombustivel(consumoPorKm, quilometros, precoLitro){
  
    var consulmoKmVeiculo = consumoPorKm;
    var quilometrosPercorridos = quilometros;
    var precoCombustivel = precoLitro;
    valorViagem = ((quilometrosPercorridos / consulmoKmVeiculo) * precoCombustivel); 
    return valorViagem;
}

//recebendo o retorno da funcao
valorViagem = calcularCombustivel(30,12, 6.29);
//imprimindo na tela
console.log("O VALOR DA VIAGEM FOI DE " + valorViagem);
