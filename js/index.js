init();

function init() {
    var btSave = document.getElementById('btn-save')
    btSave.onclick = function() {
        addName()
    }
}

function addName() {
    var inputName = document.getElementById('nome')
    var inputIdade = document.getElementById('idade')
    var inputTel = document.getElementById('tel')
    var inputEmail = document.getElementById('email')
    
    if(validateInput(inputName.value) && validateInput(inputIdade.value) && validateInput(inputTel.value) && validateInput(inputEmail.value)) {
        var tr = createTr()
        var td = createTd()
    } else {
        alert('Preencha todos os campos.')
    }
}

function validateInput(input) {
    return input.trim() != ""
}

function createTr() {
    return document.createElement('tr')
}

function createTd(inputName, inputIdade, inputTel, inputEmail) {
    var td = document.createElement('td')
}