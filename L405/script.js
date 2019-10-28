var students = [
    {id: 1,  name: 'Andro', gpa:2.8},
    {id: 2,  name: 'Giorgi', gpa:2.2},
    {id: 3,  name: 'Andro', gpa:2.2},
    {id: 4,  name: 'Gurami', gpa:2.1},
    {id: 5,  name: 'Andro', gpa:2.3},
    {id: 6,  name: 'Giorgi', gpa:2.5},
    {id: 7,  name: 'Tornike', gpa:2.8},
    {id: 8,  name: 'Dato', gpa:1.8},
];

function averageGpa(list, compGpa = 2) {
    var gpaSum = 0;
    var gpaCount = 0;

    for(var i = 0; i < list.length; i++) {
        if(list[i].gpa >= compGpa) {
            gpaSum += list[i].gpa;
            gpaCount ++;
        }
    }

    return gpaSum/gpaCount;
}

console.log(averageGpa(students, 2.5));
console.log(averageGpa(students));

