function rappel() { // compter le nbre d'items ds chaque liste ts les 100ms

   // let number_items = document.e.elements["check[]"];

   let number_item = document.querySelectorAll("#form1 li");

   let number_items2 = document.querySelectorAll("#form2 li");

   document.getElementById("un").innerText = number_item.length + " " + "items";

   document.getElementById("deux").innerText = number_items2.length + " " + "items";

   setTimeout(rappel, 100);
}

rappel();

function toRight() { 

   // cBoxes = document.e.elements["check[]"];
   item = document.getElementsByTagName("li");
   cBoxes = document.querySelectorAll(".item");


   for (i = 0; i <= cBoxes.length; i++) {


      if (cBoxes[i].checked) {
         document.getElementById("form2").appendChild(item[i]);
         
         cBoxes[i].checked = false;

      }
      //  else {
      //    but.disabled = true;
      // }

   }
}

// deplacer items de liste 2 vers liste 1

function toLeft() { 

   // cBoxes = document.e.elements["check[]"];
   itemss = document.getElementsByTagName("li");
   cBoxes2 = document.querySelectorAll(".item");


   for (i = 0; i <= cBoxes2.length; i++) {

      if (cBoxes2[i].checked) {
         document.getElementById("form1").appendChild(itemss[i]);
         cBoxes2[i].checked = false;

      } 
      // else {
      //    but1.disabled = true;
      // }
   }


}