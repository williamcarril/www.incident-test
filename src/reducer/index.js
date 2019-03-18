import { combineReducers } from 'redux';

import incidentReducer from "./incident";

export default combineReducers({
    incidentState: incidentReducer
});