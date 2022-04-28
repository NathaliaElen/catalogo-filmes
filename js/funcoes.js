//let a = Math.floor(Math.random() * 1000)
//function minhaPrimeiraFuncao() {
  //let b = Math.floor(Math.random() * 1000)
  //if(a > b) {
    //return `${a} - ${b} = ${a - b}`
  //} else {
 //   return `${a} + ${b} = ${a + b}`
 // }
  
//}

//console.log(minhaPrimeiraFuncao())

//!Está é uma função anônima
const minhaSegundaFuncao = function() {
  return 'Escrevendo minha função anônima!'
}

console.log(minhaSegundaFuncao());

//!é uma arrow function
const a = (nome) => {
  return `Olá ${nome}, esta é uma arrow function!`
}

console.log(a('Nathália'));