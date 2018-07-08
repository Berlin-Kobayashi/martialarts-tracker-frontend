import {Actions} from "../actions";
import {entities} from "../const";
import _ from "lodash";

let initialEntity = entities[0];

let initialState = {
    data: {},
    selected: {
        entity: initialEntity,
        data: initialEntity.new(),
    },
};
entities.map((row) => initialState["data"][row.dialogName] = {});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_ALL:
            let resourceMap = {};
            action.data.forEach(data => {
                resourceMap[data.id] = data
            });

            state.data[action.entity] = resourceMap;

            return _.cloneDeep(state);
        case Actions.ADD:
        case Actions.UPDATE:
            state.data[action.entity][action.data.id] = action.data;

            return _.cloneDeep(state);
        case Actions.OPEN_UPDATE_DIALOG:
            state.selected.entity = action.entity;
            state.selected.data = action.data;

            return _.cloneDeep(state);
        case  Actions.CHANGE_NEW:
            state.selected.data = action.data;

            return _.cloneDeep(state);
        case  Actions.SELECT_ENTITY:
            state.selected.entity = action.entity;

            return _.cloneDeep(state);
        case  Actions.RESET_NEW:
            state.selected.data = state.selected.entity.new();

            return _.cloneDeep(state);
        case  Actions.REMOVE:
            delete(state.data[action.entity][action.id]);

            return _.cloneDeep(state);
        default:
            return state
    }
};

export default reducer
