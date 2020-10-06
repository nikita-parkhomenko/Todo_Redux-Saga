export const ADD_TODO = 'ADD_TODO';
export const SAVE_TODOS = 'SAVE_TODOS';
export const FETCH_TODOS = 'FETCH_TODOS';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    todo,
});

export const saveTodos = (todos) => ({
    type: SAVE_TODOS,
    todos,
});

export const fetchTodos = () => ({
    type: FETCH_TODOS,
});

