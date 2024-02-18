const expresiones = {
    name: /^[A-Za-z ]+$/,
    surname: /^[A-Za-z ]+$/,
    email: /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    password: /^[A-Za-z0-9]{5}$/,
};

export function validateInput(input) {
    switch (input.name) {
        case 'name':
        case 'surname':
        case 'email':
        case 'password':
            return expresiones[input.name].test(input.value);
        default:
            return false;
    }
}
