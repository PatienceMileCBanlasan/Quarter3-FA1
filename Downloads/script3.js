function myFunction() {
  
  var nickname = "Miles";
  var height = "65.3543 inches";
  var weight = "46 kg";
  var txt;
  if (confirm("Do you wish to share your personal information with the site?")) {
    txt = console.log("Name: " + nickname + "\nHeight: " + height + "\nWeight: " + weight);
  } else {
    txt = console.log("User does not wish to share his/her information");
  }
  document.getElementById("demo").innerHTML = txt;
}


