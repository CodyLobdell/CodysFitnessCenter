function addTwoNumber(firstnumber, secondNumber) {
    letsum = firstnumber + secondNumber;
    console.log(sum);
}

function greetUser(){
  let usersName = prompt("Whats your name?");
    while (usersName == ""){
    usersName = prompt("Seriously, go ahead and type it out!");
    }
    document.write("Hello " + usersName + ", welcome to my page!");
    return usersName;
}    

function askgym(yourName){
  let gymanswer = prompt("Are you ready for a change?");
    if (gymanswer == "yes") {
      document.write("Then get ready to ROCK!" + yourName + "!");
    } else if (gymanswer == "no") {
      document.write("Whats stopping you?" + yourName + "?");
    } else {
        document.write("I'm sorry, I don't understand" + yourName + "...");
    }

}

function imagerepeat(){
  let numberanswer = prompt("Guess a number between 1-10");
  for(let i = 0; i < numberanswer; i++){
    document.write("<img src='ADIDAS_Pic.jpg' class='Adidas'>");
  }
}