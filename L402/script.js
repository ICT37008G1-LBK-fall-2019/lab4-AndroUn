function countByName(list, Name) {
    var count = 0;
    for(var i = 0; i < list.length; i++) {
        if(list[i].name == Name)
            count++;
    }
    return count;
}

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

function count()
{
    document.getElementById("demo").innerHTML =countByName(students,"Andro");
    document.getElementById("demo1").innerHTML =countByName(students,"Tornike");
}