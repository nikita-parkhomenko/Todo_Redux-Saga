export function getStorage() {
    const todos = localStorage.getItem('state');
    return JSON.parse(todos);
}

export function setStorage(state) {
    localStorage.setItem('state', JSON.stringify(state));
}
