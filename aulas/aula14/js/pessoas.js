const pessoa1 = document.querySelector("#Pessoa1")
const pessoa2 = document.querySelector("#Pessoa2")
const pessoa3 = document.querySelector("#Pessoa3")
const pessoa4 = document.querySelector("#Pessoa4")
const pessoa5 = document.querySelector("#Pessoa5")

fetch("./json/pessoas.json") 
.then(response => response.json())
.then(pessoas =>{

   pessoa1.innerHTML = pessoas.pessoa1
   pessoa2.innerHTML = pessoas.pessoa2
   pessoa3.innerHTML = pessoas.pessoa3
   pessoa4.innerHTML = pessoas.pessoa4
   pessoa5.innerHTML = pessoas.pessoa5

}
)