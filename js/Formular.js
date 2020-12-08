function validate(){
  var name = document.getElementById("navn").value;
  var subject = document.getElementById("emne").value;
  var phone = document.getElementById("tlf nummer").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("besked").value;
  var error_message = document.getElementById("fejl-besked");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 3){
    text = "Indtast et navn på minimum 3 tegn";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Minimum 10 tegns uddybelse af emnet";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 8){
    text = "Venligst indtast et fuldt telefonnummer";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Indtast en mail vi kan vende tilbage til";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 30){
    text = "Beskriv emnet med minimum 30 tegn";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}