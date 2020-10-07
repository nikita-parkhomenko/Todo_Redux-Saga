export const META = 'META';
export const ADD_TODO = 'ADD_TODO';
export const SAVE_TODOS = 'SAVE_TODOS';
export const INITIALIZE = 'INITIALIZE';
export const REMOVE_TODO = 'REMOVE_TODO';
export const FETCH_TODOS = 'FETCH_TODOS';

export const addTodo = (todo) => ({
    type: ADD_TODO,
    todo,
});

export const initialize = () => ({
    type: INITIALIZE,
});

export const updateMeta = payload => ({
    type: META,
    payload,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id,
});
