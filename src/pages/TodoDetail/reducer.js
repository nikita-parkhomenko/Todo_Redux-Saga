// local dependencies
import TYPE from './actions';

const initial = {
    todo: {},
    initialized: false,
    disabled: false,
    errorMessage: null,
}
export default function(state= initial, action) {
    switch (action.type) {
        case TYPE.META:
            return {
                ...state,
                ...action.payload,
            }

        case TYPE.CLEAR:
            return initial;

        default:
            return state;
    }
}
