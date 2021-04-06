
for (i in students) {

var newLi = document.createElement("table"); //variable pour créer des élements li 

var items = document.getElementById('items');

var x = Object.entries(students[i]);

var t = document.createTextNode(x);

newLi.appendChild(t);

document.getElementById("items").appendChild(newLi);

}