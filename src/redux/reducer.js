import { ADD_TODO, META, REMOVE_TODO } from './actions';

const initial_state = {
    todos: [],
    initialized: false,
};

const reducer = (state=initial_state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [action.todo, ...state.todos],
            }
        
            case META:
                return {
                    ...state,
                    ...action.payload,
                }

            case REMOVE_TODO:
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.id)
                }

        default:
            return state;
    }
}

export default reducer;