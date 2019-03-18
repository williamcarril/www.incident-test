import { 
    API_ERROR,
    DISMISS_ALERT
} from "../constant/action-type";
  
const initialState = {
    "errors": []
};

export default (state = initialState, action) => {

    switch(action.type) {
        case API_ERROR: return {
            ...state,
            "errors": [...state.errors, ...action.payload]
        };
        case DISMISS_ALERT: return {
            ...state,
            "errors": [...state.errors].filter((v,i) => i !== action.payload)
        };
        default: return state;
    }
};