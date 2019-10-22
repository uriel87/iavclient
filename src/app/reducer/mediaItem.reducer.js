
import { constant } from "../constant";


const initialState = {
	trackId: "",
	trackName: "",
	artistName: "",
	collectionName:"",
	country: "",
	previewUrl: ""
};


const MediaItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.setMediaItem:
			return state = {
				...state,
				trackId: action.payload.trackId,
				trackName: action.payload.trackName,
				artistName: action.payload.artistName,
				collectionName: action.payload.collectionName,
				country: action.payload.country,
				previewUrl: action.payload.previewUrl
			};
        default:
            return state;
    }
};

export default MediaItemReducer;
