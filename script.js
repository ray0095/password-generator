//prompt to generate password - handled via html  

//prompt for length of password (8-128 characters) - handled via range bar element in html 

//prompt for lowercase, uppercase, numeric, and/or special characters 

//user input validation for character types 

//button to generate - handled by assigning function to button in html 

//password is displayed in an alert - handled by displaying in passBox input in html 


function passwordGen() {
//variables
var Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"; //all possible values
 var passLength = document.getElementById('rangeBar').value; //password length identified by the "range bar" value in html 
 var password = "";//starting point 

//logic (for loop)
for(var i = 0; i <= passLength; i++) { 
    password = password + Characters.charAt(Math.floor(Math.random() * Math.floor(Characters.length - 1)));
}

//displaying password

document.getElementById('passBox').value = password;

}
