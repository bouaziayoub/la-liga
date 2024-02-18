import { logos } from "../equipos/api";
export class PantallaEquipos{
    constructor(pantallaEquipos){
        
        this.hide();
        this.show();
    }
    hide() {
        this.PantallaEquipos.classList.add('hide');
    }
    
    show() {
        this.PantallaEquipos.classList.remove('hide');
    }
};

