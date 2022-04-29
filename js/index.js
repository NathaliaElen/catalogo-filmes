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
]

let catalogo = document.querySelector('#catalogo')
let i = 0
let erro = document.querySelector('#erro')

for (i; i < listaDeFilmes.length; i++) {
    catalogo.innerHTML += `<div class="filmes">
      <img src=${listaDeFilmes[i]}><figcaption>${listaDeTitulos[i]}</figcaption>
    </div>`
}