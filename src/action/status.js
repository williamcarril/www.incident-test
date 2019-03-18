import agent from "../util/agent";

import {
    STATUS_LIST,
    API_ERROR
} from "../constant/action-type";

const Status = {
    all: () => agent.get(`/statuses`)
};

export function listAll() {
    return dispatch => Status.all().then(payload => {
        if(payload.errors) {
            dispatch({"type": API_ERROR, "payload": payload.errors});
            throw new Error("API error: " + payload.errors.join("\n"));
        }
        return dispatch({"type": STATUS_LIST, "payload": payload.data});
    });
}
