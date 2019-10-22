
import { constant } from "../constant";


export function setUser(user) {
    return {
        type: constant.setUser,
        payload: user
    };
}
