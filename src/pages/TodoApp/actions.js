const TYPE = ((prefix) => ({
    META: `${prefix}META`,
    ADD: `${prefix}ADD`,
    CLEAR: `${prefix}CLEAR`,
    REMOVE: `${prefix}REMOVE`,
    UPDATE: `${prefix}UPDATE`,
    INITIALIZE: `${prefix}INITIALIZE`,
}))('@todos/');

export default TYPE;
