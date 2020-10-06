import { ADD_TODO, SAVE_TODOS } from './actions';

const initial_state = {
    todos: [],
};

const reducer = (state=initial_state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [action.todo, ...state.todos],
            }

        case SAVE_TODOS:
            return {
                ...state,
                todos: [...action.todos, ...state.todos],
            }

        default:
            return state;
    }
}


export default reducer;