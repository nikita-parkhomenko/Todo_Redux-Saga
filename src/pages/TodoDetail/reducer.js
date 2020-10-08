import { SAVE_META, CLEAR_TODO } from '../TodoDetail/actions';

const initial_state = {
    todo: {},
    initialized: false,
}

const todoReducer = (state=initial_state, action) => {
    switch (action.type) {
        case SAVE_META:
            return {
                ...state,
                ...action.payload,
            }

        case CLEAR_TODO:
            return initial_state;
            
        default:
            return state;
    }
}

export default todoReducer;
