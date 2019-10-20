import { constant } from "../constant";


/* export function getUser(id) {
    return {
        type: constant.getUser,
        payload: id
    };
} */

export function setMediaItem(mediaItem) {
    return {
        type: constant.setMdiaItem,
        payload: mediaItem
    };
}

