import {Actions} from "../actions";
import {entities} from "../const";
import _ from "lodash";

let initialState = {};
entities.map((row) => initialState[row.dialogName] = {});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_ALL:
            let resourceMap = {};
            action.data.forEach(data => {
                resourceMap[data.id] = data
            });

            state[action.entity] = resourceMap;

            return _.cloneDeep(state);
        case Actions.ADD:
        case Actions.UPDATE:
            state[action.entity][action.data.id] = action.data;

            return  _.cloneDeep(state);
        default:
            return state
    }
};

export default reducer