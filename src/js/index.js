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

    // registerSubmit.addEventListener("click", register);

    function login() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      console.log(email, password);
      const user = dataUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // alert("Inicio de sesión exitoso");
        // Una vez Logrado, mostrar la pantalla de equipos
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
      } else {
        if (email === "" || password === "") {
          alert("Por favor, introduce un email y contraseña válidos.");
        } else {
          alert("Correo electrónico o contraseña incorrectos.");
        }
      }
    }

    //! FUNCION PARA REGISTRAR USUARIOS

    // function register() {
    //   const newemail = document.getElementById("emailInput").value;
    //   const newPassword = document.getElementById("passwordInput").value;

    //   // Verificar si el usuario ya está registrado
    //   const existingUser = dataUsers.find((u) => u.email === newemail);

    //   if (existingUser) {
    //     alert("El correo electrónico ya está registrado");
    //   } else {
    //     // Agregar el nuevo usuario
    //     const newUser = { email: newemail, password: newPassword };
    //     dataUsers.push(newUser);

    //     // Guardar los usuarios actualizados
    //     saveUsers(dataUsers);
    //     console.log(dataUsers);
    //     alert("Registro exitoso");
    //   }
    // }

    // function saveUsers(users) {
    //   console.log("hola", users);
    //   // Guardar los usuarios en el archivo JSON
    //   fetch(dataUsers, {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(users),
    //   }).catch((error) => console.error("Error al guardar usuarios:", error));
    // }
    // !.......................................................................................................................
  });

  //? Mostrar la pantalla de registro
  pantallaRegistro.show();
}

initApp();
