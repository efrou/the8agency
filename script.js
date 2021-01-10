//Get data

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


/*
var registeredPerson = {
    name: "Hola",
    number: 60
};
 
*/


//Save data in LocalStorage

function save_data(){

let registeredPerson_serialized = JSON.stringify(registeredPerson);
/*
function save_data() {
  localStorage.setItem("Person", registeredPerson_serialized); 
};
*/

localStorage.setItem("Person", registeredPerson_serialized); 

 //Get data
let registeredPerson_deserialized = JSON.parse(localStorage.getItem("Person"));

console.log(registeredPerson_deserialized);

/*
var storedValue = JSON.parse(localStorage.getItem("Person")); 

console.log(storedValue);

*/

}