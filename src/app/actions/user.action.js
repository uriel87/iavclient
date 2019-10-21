import { constant } from "../constant";


export function getUser(user) {
    return {
        type: constant.getUser,
        payload: user
    };
}

export function addUser(user) {
    return {
        type: constant.addUser,
        payload: user
    };
}

export function setName(name) {
    return {
        type: constant.setUserName,
        payload: name
    };
}

export function setEmail(email) {
    return {
        type: constant.setUserEmail,
        payload: email
    };
}
