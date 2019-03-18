import agent from "../util/agent";

import {
    INCIDENT_LIST,
    INCIDENT_CREATED,
    INCIDENT_UPDATED,
    INCIDENT_DELETED,
    API_ERROR
} from "../constant/action-type";

const Incident = {
    all: () => agent.get(`/incidents`),
    create: incident => agent.post('/incidents', { ...incident }),
    update: incident => agent.put(`/incidents/${incident.id}`, { ...incident }),
    get: id => agent.get(`/incidents/${id}`),
    del: id => agent.del(`/incidents/${id}`)
};

export function listAll() {
    return dispatch => Incident.all().then(payload => {
        if(payload.errors) {
            dispatch({"type": API_ERROR, "payload": payload.errors});
            throw new Error("API error: " + payload.errors.join("\n"));
        }
        return dispatch({"type": INCIDENT_LIST, "payload": payload.data});
    });
}

export function newModel(data) {
    return dispatch => Incident.create(data).then(payload => {
        if(payload.errors) {
            dispatch({"type": API_ERROR, "payload": payload.errors});
            throw new Error("API error: " + payload.errors.join("\n"));
        }
        return dispatch({"type": INCIDENT_CREATED, "payload": payload.data});
    });
}

export function editModel(data) {
    return dispatch => Incident.update(data).then(payload => {
        if(payload.errors) {
            dispatch({"type": API_ERROR, "payload": payload.errors});
            throw new Error("API error: " + payload.errors.join("\n"));
        }
        return dispatch({"type": INCIDENT_UPDATED, "payload": payload.data});
    });
}

export function deleteModel(data) {
    return dispatch => Incident.del(data.id).then(payload => {
        if(payload.errors) {
            dispatch({"type": API_ERROR, "payload": payload.errors});
            throw new Error("API error: " + payload.errors.join("\n"));
        }
        return dispatch({"type": INCIDENT_DELETED, "payload": data});
    });
}