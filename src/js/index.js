import { PantallaRegistro } from "./registro";
import { PantallaEquipos } from "./equipos";
import { saveUser } from "./storage";

async function initApp() {
  //Mostrar formulario registro usuario
  const pantallaRegistro = new PantallaRegistro(
    document.querySelector(".container")
  );
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
  });
}

initApp();
