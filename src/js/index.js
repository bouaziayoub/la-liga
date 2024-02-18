import { PantallaRegistro } from "./registro";
import { PantallaEquipos } from "./equipos";
import { saveUser } from "./storage";
import dataUsers from "../json/users.json";

async function initApp() {
  // Mostrar pantalla de registro
  const pantallaRegistro = new PantallaRegistro(
    document.querySelector(".container")
  );

  // Esperar a que el contenido del DOM esté completamente cargado antes de ejecutar JavaScript
  document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias al formulario de inicio de sesión y al formulario de registro
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // Obtener referencia al botón de registro
    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");

    // Agregar un event listener al botón de registro
    registerBtn.addEventListener("click", function () {
      // Ocultar el formulario de inicio de sesión
      loginForm.style.display = "none";
      // Mostrar el formulario de registro
      registerForm.style.display = "block";
    });

    loginBtn.addEventListener("click", function () {
      // mostar el formulario de inicio de sesión
      loginForm.style.display = "block";
      // ocultar el formulario de registro
      registerForm.style.display = "none";
    });

    const loginSubmit = document.getElementById("loginSubmit");

    const registerSubmit = document.getElementById("registerSubmit");

    loginSubmit.addEventListener("click", login);

    registerSubmit.addEventListener("click", register);

    // function login() {
    //   var email = document.getElementById("email").value;
    //   var password = document.getElementById("password").value;
    //   console.log(dataUsers);
    //   // Cargar usuarios desde el archivo JSON
    //   fetch(dataUsers)
    //     .then((response) => response.json())
    //     .then((users) => {
    //       // Verificar las credenciales
    //       var user = users.find(
    //         (u) => u.email === email && u.password === password
    //       );

    //       if (user) {
    //         alert("Inicio de sesión exitoso");
    //       } else {
    //         alert("Nombre de usuario o contraseña incorrectos");
    //       }
    //     })
    //     .catch((error) => console.error("Error al cargar usuarios:", error));
    // }

    // function register() {
    //   var newemail = document.getElementById("newemail").value;
    //   var newPassword = document.getElementById("newPassword").value;

    //   // Cargar usuarios desde el archivo JSON
    //   fetch("users.json")
    //     .then((response) => response.json())
    //     .then((users) => {
    //       // Verificar si el usuario ya existe
    //       var existingUser = users.find((u) => u.email === newemail);

    //       if (existingUser) {
    //         alert("El nombre de usuario ya está registrado");
    //       } else {
    //         // Agregar el nuevo usuario
    //         var newUser = { email: newemail, password: newPassword };
    //         users.push(newUser);

    //         // Guardar los usuarios actualizados en el archivo JSON
    //         saveUsers(users);

    //         alert("Registro exitoso");
    //       }
    //     })
    //     .catch((error) => console.error("Error al cargar usuarios:", error));
    // }

    // function saveUsers(users) {
    //   // Guardar los usuarios en el archivo JSON
    //   fetch("users.json", {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(users),
    //   }).catch((error) => console.error("Error al guardar usuarios:", error));
    // }
  });

  pantallaRegistro.show();
  //Una vez registrado, mostrar la pantalla de equipos
  pantallaRegistro.getCreatedUser().then((registeredUser) => {
    // Guardar session storage
    saveUser(registeredUser);

    // Ocultar pantalla registro
    pantallaRegistro.hide();

    // Mostrar pantalla equipo
    const pantallaEquipos = new PantallaEquipos(
      document.querySelector("#equipos")
    );
    pantallaEquipos.show();

    // Ocultar a los shapes
    
    const shapes = document.querySelectorAll(".shape");
    shapes.forEach((shape) => {
      shape.style.display = "none";
    });
  });
}

initApp();
