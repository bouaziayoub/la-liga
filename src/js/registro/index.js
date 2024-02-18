
import { Pantalla } from '../Pantalla';
import { createUser } from './api';
import { validateInput } from './validator';

export class PantallaRegistro extends Pantalla {
    constructor(pantallaRegistro) {
        super(pantallaRegistro);
      
        this.formulario = this.pantalla.querySelector('form');
        this.registroErrorMessage = this.pantalla.querySelector('#registroErrorMessage');
        this.createdUser = this.registerSubmit();
        this.registerValidation();
    }

    getCreatedUser() {
        return this.createdUser;
    }

    showErrorMessage(message) {
        this.registroErrorMessage.innerText = message;
    }

    registerValidation() {
        const elements = this.formulario.elements;

        [...elements].filter(element => element.nodeName === 'INPUT').forEach(input => {
            input.addEventListener('change', (event) => {
                const input = event.target;
                const isInputValid = validateInput(input);

                if (!isInputValid && input.value !== '') {
                    input.classList.add('formularioIncorrecto');
                    input.classList.remove('formularioCorrecto');
                } else {
                    input.classList.add('formularioCorrecto');
                    input.classList.remove('formularioIncorrecto');
                }
            });
        });
    }

    registerSubmit() {
        return new Promise(resolve => {
            this.formulario.addEventListener('submit', async(event) => {
                event.preventDefault();
    
                //Recuperar campos formulario
                const user = {};
    
                const elements = this.formulario.elements;
    
                [...elements].filter(element => element.nodeName === 'INPUT').forEach(input => {
                    user[input.name] = input.value;
                });
            
                // Crear usuario
                const response = await createUser(user);
    
                if (response.success) {
                    resolve(response.data);
                } else {
                    this.showErrorMessage(response.data);
                }
            });
        });
    }

    getSesionStorage(){
        sessionStorage.getItem('');
    }
}