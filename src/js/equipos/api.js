const API_KEY = 'cc63d9e4a714db64119eb54658782c9d';
const API_URL = 'https://v3.football.api-sports.io';
const SEASON = '2022';
const LEAGUE = '140';


// Recuperar Teams en

export async function getTeams() {
    // if you want use it by internet API
    const response = await fetch(`${API_URL}/teams?league=${LEAGUE}&country=spain&season=${SEASON}`, {
        method: 'GET',
        headers: {
            'x-apisports-key': API_KEY
        }
    });

    // const response = await fetch('../json/teams.json');

    const json = await response.json();
    
    return json.response;
}

// Recuperar Players en API

export async function getPlayers(teamId) {
    
    const response = await fetch(`${API_URL}/players?league=${LEAGUE}&season=${SEASON}&team=${teamId}`, {
        method: 'GET',
        headers: {
            'x-apisports-key': API_KEY
        }
    });

    // const response = await fetch('../json/players.json');

    const json = await response.json();

    console.log(json.response);
    return json.response;
}

export async function getInfoPlayer(playerId) {
    const response = await fetch(`${API_URL}/players?id=${playerId}&league=${LEAGUE}&season=${SEASON}`, {
        method: 'GET',
        headers: {
            'x-apisports-key': API_KEY
        }
    });

    // const response = await fetch('../json/players.json');

    const json = await response.json();

    // const jugador = json.response.find(jug => jug.player.id === +playerid);
    // console.log(jugador);
    // console.log(json.response);
    // return jugador;
    return json.response;
}

// export async function getTeamInfo(teamId) {
//     const response = await fetch(`${API_URL}/teams?id=${teamId}&league=${LEAGUE}&season=${SEASON}`, {
//         method: 'GET',
//         headers: {
//             'x-apisports-key': API_KEY
//         }
//     });

//     const json = await response.json();

//     return json.response;
// }

/*
export async function logos(){
    try {
        const response = await fetch('https://v3.football.api-sports.io/teams?league=140&season=2020&country=spain', {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": key,
            },
        });

    const key = "a81bb8cf171f80335b118555c6538428";
    const div = document.getElementById('result');

    const logosEquipos = async () => {
        const data = await response.json();

        data.response.forEach(function (valor) {
            console.log(valor.team.name);
            let idEquipo = valor.team.id;
                div.insertAdjacentHTML('beforeend', 
                <img src="https://media.api-sports.io/football/teams/${idEquipo}.png">
                <p>${valor.team.name}</p></img>
            )
        });
    }

    } catch (error) {
        console.log(error);
    }
    logosEquipos();
}*/