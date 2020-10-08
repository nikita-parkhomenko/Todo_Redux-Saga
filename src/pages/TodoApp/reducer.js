import { META, CLEAR_TODOS } from './actions';

const initial_state = {
    todos: [],
    initialized: false,
};

const todosReducer = (state=initial_state, action) => {
    switch (action.type) {
            case META:
                return {
                    ...state,
                    ...action.payload,
                }

            case CLEAR_TODOS:
                return initial_state;

        default:
            return state;
    }
}

export default todosReducer;