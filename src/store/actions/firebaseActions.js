import firebase from 'firebase/app';
import 'firebase/database';
import {FB_CONNECT_ERROR, FB_CONNECT_START, FB_CONNECT_SUCCESS} from "./actions";

export function getRulesData(type) {

    return dispatch => {
        dispatch(firebaseConnectStart());
        const rules = firebase.database().ref('rules').child(type + 'Rules');

        rules.on('value', (response) => {

            dispatch(firebaseConnectSuccess(type, response.val()))
        });

    }
}

export function setRulesData({type, rule, done = false}) {
    return dispatch => {
        if (rule) {
            dispatch(firebaseConnectStart());
            const rules = firebase.database().ref('rules').child(type + 'Rules');
            const ruleRef = rules.push();
            ruleRef.set({
                rule,
                done
            }, (error) => {
                if (error) {
                    dispatch(firebaseConnectError());
                    console.log(error)
                } else {
                    dispatch(firebaseConnectSuccess());
                    console.log('save success')
                }
            })

        }
    }
}

function firebaseConnectStart() {
    return {
        type: FB_CONNECT_START
    }
}

function firebaseConnectSuccess(type = null, data = null) {
    return {
        type: FB_CONNECT_SUCCESS,
        payload: {
            type,
            data
        }
    }
}

function firebaseConnectError() {
    return {
        type: FB_CONNECT_ERROR
    }
}

