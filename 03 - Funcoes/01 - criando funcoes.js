//criando uma funcao
function calcularIdade(idade)
{   //retornando um valor
    return 2023 - idade;
}
//chamando uma funcao
var resposta = calcularIdade(2);
//verificando o valor recebido de uma funcao
if(resposta >= 2000)
{
//escrevendo na tela cado nasceu depois do ano 2000
console.log("voce nasceu depois do ano 2000 nasceu no ano de "  + resposta);

//senao
}else{
//se nasceu depois do ano 2000
console.log("voce nasceu antes do ano 2000 nasceu no ano " + resposta);
}