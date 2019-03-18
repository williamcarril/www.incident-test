
import {
    DISMISS_ALERT
} from "../constant/action-type";

export function dismissAlert(index) {
    return dispatch => dispatch({"type": DISMISS_ALERT, "payload": index});
}