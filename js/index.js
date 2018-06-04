var editRowIndex = -1
var persons = []

function  init () {
    var btSave = document.getElementById('btn-save')
    btSave.onclick = function() {
        addPerson()
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

function addPerson() {
    var inputName = document.getElementById('nome')
    var inputIdade = document.getElementById('idade')
    var inputTel = document.getElementById('tel')
    var inputEmail = document.getElementById('email')
    
    if(isValidInput(inputName) && isValidInput(inputIdade) && isValidInput(inputTel) && isValidInput(inputEmail)) {
        if(editRowIndex == -1) {
            createItemList(inputName, inputIdade, inputTel, inputEmail)
            updateList()
        } else {
            updatePerson(editRowIndex)
        }

        clearFields(inputName, inputIdade, inputTel, inputEmail)
        editRowIndex = -1
    } else {
        alert('Preencha todos os campos.')
        inputName.focus()
    }
}

function isValidInput(input) {
    return input.value.trim() != ""
}

function createPerson(person) {
    var tr = createLine()
    var tdName = createTd(person.Nome)
    var tdIdade = createTd(person.Idade)
    var tdTel = createTd(person.Tel)
    var tdEmail = createTd(person.Email)
    var tdEdit = createTd('')
    var tdDelete = createTd('')

    var btnEdit = createBtn('Edit')
    btnEdit.onclick = function() {
        editPerson(person)
    }
    var btnDelete = createBtn('Delete')
    btnDelete.onclick = function() {
        deletePerson(person)
    }
    
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

function editPerson(person) {
    editRowIndex = persons.indexOf(person)

    var inputName = document.getElementById('nome')
    var inputIdade = document.getElementById('idade')
    var inputTel = document.getElementById('tel')
    var inputEmail = document.getElementById('email')

    inputName.value = person.Nome
    inputIdade.value = person.Idade
    inputTel.value = person.Tel
    inputEmail.value = person.Email

    inputName.focus()
}

function deletePerson(person) {
    //aqui
    if(editRowIndex != -1) {
        if(window.confirm("Você não pode apagar registros modo de edição." +
                          "\nDeseja cancelar edição?")) {
                cancelEdit()
        }
    } else {
        persons.splice(person, 1)
        updateList()
    }

    var inputName = document.getElementById('nome')
    inputName.focus()
}

function updatePerson(person) {
    var inputName = document.getElementById('nome')
    var inputIdade = document.getElementById('idade')
    var inputTel = document.getElementById('tel')
    var inputEmail = document.getElementById('email')

    person.Nome = inputName.value
    person.Idade = inputIdade.value
    person.Tel = inputTel.value
    person.Email = inputEmail.value

    updateList()
}

function cancelEdit() {
    editRowIndex = -1
    
    var inputName = document.getElementById('nome')
    var inputIdade = document.getElementById('idade')
    var inputTel = document.getElementById('tel')
    var inputEmail = document.getElementById('email')
    
    clearFields(inputName, inputIdade, inputTel, inputEmail)
}


// List

getList()

function createItemList(inputName, inputIdade, inputTel, inputEmail) {
    var person = {
        Nome: inputName.value,
        Idade: inputIdade.value,
        Tel: inputTel.value,
        Email: inputEmail.value
    }
    persons.push(person)
}

function getList() {
    var personsTxt = window.localStorage.getItem('list-persons');
    if(personsTxt) {
        persons = JSON.parse(personsTxt);
        persons.forEach(createPerson)
    }  
}

function updateList() {
    var personsTxt = JSON.stringify(persons);
    window.localStorage.setItem('list-persons', personsTxt);

    var tblPessoa = document.getElementById('tblPessoa')
    var tbody = tblPessoa.tBodies[0]
    var children = tbody.children

    tblPessoa.removeChild(children)

    persons.forEach(createPerson)
}



// Inicializando
init()