export const getAll = (entity, data) => ({
    type: Actions.GET_ALL,
    entity,
    data
});

export const addNew = (entity, data) => ({
    type: Actions.ADD,
    entity,
    data
});

export const update = (entity, data) => ({
    type: Actions.UPDATE,
    entity,
    data
});

export const Actions = {
    GET_ALL: 'GET_ALL',
    ADD: 'ADD',
    UPDATE: 'UPDATE'
};
