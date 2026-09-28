document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop actual form submission
    let valid = true;
    const errors = 
document.querySelectorAll(".error");
    errors.forEach(el => el.style.display="none"); //hide all errors
 //Validate Name
    const name = document.getElementById("name");
    const namePattern = /^[A-Za-z]{3,50}$/;
    if (!namePattern.test(name.value)) {
 document.getElementById("nameError").style.display = "block";
        valid = false;
 }
 //Validate Email
    const email = document.getElementById("email");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
document.getElementById("emailError").style.display = "block";
        valid = false;
 }
  //Validate Password(minlength=6 already enforces on browser, but also cheeck JS)
     const password = document.getElementById("password");
      if (password.value.length < 6) { 
 document.getElementById("emailError").style.display = "block";
        valid = false;
 } 
//Validate Country
     const country = document.getElementById("country");
     if (country.value === "")  {
document.getElementById("countryError").style.display = "block";
         valid = false;
     }  
     //Validate Terms
     const terms = document.getElementById("terms");
     if (!terms.checked) {
document.getElementById("termsError").style.display = "block";
         valid = false;
     }
     //success
     if (valid) {
        document.getElementById("successMsg").style.display = "block";
     }
});