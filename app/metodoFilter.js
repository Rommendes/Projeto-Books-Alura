//BOTÕES: filtrar por categoria

// const botaoes = document.querySelectorAll(".btn");
// botaoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// function filtrarLivros() {
//     const elementoBTN = document.getElementById(this.id);//AQUI SEI EXATAMENTE O BOTÃO QUE ESTOU CLICANDo
    
//     const categoria = elementoBTN.value

//     let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)

//     exibirOsLivrosNaTela(livrosFiltrados)//No métodoForEach coloquei innerHTML vazio para que apareçam os livros filtrados.
//     if(categoria == 'disponivel'){
//         const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
//         exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
//     }

// }
            
// function filtrarPorCategoria(categoria){
//     return livros.filter(livro => livro.categoria == categoria)
// }

// function filtrarPorDisponibilidade(){
//     return livros.filter(livro => livro.quantidade > 0)
// }
// //     let livrosFiltrados = categoria == "disponivel" ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);

// //     exibirOsLivrosNaTela(livrosFiltrados) //No métodoForEach coloquei innerHTML vazio para que apareçam os livros filtrados.
// //     if(categoria == "disponivel") {
// //         exibirValorTotalDosLivrosDisponiveisNaTela()
// //     }


// function exibirComValorTotalDeLIvrosDisponiveisNaTela(valorTotal){
//     elementoComValorTotalDeLIvrosDisponiveis.innerHTML = `
//     <div class="livros__disponiveis">
//       <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
//     </div>
//     `
// }
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}


//O método filter() cria um novo array com todos os elementos que passam pela função fornecida


///exemplo
const idades =[15, 19, 50]
const podeDirigir = idades.filter(idade => {
    return idade >= 18
})
//console.log("Pode dirigir=> ", podeDirigir)



