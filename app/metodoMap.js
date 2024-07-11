// function aplicarDesconto(livros){
//     const desconto = 0.3
//     livrosComDesconto = livros.map(livro =>{
//         return {...livro, preco: livro.preco - (livro.preco * desconto)}
        
//     })
//     return livrosComDesconto
    
    
// }
// //console.log("Desconto", livros)
function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}
//Quando colocamos as reticências ... e escrevemos livro, ele vai fazer uma cópia de todo o nosso array, ou do nosso objeto existente, para outro objeto.

//É COMO EU DIZENDO: faz uma cópia de tudo o que 

//forEach MANIPULA os dados reais de um array 
//e o map cria um NOVO array.




// Array de objetos representando os livros
const livretos = [
    {nome: 'Livro A', preco: 50},
    {nome: 'Livro Br', preco: 90},
    {nome: 'Livro C', preco: 140}
]
//aplicar 20% de desconto
const desconto2 = 0.2
const livrosIncluidoDesconto = livretos.map((livreto) =>{
    return {...livreto, 
        preco:((livreto.preco - desconto2)* desconto2).toFixed(2),
    }})
// Exibindo os novos preços
//livrosIncluidoDesconto.forEach((livreto) => console.log(`livreto.nome: R$ ${livreto.preco}`))