
// Responsive Contact Us Form ***COURSE REQUIREMENT***

      function clickMe()
      {
          let myForm = document.getElementById('myForm');
          let formData = new FormData(myForm);

          let firstName = (formData.get('first_name'));
          let lastName = (formData.get('last_name'));

          if (firstName.length > 3) {
              alert(firstName + " is a valid name!")
          } else {
              alert(firstName + " is not long enough")
          }
  }


// Navigation and hamburger menu ***COURSE REQUIREMENT***

let isopen=false

function Navbar() {        
            let menuList= document.querySelector("nav");
    
            if(!isopen) {
            menuList.style.display="block";
            isopen=true
        }
        
        else {
            menuList.style.display="none";
        
            isopen=false

        }

        }