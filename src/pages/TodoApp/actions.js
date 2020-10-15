const TYPE = ((prefix) => ({
    META: `${prefix}META `,
    ADD: `${prefix}ADD `,
    CLEAR: `${prefix}CLEAR `,
    REMOVE: `${prefix}REMOVE `,
    UPDATE: `${prefix}UPDATE `,
    INITIALIZE: `${prefix}INITIALIZE `,
}))('@todos/');

export default TYPE;

export const initialize = () => ({
    type: TYPE.INITIALIZE,
});

export const removeTodo = (id) => ({
    type: TYPE.REMOVE,
    id,
});

export const updateMeta = payload => ({
    type: TYPE.META,
    payload,
});
