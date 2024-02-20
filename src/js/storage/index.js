export function saveUser(user) {
    window.localStorage.setItem('userId', user.id);
}

export function loginUser() {
    window.localStorage.setItem('login', true);
}

export function logout() {
    window.localStorage.removeItem('login');
    window.localStorage.removeItem('userId');
}