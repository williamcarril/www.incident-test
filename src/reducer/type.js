import { 
    TYPE_LIST,
} from "../constant/action-type";
  
const initialState = {
    "types": []
};

export default (state = initialState, action) => {

    switch(action.type) {
        case TYPE_LIST: return {
            ...state,
            "types": action.payload
        };
        default: return state;
    }
};