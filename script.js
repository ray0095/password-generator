    //variables
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase ="abcdefghijklmnopqrstuvwxyz";
    var Numbers = "1234567890";
    var Special = "!@#$%^&*()_+";
 
    const caseUpper=document.getElementById('Uppercase'); //grabbing user input  for Uppercase criteria
    const caseLower=document.getElementById('Lowercase'); //grabbing user input for Lowercase criteria
    const caseNumbers=document.getElementById('Numbers'); //grabbing user input for Lowercase criteria
    const caseSpecial=document.getElementById('Special'); //grabbing user input for Lowercase criteria

    function passwordGen() {   

        const passLength = document.getElementById('rangeBar').value; //password length identified by the "range bar" value in html
        var userArray = ""; //array to be modified by user inputs 
        var password =""; //password array

        if (caseUpper.checked) {
            userArray= userArray+upperCase;
        }
        console.log(userArray);
        if (caseLower.checked) {
            userArray = userArray+lowerCase;
        console.log(userArray);
        }
        if (caseNumbers.checked){
            userArray = userArray + Numbers;
        console.log(userArray);
        }
        if (caseSpecial.checked){
            userArray = userArray+Special;
            console.log(userArray);
        }

        for(var i = 0; i <= passLength; i++) { 
            password = password + userArray.charAt(Math.floor(Math.random() * Math.floor(userArray.length - 1)));
            console.log(passLength);
        }

        document.getElementById('passBox').value = password;
        
    }


