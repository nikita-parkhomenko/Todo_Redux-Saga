const TYPE = ((prefix) => ({
    META: `${prefix}META`,
    CLEAR: `${prefix}CLEAR`,
    UPDATE: `${prefix}UPDATE`,
    INITIALIZE: `${prefix}INITIALIZE`,
    TOGGLE_COMPLETED: `${prefix}TOGGLE_COMPLETED`,
}))('@todo/');

export default TYPE;
