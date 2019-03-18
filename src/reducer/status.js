import { 
    STATUS_LIST,
} from "../constant/action-type";
  
const initialState = {
    "statuses": []
};

export default (state = initialState, action) => {

    switch(action.type) {
        case STATUS_LIST: return {
            ...state,
            "statuses": action.payload
        };
        default: return state;
    }
};