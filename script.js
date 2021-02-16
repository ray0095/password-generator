//prompt to generate password - handled via html  

//prompt for length of password (8-128 characters) - handled via range bar element in html 

//prompt for lowercase, uppercase, numeric, and/or special characters 

//user input validation for character types 

//button to generate - handled by assigning function to button in html 

//password is displayed in an alert - handled by displaying in passBox input in html 



function passwordGen() {
    //variables
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase ="abcdefghijklmnopqrstuvwxyz";
    var Numbers = "1234567890";
    var Special = "!@#$%^&*()_+";
     //all possible values
    var allCharacters = upperCase + lowerCase + Numbers + Special;
    //Uppercase combo values
    var upperLower = upperCase + lowerCase;
    var upperNumbers = upperCase + Numbers;
    var upperSpecial = upperCase + Special;
    //Lowercase combo values 
    var lowerNumbers = lowerCase + Numbers;
    var lowerSpecial = lowerCase + Special;
    //Numbers combo values
    var numberSpecial = Numbers + Special;
    
    var passLength = document.getElementById('rangeBar').value; //password length identified by the "range bar" value in html 
    const checkUpper = document.getElementById('Uppercase');
    console.log(checkUpper.checked);

    const checkLower = document.getElementById('Lowercase');
    console.log(checkLower.checked);

    const checkNumbers = document.getElementById('Numbers');
    console.log(checkNumbers.checked);

    const checkSpecial = document.getElementById('Special');
    console.log(checkSpecial.checked);

    var password = "";//starting point 
    
    //logic (for loop)

 if (checkUpper.checked && checkLower.checked && checkNumbers.checked && checkSpecial.checked) {
        for(var i = 0; i <= passLength; i++) { 
            password = password + allCharacters.charAt(Math.floor(Math.random() * Math.floor(allCharacters.length - 1)));
        } 
    } else if (checkUpper.checked) {
        for(var i = 0; i <= passLength; i++) { 
            password = password + upperCase.charAt(Math.floor(Math.random() * Math.floor(upperCase.length - 1)));
        }
    } else if (checkLower.checked) {
        for(var i = 0; i <= passLength; i++) {
            password = password + lowerCase.charAt(Math.floor(Math.random() * Math.floor(lowerCase.length -1)));
        }
    } else if (checkNumbers.checked){
        for(var i = 0; i <= passLength; i++){
            password = password + Numbers.charAt(Math.floor(Math.random() * Math.floor(Numbers.length - 1))); 
        }
    } else if (checkSpecial.checked){
        for(var i =0; i <= passLength; i++) {
            password = password + Special.charAt(Math.floor(Math.random() * Math.floor(Special.length - 1)));
        }
    } else if (checkUpper.checked && checkLower.checked) {
        for(var i =0; i <= passLength; i++) {
            password = password + upperLower.charAt(Math.floor(Math.random() * Math.floor(upperLower.length - 1)));
        }
    }
    
    //displaying password
    
    document.getElementById('passBox').value = password;
    
}