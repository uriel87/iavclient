
import { constant } from "../constant";


export function setMediaItem(mediaItem) {
    return {
        type: constant.setMediaItem,
        payload: mediaItem
    };
}

