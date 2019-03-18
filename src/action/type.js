import agent from "../util/agent";

import {
    TYPE_LIST,
    API_ERROR
} from "../constant/action-type";

const Type = {
    all: () => agent.get(`/types`)
};

export function listAll() {
    return dispatch => Type.all().then(payload => {
        if(payload.errors) return dispatch({"type": API_ERROR, "payload": payload.errors});
        return dispatch({"type": TYPE_LIST, "payload": payload.data});
    });
}
