export function getStorage() {
    const todos = localStorage.getItem('state');
    return JSON.parse(todos);
}