


document.getElementById("btn").addEventListener("click",checkData);


function checkData() {
     if(document.forms[0].email_address.value=='lwrnsalkhtyb9@gmail.com'&&
 document.forms[0].password.value=='lorans123'){
     document.forms[0].action='index.html';
 }
 else{
     alert("The email or the Password is not valid Please try again");
 }
  }



