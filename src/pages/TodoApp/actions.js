export const META = 'META';
export const ADD_TODO = 'ADD_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_STORAGE = 'UPDATE_STORAGE';
export const INITIALIZE_TODOS = 'INITIALIZE_TODOS';

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});

export const initialize = () => ({
    type: INITIALIZE_TODOS,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id,
});

export const updateMeta = payload => ({
    type: META,
    payload,
});
