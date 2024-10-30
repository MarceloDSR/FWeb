let banners = ["./img/game-icons--dinosaur-rex.png", "./img/mdi--dinosaur-pixel.png"]
let cont = 0;

function trocaBanner(){
    cont = (cont+1)%2;

    document.querySelector("#imgbanner").src = banners[cont]
}

setInterval(trocaBanner, 1000)