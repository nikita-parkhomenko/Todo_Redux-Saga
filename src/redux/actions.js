export const META = 'META';
export const ADD_TODO = 'ADD_TODO';
export const INITIALIZE = 'INITIALIZE';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_STORAGE = 'UPDATE_STORAGE';

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});

export const initialize = () => ({
    type: INITIALIZE,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id,
});

export const updateMeta = payload => ({
    type: META,
    payload,
});
