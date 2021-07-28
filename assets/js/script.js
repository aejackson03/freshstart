function() {
	('.toggler').on('click', function() {
		('nav').slideToggle(500);
  });
};

      // Contact Us Form
      function clickMe() {
        let myForm = document.getElementById('myForm');
        let formData = new FormData(myForm);
  
        let firstName = (formData.get('first_Name'));
        let lastName = (formData.get('last_Name'));
  
        if (lastName.length > 3) {
          alert(firstName + "is a valid name!")
      } else {
          alert(firstName + "is not long enough")
        }
        console.log(firstName, lastName);
    
    }

class Navbar {
    constructor(target, menu) {
        // 1. Check parameters type and throw error if not an HTML element
        if (target instanceof HTMLElement && menu instanceof HTMLElement) {
            // 2. If parameters are HTML elements set the attributes
            this.btn = target;
            this.menu = menu;
        } else {
            throw new TypeError("The Target and Menu arguments must be a DOM element."); 
        }
        this.isOpen = false;
    }
}

class Navbar {
    constructor(target, menu) {
        if (target instanceof HTMLElement && menu instanceof HTMLElement) {
            this.btn = target;
            this.menu = menu;

            this.btn.addEventListener('click', () => {
                this.open();
            });
        } else {
            throw new TypeError("The Target and Menu arguments must be a DOM element."); 
        }
        ...
    }

    open() {
        if (this.isopen) {
            this.menu.classList.add('nav-hidden');
        } else {
            this.menu.classList.remove('nav-hidden');
        }

        this.isopen = !this.isopen;
    }
}

const navbar = new Navbar(
    document.querySelector(".menu-btn"),
    document.querySelector(".menu-list")
);