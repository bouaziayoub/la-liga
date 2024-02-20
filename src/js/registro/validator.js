const expresiones = {
    email: /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

export function validateInput(input) {
    switch (input.name) {
        case 'email':
        case 'password':
            return expresiones[input.name].test(input.value);
        default:
            return false;
    }
}
