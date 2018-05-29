var editRowIndex = -1

function init() {
    var btSave = document.getElementById('btn-save')
    btSave.onclick = function() {
        addName()
    }

    var btCancel = document.getElementById('btn-cancel')
    btCancel.onclick = function() {
        if(editRowIndex != -1) {
            if(window.confirm("Você realmente deseja cancelar edição?")) {
                cancelEdit()
            }
        }
    }
}

function addName() {
    var inputName = document.getElementById('nome')
    var inputIdade = document.getElementById('idade')
    var inputTel = document.getElementById('tel')
    var inputEmail = document.getElementById('email')
    
    if(isValidInput(inputName) && isValidInput(inputIdade) && isValidInput(inputTel) && isValidInput(inputEmail)) {
        if(editRowIndex == -1) {
            createPerson(inputName, inputIdade, inputTel, inputEmail)
        } else {
            updatePerson(inputName, inputIdade, inputTel, inputEmail)
        }

        clearFields(inputName, inputIdade, inputTel, inputEmail)
        editRowIndex = -1
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
    btnEdit.onclick = editPerson
    var btnDelete = createBtn('Delete')
    btnDelete.onclick = deletePerson
    
    tdEdit.appendChild(btnEdit)
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

function clearFields(inputName, inputIdade, inputTel, inputEmail) {
    inputName.value = ''
    inputIdade.value = ''
    inputTel.value = ''
    inputEmail.value = ''
    
    inputName.focus()
}

function editPerson() {
    var td = this.parentNode
    var tr = td.parentNode
    editRowIndex = tr.rowIndex
    
    var tableDatas = tr.childNodes
    var inputName = document.getElementById('nome')
    var inputIdade = document.getElementById('idade')
    var inputTel = document.getElementById('tel')
    var inputEmail = document.getElementById('email')

    inputName.value = tableDatas[0].innerHTML
    inputIdade.value = tableDatas[1].innerHTML
    inputTel.value = tableDatas[2].innerHTML
    inputEmail.value = tableDatas[3].innerHTML
}

function deletePerson() {
    
    if(editRowIndex != -1) {
        alert('Você está no modo de edição!')
    } else {
        var td = this.parentNode
        var tr = td.parentNode
    
        var tblPerson = document.getElementById('tblPessoa')
        var tbody = tblPerson.tBodies[0]
        tbody.removeChild(tr)
    }

}

function updatePerson(inputName, inputIdade, inputTel, inputEmail) {
    var tblPerson = document.getElementById('tblPessoa')
    var tbody = tblPerson.tBodies[0]
    var tr = tbody.children[editRowIndex]

    tr.childNodes[0].innerHTML = inputName.value
    tr.childNodes[1].innerHTML = inputIdade.value
    tr.childNodes[2].innerHTML = inputTel.value
    tr.childNodes[3].innerHTML = inputEmail.value
}

function cancelEdit() {
    editRowIndex = -1
    
    var inputName = document.getElementById('nome')
    var inputIdade = document.getElementById('idade')
    var inputTel = document.getElementById('tel')
    var inputEmail = document.getElementById('email')
    
    clearFields(inputName, inputIdade, inputTel, inputEmail)
}
// Iniciando
init()