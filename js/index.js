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
    
    if(isValidInput(inputName) && isValidInput(inputIdade) && isValidInput(inputTel) && isValidInput(inputEmail)) {
        createPerson(inputName, inputIdade, inputTel, inputEmail)
    } else {
        alert('Preencha todos os campos.')
    }
}

function isValidInput(input) {
    return input.value.trim() != ""
}

function createPerson(inputName, inputIdade, inputTel, inputEmail) {
    var tr = createLine()
    var tdName = createTd(inputName.value)
    var tdIdade = createTd(inputIdade.value)
    var tdTel = createTd(inputTel.value)
    var tdEmail = createTd(inputEmail.value)
    var tdEdit = createTd('')
    var tdDelete = createTd('')

    var btnEdit = createBtn('Edit')
    tdEdit.appendChild(btnEdit)
    var btnDelete = createBtn('Delete')
    tdDelete.appendChild(btnDelete)

    var tblPessoa = document.getElementById('tblPessoa')
    var tbody = tblPessoa.tBodies[0]

    tr.appendChild(tdName)
    tr.appendChild(tdIdade)
    tr.appendChild(tdTel)
    tr.appendChild(tdEmail)
    tr.appendChild(tdEdit)
    tr.appendChild(tdDelete)

    tbody.appendChild(tr)
}

function createLine() {
    var tr = document.createElement('tr')
    return tr
}

function createTd(content) {
    var td = document.createElement('td')
    td.innerHTML = content
    return td
}

function createBtn(value) {
    var btn = document.createElement('input')
    btn.type = 'button'
    btn.value = value
    return btn
}