export const getAll = (entity,data) => ({
    type: Actions.GET_ALL,
    entity,
    data
});

export const addNew = (entity,data) => ({
    type: Actions.ADD_NEW,
    entity,
    data
});

export const Actions = {
    GET_ALL: 'GET_ALL',
    ADD_NEW: 'ADD_NEW',
};
