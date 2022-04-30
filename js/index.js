listaDeFilmes = [
    'https://th.bing.com/th/id/R.64ef3a86c89476233f45bfd0c8a23d40?rik=6632RQtHV1%2bM0A&riu=http%3a%2f%2fbr.web.img3.acsta.net%2fpictures%2f19%2f04%2f26%2f17%2f30%2f2428965.jpg&ehk=Uzgr7WpJeHJtwxw0faruyCvgC%2b%2btOKer3D4CfwuEtA8%3d&risl=&pid=ImgRaw&r=0',
    'https://img.elo7.com.br/product/zoom/2657A05/big-poster-harry-potter-e-o-prisioneiro-de-azkaban-lo2-90x60-geek.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/thumb/4/42/HungerGamesPoster.jpg/250px-HungerGamesPoster.jpg',
    'https://img.elo7.com.br/product/zoom/26783B9/big-poster-filme-o-espetacular-homem-aranha-2-2014-lo4-90x60-o-espetacular-homem-aranha-2.jpg',
    'https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg',
    'https://media.fstatic.com/2WyxDtZM2cMnZXGN430CfgBGQpQ=/210x312/smart/media/movies/covers/2018/04/128879721_2SZ.png'

]

listaDeTitulos = [
    'Vingadores: Ultimato',
    'Harry Potter e o Prisioneiro de Azkaban',
    'Os Jogos Vorazes',
    'O Espetacular Homem-Aranha 2: A Ameaça de Electro',
    'O Rei Leão',
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

    if (listaDeFilmes.includes(novoFilme) || listaDeTitulos.includes(novoTitulo)) {
        erro.innerHTML = `Filme ${novoTitulo} já cadastrado.`
      }else{
        listaDeFilmes.push(novoFilme)
        listaDeTitulos.push(novoTitulo)
        erro.innerHTML = ''
        mostraFilmes()
      }
      document.querySelector('#filme').value = ''
      document.querySelector('#titulo').value = ''  
}

function mostraFilmes() {
    do {
        catalogo.innerHTML += `
          <div class="filmes">
            <img src=${listaDeFilmes[i]} alt=${listaDeTitulos[i]}><figcaption>${listaDeTitulos[i]}
          </div>      
          `
        i++
    } while (i < listaDeFilmes.length);
}