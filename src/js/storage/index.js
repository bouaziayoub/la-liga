export function saveUser(user) {
    window.localStorage.setItem('userId', user.id);
}