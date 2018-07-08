import {Actions} from "../actions";
import {entities} from "../const";
import _ from "lodash";

let initialState = {
    data: {},
    selected: {
        entity: {},
        data: {},
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
        default:
            return state
    }
};

export default reducer
