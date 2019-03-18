import agent from "../util/agent";

import {
    INCIDENT_LIST,
    FETCH_ERROR
} from "../constant/action-type";

const Incident = {
    all: () => agent.get(`/incidents`),
    del: id => agent.del(`/incidents/${id}`),
    get: id => agent.get(`/incidents/${id}`),
    update: incident => agent.put(`/incidents/${incident.id}`, { "incident": incident }),
    create: incident => agent.post('/incidents', { incident })
};

export function listAll(dispatch) {
    return function(dispatch) {
        return Incident.all().then(payload => {
            if(payload.errors) return dispatch({"type": FETCH_ERROR });
            return dispatch({ "type": INCIDENT_LIST, "payload": payload.data });
        });
    };
}