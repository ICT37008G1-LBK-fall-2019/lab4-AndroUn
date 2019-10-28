var students = [
    {id: 1,  name: 'Andro'},
    {id: 2,  name: 'Giorgi'},
    {id: 3,  name: 'Andro'},
    {id: 4,  name: 'Gurami'},
    {id: 5,  name: 'Andro'},
    {id: 6,  name: 'Giorgi'},
    {id: 7,  name: 'Tornike'},
    {id: 8,  name: 'Dato'},
];

function countNames(list) {
    var difList = {};
    for(var i = 0; i < list.length; i++) {
        var key = list[i].name;
        if(difList[key] == null)
            difList[key] = 0;
        difList[key]++;
    }
    return difList;
}

console.log(countNames(students));
