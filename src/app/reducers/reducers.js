import {Actions} from "../actions";
import {entities} from "../const";

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

            return state;
        case Actions.ADD_NEW:
            state[action.entity][action.data.id] = action.data;

            return state;
        default:
            return state
    }
};

export default reducer
