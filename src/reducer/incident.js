import { 
    INCIDENT_LIST,
    INCIDENT_CREATED,
    INCIDENT_UPDATED,
    INCIDENT_DELETED
} from "../constant/action-type";
  
const initialState = {
    "incidents": []
};

export default (state = initialState, action) => {

    switch(action.type) {
        case INCIDENT_LIST: return {
            ...state,
            "incidents": action.payload
        };
        case INCIDENT_CREATED: return {
            ...state,
            "incidents": [...state.incidents, action.payload]
        };
        case INCIDENT_UPDATED: return {
            ...state,
            "incidents": [...state.incidents].map(e => e.id == action.payload.id ? action.payload : e)
        };
        case INCIDENT_DELETED: return {
            ...state,
            "incidents": [...state.incidents].filter(e => e.id !== action.payload.id)
        };
        default: return state;
    }
};