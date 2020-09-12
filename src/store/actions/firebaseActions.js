import * as firebase from 'firebase';

export function initDb() {

    return dispach => {
        const db = firebase.database();

    }
}

export function writeRulesData(part, ruleId, rule, description, done = false) {
    return dispatch => {
        firebase.database().ref(part + '/' + ruleId).set({
            rule,
            description,
            done
        }).then(response => {
            console.log(response)
        }).catch(e => {
            console.log(e)
        });
    }
}