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

export const openUpdateDialog = (entity, data) => ({
    type: Actions.OPEN_UPDATE_DIALOG,
    entity,
    data
});

export const changeNew = data => ({
    type: Actions.CHANGE_NEW,
    data
});

export const Actions = {
    GET_ALL: 'GET_ALL',
    ADD: 'ADD',
    UPDATE: 'UPDATE',
    OPEN_UPDATE_DIALOG: 'OPEN_UPDATE_DIALOG',
    CHANGE_NEW: 'CHANGE_NEW',
};
