import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux'
import MainContainer from "./containers/mainContainer";
import {createStore} from "redux";
import reducer from "./reducers/reducers";
import {entities} from "./const";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <MainContainer entities={entities}/>
    </Provider>,
    document.getElementById('app')
);
