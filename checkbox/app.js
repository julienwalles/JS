    
    
   //  document.getElementByClassName("bouton1").addEventListener("click", onRight);

    function onRight() {

      if(item1.checked ==1) {

         document.getElementById("formulaire2").appendChild(check1);
         item1.checked = false;

      }

      if(item2.checked ==1) {

         document.getElementById("formulaire2").appendChild(check2);
         item2.checked = false;
      }


      if(item3.checked ==1) {

         document.getElementById("formulaire2").appendChild(check3);
         item3.checked = false;
      }

      if(item4.checked ==1) {

         document.getElementById("formulaire2").appendChild(check4);
         item4.checked = false;
      }

      if(item5.checked ==1) {

         document.getElementById("formulaire2").appendChild(check5);
         item5.checked = false;
      }
    }

    function onLeft() {

      // if(item6.checked ==1) {

      //    document.getElementById("formulaire1").appendChild(check6);
      // }

      // if(item7.checked ==1) {

      //    document.getElementById("formulaire1").appendChild(check7);
      // }


      // if(item8.checked ==1) {

      //    document.getElementById("formulaire1").appendChild(check8);
      // }

      // if(item9.checked ==1) {

      //    document.getElementById("formulaire1").appendChild(check9);
      // }

      // if(item10.checked ==1) {

      //    document.getElementById("formulaire1").appendChild(check10);
      // }
      var checkbox = document.querySelector("input[name=checkbox]");

      checkbox.addEventListener('change', function() {
         if (this.checked) {

            document.getElementById("formulaire2").appendChild(this);
         }

         else {
            alert("items");
         }

    }   
   }