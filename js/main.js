var sign = document.getElementById("form-signin-heading");
sign.innerHTML = "Por favor inicia sesión";

var email = document.getElementById("inputEmail");
email.placeholder = "Correo Electrónico";

var pass = document.getElementById("inputPassword");
pass.placeholder = "Contraseña";

var tag = document.getElementsByTagName("span")[0];
tag.innerHTML = "Recordar datos";

var btn = document.getElementsByTagName("button")[0];
btn.innerHTML = "Iniciar Sesión";