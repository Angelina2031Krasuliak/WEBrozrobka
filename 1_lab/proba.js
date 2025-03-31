function mf1() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let submit = document.getElementById("submit");
     
    console.log(email);
    console.log(password);

    if (email.includes("@") && password.length >= 6) {
       submit.style.display = "block";
    } 
    else 
    {
        submit.style.display = "none";
    }
}
