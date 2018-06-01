var list = {

    persons: [],

    getList: function() {
        var personTxt = window.localStorage.getItem('list-persons')
        if(personTxt) {
            list.persons = JSON.parse(personTxt)
        }
        return this.persons
    },

    addPerson: function (person) {
        list.persons.push(person)
        list.savePersons()
    },

    savePersons: function() {
        var personTxt = JSON.stringify(list.persons)
        window.localStorage.setItem('list-persons', personTxt)
    }
}