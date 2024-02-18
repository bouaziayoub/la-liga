export class Pantalla {
    constructor(pantalla) {
        this.pantalla = pantalla;
    }

    hide() {
        this.pantalla.classList.add('hide');
    }

    show() {
        this.pantalla.classList.remove('hide');
    }
}