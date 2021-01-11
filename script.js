//Save data in LocalStorage
function save_data(){
	
    let inputName = document.getElementById("name");
    let inputLastName = document.getElementById("last-name");
    let inputEmail = document.getElementById("email");
    let inputCountry = document.getElementById("country");
    let inputPhone = document.getElementById("phone-number");
    let inputJob = document.getElementById("job");
    
    
    let registeredPerson = {
        name   : inputName.value,
        last : inputLastName.value,
        email      : inputEmail.value,
        country    : inputCountry.value,
        phone : inputPhone.value,
        job : inputJob.value
      };
        
    let guests = JSON.parse(localStorage.getItem("Guests"));
    if (guests == null)
        guests = new Array(registeredPerson);
    else
        guests.push(registeredPerson);			
    
    let guests_serialized = JSON.stringify(guests);	
    localStorage.setItem("Guests", guests_serialized); 	
    
    }

