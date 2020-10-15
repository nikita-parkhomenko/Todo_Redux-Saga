import TYPE from './actions';

export const initial = {
    todos: [],
    initialized: false,
    disable: false,
};

export default function(state=initial, action) {
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
