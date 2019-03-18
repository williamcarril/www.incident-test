import { 
    INCIDENT_LIST,
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
        default: return state;
    }
};