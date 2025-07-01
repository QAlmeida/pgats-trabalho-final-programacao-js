/*
FUNÇÕES DESIGNADAS PARA AVALIAÇÃO - PGATS

1 - geradorDeTagsDeIdentificacao (Gerar uma Tag de identificação do pet com o nome em letras maiúsculas)
2 - verificarSePodeSerAdotado (Se a idade do pet é igual a 1 e o porte é "M", então a adoção é permitida)
3 - calcularConsumoDeRacao (Cáculo de consumo de ração diário)
4 - decidirTipoDeAtividadePorPorte (A depender do porte do pet, deve ser designado um tipo de atividade)
5 - buscarDadoAsync (Retorna uma Promise e resolve com um valor específico)

*/

function geradorDeTagsDeIdentificacao(nome){
    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade,porte){
    porte = porte.toUpperCase()
    return (idade >= 1 && (porte === 'M' || porte === 'G')) ? true : false;
}

function calcularConsumoDeRacao(nome, idade, peso){
    return (peso * 300)
}

function decidirTipoDeAtividadePorPorte(porte){
    porte = porte.toLowerCase()
    return porte === 'pequeno'
        ? 'brincar dentro de casa'
        : porte === 'médio'
        ? 'caminhada no quarteirão'
        : porte === 'grande'
        ? 'correr no parque'
        : 'porte inválido';

}

async function buscarDadoAsync() {
    return 'Pipoca';
}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
};
    
// Teste das funções

// console.log(geradorDeTagsDeIdentificacao("Binhola")); // deve retornar o nome maiúsculo

// console.log(verificarSePodeSerAdotado(2, 'M')); // deve retornar true
// console.log(verificarSePodeSerAdotado(0, 'g')); // deve retornar false
// console.log(verificarSePodeSerAdotado(1, 'M')); // deve retornar false

// console.log(calcularConsumoDeRacao('Pitoco', 1, 14.5)) // deve retornar a quantidade diária de ração

// console.log(decidirTipoDeAtividadePorPorte('PEQUENO')); // deve retornar "brincar dentro de casa"
// console.log(decidirTipoDeAtividadePorPorte('médio'));   // deve retornar "caminhada no quarteirão"
// console.log(decidirTipoDeAtividadePorPorte('grande'));  // deve retornar "correr no parque"
// console.log(decidirTipoDeAtividadePorPorte('gigante')); // deve retornar "porte inválido"

// (async () => {
//     const resultado = await buscarDadoAsync();
//     console.log(resultado); // deve retornar "Pipoca"
// })();