import agent from "../util/agent";

import {
    CRITICITY_LIST,
    API_ERROR
} from "../constant/action-type";

const Criticity = {
    all: () => agent.get(`/criticities`)
};

export function listAll() {
    return dispatch => Criticity.all().then(payload => {
        if(payload.errors) {
            dispatch({"type": API_ERROR, "payload": payload.errors});
            throw new Error("API error: " + payload.errors.join("\n"));
        }
        return dispatch({"type": CRITICITY_LIST, "payload": payload.data});
    });
}
