function validaBusca() {
    if(document.querySelector('#inputlupa').value == ''){
        alert('Não podia ter deixado em branco o busca!');
        return false;
    }
  
}

document.querySelector('#form-busca').onsubmit = validaBusca;