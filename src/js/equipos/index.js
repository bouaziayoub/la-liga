import { Pantalla } from "../Pantalla";
import { getInfoPlayer, getPlayers, getTeams } from "./api";

export class PantallaEquipos extends Pantalla {
  constructor(pantallaEquipos) {
    super(pantallaEquipos);
    this.columnas = this.pantalla.querySelectorAll(".columna");

    this.showTeams();
  }

  async showTeams() {
    // Recuperar equipos
    const teams = await getTeams();

    // Renderizar nombre y logo columna izquierda
    const teamsListElement = this.columnas[0].querySelector("ul");
    teamsListElement.innerHTML = "";

    teams.forEach((teamInfo) => {
      const teamElement = document.createElement("li");
      teamElement.id = teamInfo.team.id;

      // Creamos nombre
      const teamNameElement = document.createElement("h4");
      teamNameElement.innerText = teamInfo.team.name;
      teamElement.appendChild(teamNameElement);

      // Creamos logo
      const teamLogoElement = document.createElement("img");
      teamLogoElement.src = teamInfo.team.logo;
      teamElement.appendChild(teamLogoElement);

      teamsListElement.appendChild(teamElement);
    });

    // Escuchar evento click
    teamsListElement.addEventListener("click", (event) => {
      const teamElement = event.target.matches("li")
        ? event.target
        : event.target.closest("li");

      // Mostrar jugadores equipo columna central
      this.showTeamPlayers(teamElement.id);
    });
  }

  async showTeamPlayers(team) {
    // Recuperar informacion player
    const players = await getPlayers(team);

    // Renderizar jugadores del equipo

    const playersListElement = this.columnas[1].querySelector("ul");
    playersListElement.innerHTML = "";

    players.forEach((playerInfo) => {
      const playerElement = document.createElement("li");
      playerElement.id = playerInfo.player.id;

      // Creamos nombre
      const playerNameElement = document.createElement("h4");
      playerNameElement.innerText = playerInfo.player.name;
      playerElement.appendChild(playerNameElement);
      playersListElement.appendChild(playerElement);
    });
    // Escuchar evento click
    playersListElement.addEventListener("click", (event) => {
      const playerElement = event.target.matches("li")
        ? event.target
        : event.target.closest("li");
      // Mostrar informacion jugar columna derecha
      this.showPlayerInfo(playerElement.id);
      console.log("Player ID: " + playerElement.id);
    });
  }

  async showPlayerInfo(id) {
    // Recuperar informacion jugador
    const player = await getInfoPlayer(id);
    console.log(player[0].player.name);

    // Renderizar jugadores del equipo

    const playerListElement = this.columnas[2].querySelector("ul");
    playerListElement.innerHTML = "";

    const playerElement = document.createElement("p");
    playerElement.id = player[0].player.id;

    // Creamos photo
    const playerPhotoElement = document.createElement("img");
    playerPhotoElement.src = player[0].player.photo;
    playerElement.appendChild(playerPhotoElement);

    // Creamos nombre
    const playerNameElement = document.createElement("h4");
    playerNameElement.innerText = player[0].player.name;
    playerElement.appendChild(playerNameElement);

    // Creamos edad
    const playerAgeElement = document.createElement("h5");
    playerAgeElement.innerText = player[0].player.age;
    playerElement.appendChild(playerAgeElement);

    // Añadir favoritos
    // // cuando se pulsa en "agregar a favoritos"
    // document.getElementById("agregar-favoritos").addEventListener("click", function(e) {

    //     // hacemos que no se ejecute el enlace
    //     e.preventDefault();

    //     // leemos los datos clave del producto y los guardamos en un objeto
    //     var datos = {
    //     id: document.getElementById("producto-id").value,
    //     nombre: document.getElementById("producto-nombre").textContent,
    //     url: document.location.href
    //     };

    //     // leemos los favoritos del localStorage
    //     var favoritos = localStorage.getItem("favoritos") || "[]";
    //     favoritos = JSON.parse(favoritos);

    //     // buscamos el producto en la lista de favoritos
    //     var posLista = favoritos.findIndex(function(e) { return e.id == datos.id; });
    //     if (posLista > -1) {
    //     // si está, lo quitamos
    //     favoritos.splice(posLista, 1);
    //     } else {
    //     // si no está, lo añadimos
    //     favoritos.push(datos);
    //     }

    //     // guardamos la lista de favoritos
    //     localStorage.setItem("favoritos", JSON.stringify(favoritos));

    playerListElement.appendChild(playerElement);
  }
}
