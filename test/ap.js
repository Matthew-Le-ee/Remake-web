alert("This is Only Demo ")

var attempt = 3;

function validate(){
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   if(username == "" || password == ""){
        alert("please input username and password")
        return false;
   }

   if ( username == "Tiga Bintang Kreasi" && password == "Tigabintangkreasi123"){
       alert ("Login successfully");
       window.location = "../HTML/home.html"; // Redirecting to other page.
       return false;
   }

   else{
     attempt --;
     alert("You have left " + attempt + " attempt;");
     document.getElementById('username').value = ""
     document.getElementById("password").value = "";
     
     if(attempt == 0){
       document.getElementById("username").disabled = true;
       document.getElementById("password").disabled = true;
       document.getElementById("submit").disabled = true;
       return false;
     }
  }
}