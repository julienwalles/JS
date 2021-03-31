window.onload = () => {

  const form1 = document.querySelector('#addForm1'); // variable pour le form1
  const form2 = document.querySelector('#addForm2'); //variable pour le form2


  let items = document.getElementById('items'); // variable pour form2
  let submit = document.getElementById('submit'); // variable pour btn submit


  form1.addEventListener('submit', addItem);
  items.addEventListener('click', removeItem);


};

function addItem(e) {
  e.preventDefault();

  var newLi = document.createElement("li"); //variable pour créer des élements li 

  var items = document.getElementById('items');

  var text_input = document.getElementById("item").value;

  var t = document.createTextNode(text_input);
  newLi.appendChild(t);

  if (text_input != "") {

    items.appendChild(newLi);

  } else {

    alert("Aucun texte saisi!");
  }

  document.getElementById("item").value = ""; // vider le champ input

  var span = document.createElement("span");

  // var edit_txt = document.createTextNode("\ud83d\uddd1");
  var edit_txt = document.createElement("button");

  edit_txt.textContent = "Delete";

  span.className = "delete";
  span.id = "Btndelete";

  span.append(edit_txt);

  newLi.appendChild(span);

  var span2 = document.createElement("span");

  // var edit2_txt = document.createTextNode("\u270E");
  var edit2_txt = document.createElement("button");

  edit2_txt.textContent = "Edit";

  span2.className = "edit";

  span2.id = "Btnedit";

  span2.append(edit2_txt);

  newLi.appendChild(span2);


  //éditer un item

  var itemEdit = document.getElementsByTagName("li");

  for (i = 0; i < itemEdit.length; i++) {

    itemEdit[i].onclick = function () {

      var inu = this.innerText;

      document.getElementById("item").value = inu;

      submit.value = "Edit";

    }
  }
}
//remettre l'item édité à sa place









function removeItem(e) {
  e.preventDefault();

  //supprimer des items

  var list = document.getElementsByClassName("delete");

  for (i = 0; i < list.length; i++) {

    list[i].onclick = function () {

      var del = this.parentElement;

      del.style.display = "none";
    }
  }

}

function toggleButton(ref, btnID) {

}

document.getElementById("edit").addEventListener("click,", edition);

function edition() {

  var itemEdit = document.getElementsByTagName("li");

  for (i = 0; i < itemEdit.length; i++) {

    itemEdit[i].onclick = function () {

      var inu = this.innerText;

      document.getElementById("item").value = inu;

      submit.value = "Edit";
    }
  }
}