function login(){
    const username = document.getElementById("uname");
    const password = document.getElementById("pw");

    if(username.value === "salma2017" && password.value === "integrity"){
        alert("Login Sucefull")
        window.location.href = "LoginSukses.html";
    }
    else{
        alert("Username or Password Is Wrong!");
        pw.value = "";
        uname.focus();
    }
}