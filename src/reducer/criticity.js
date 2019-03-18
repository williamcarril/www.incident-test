import { 
    CRITICITY_LIST,
} from "../constant/action-type";
  
const initialState = {
    "criticities": []
};

export default (state = initialState, action) => {

    switch(action.type) {
        case CRITICITY_LIST: return {
            ...state,
            "criticities": action.payload
        };
        default: return state;
    }
};