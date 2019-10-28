var n=prompt("რიცხვი1");
var q=prompt("რიცხვი2");
var z=prompt("რიცხვი3");

function checkMin()
{
    document.getElementById("demo").innerHTML =Math.min(n,q,z);
}