import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import globalState from "./global";
import incidentState from "./incident";
import criticityState from "./criticity";
import typeState from "./type";
import statusState from "./status";

export default (history) => combineReducers({
    globalState,
    incidentState,
    criticityState,
    typeState,
    statusState,
    router: connectRouter(history)
});