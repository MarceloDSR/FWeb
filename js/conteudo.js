function validaBusca() {
    if(document.querySelector("#inputLupa").value == ""){
        alert("Não podia ter deixado o pesquisar em branco!");
        return false;
    } else{
        let pesquisa = document.querySelector("#inputLupa")
        
        document.getElementById("botaoPesquisar").addEventListener("click", function (){
            window.open("https://www.google.com/search?q=" + pesquisa.value, "_black");
        });

        }
    }
  


document.querySelector("#form-search").onsubmit = validaBusca;