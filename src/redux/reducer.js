import { META } from './actions';

const initial_state = {
    todos: [],
    initialized: false,
};

const reducer = (state=initial_state, action) => {
    switch (action.type) {
            case META:
                return {
                    ...state,
                    ...action.payload,
                }

        default:
            return state;
    }
}

export default reducer;