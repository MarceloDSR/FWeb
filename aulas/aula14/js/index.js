const item1 = document.querySelector("#item1")
const item2 = document.querySelector("#item2")
const item3 = document.querySelector("#item3")
const item4 = document.querySelector("#item4")
const item5 = document.querySelector("#item5")

fetch("./json/index.json")
.then(response => response.json())
.then(mochila =>{

   item1.innerHTML = mochila.item1;
   item2.innerHTML = mochila.item2;
   item3.innerHTML = mochila.item3;
   item4.innerHTML = mochila.item4;
   item5.innerHTML = mochila.item5;

}
)