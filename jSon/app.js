for (i in students) {

    var newLi = document.createElement("table"); //variable pour créer des élements li

    var items = document.getElementById('items');

    var etdnt = students[i];

    var t = document.createTextNode(etdnt.id + " " + etdnt.name);

    newLi.appendChild(t);

    document.getElementById("items").appendChild(newLi);

}

// function loadDoc() {                       requête qui va récupérer le tableau en entier
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {

//       if (this.readyState == 4 && this.status == 200) {
//        document.getElementById("demo").innerHTML = this.responseText;
//       }
//     };
//     xhttp.open("GET", "students.json", true);
//     xhttp.send();
// }


function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let az = JSON.parse(this.responseText); //convertir stringJSON en objet

            for (i = 0; i < az.length; i++) {

                // créer des li

                var newLi2 = document.createElement("li");

                var btnDel = document.createElement("button");

                btnDel.textContent = "Supprimer";

                btnDel.className = "delete";

                newLi2.appendChild(btnDel);

                var etdnt = az[i];

                var t2 = document.createTextNode(etdnt.id + " " + etdnt.name + " " + etdnt.avatar);

                newLi2.appendChild(t2);

                var list = document.getElementById("dem");

                list.appendChild(newLi2);

                // delete items

                btnDel.addEventListener("click", del);
         
                function del() {
                   etdnt.parentNode.removeChild(etdnt);             
                }
            }
        }
    };
    xhttp.open("GET", "students.json", true);
    xhttp.send();
}