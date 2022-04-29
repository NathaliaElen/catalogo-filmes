listaDeFilmes = [
    'https://img.elo7.com.br/product/zoom/2657A05/big-poster-harry-potter-e-o-prisioneiro-de-azkaban-lo2-90x60-geek.jpg',
    'https://br.web.img2.acsta.net/pictures/15/12/07/20/58/133341.jpg',
    'https://img.elo7.com.br/product/zoom/26783B9/big-poster-filme-o-espetacular-homem-aranha-2-2014-lo4-90x60-o-espetacular-homem-aranha-2.jpg',
    'https://media.fstatic.com/2WyxDtZM2cMnZXGN430CfgBGQpQ=/210x312/smart/media/movies/covers/2018/04/128879721_2SZ.png'
]

listaDeTitulos = [
    'Harry Potter e o Prisioneiro de Azkaban',
    'Jogos Vorazes: A Esperança o Final',
    'O Espetacular Homem-Aranha 2: A Ameaça de Electro',
    "Como Eu Era Antes de Você"
    //clube da luta, efeito borboleta
]

let catalogo = document.querySelector('#catalogo')
let i = 0
let erro = document.querySelector('#erro')

for (i; i < listaDeFilmes.length; i++) {
    catalogo.innerHTML += `<div class="filmes">
      <img src=${listaDeFilmes[i]}><figcaption>${listaDeTitulos[i]}</figcaption>
    </div>`
}

let filmeRepetido = true

function cadastrar() {
    let novoFilme = document.querySelector('#filme').value

    let novoTitulo =document.querySelector('#titulo').value

    if (listaDeFilmes.includes(novoFilme) || (listaDeTitulos.toLowerCase()).includes(novoTitulo.toLowerCase())) {
        erro.innerHTML = `Filme ${novoTitulo} já cadastrado.`
      }else{
        listaDeFilmes.push(novoFilme)
        listaDeTitulos.push(novoTitulo)  
        erro.innerHTML = ``
        mostraFilmes()
      }
      document.querySelector(`#filme`).value = ``
      document.querySelector(`#titulo`).value = ``  
}

function mostraFilmes() {
    do {
        catalogo.innerHTML += `
          <div>
            <img src= ${listaDeFilmes [i]} alt=${listaDeTitulos[i]}><figcaption>${listaDeTitulos[i]}</figcaption>
          </div>      
          `
        i++
    } while (i < listaDeFilmes.length);
}