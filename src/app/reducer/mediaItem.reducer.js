
import { constant } from "../constant";
import { timeConversion } from "../helpers/helpers";


const initialState = {
	trackId: "",
	trackName: "",
	artistName: "",
	collectionName:"",
	country: "",
	previewUrl: "",
	artistViewUrl: "",
	collectionViewUrl:"",
	trackViewUrl:"",
	artworkUrl100:"",
	collectionPrice: null,
	trackPrice: null,
	releaseDate:"",
	trackTimeMillis: null,
	primaryGenreName:""
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
				previewUrl: action.payload.previewUrl,
				artistViewUrl: action.payload.artistViewUrl,
				collectionViewUrl: action.payload.collectionViewUrl,
				trackViewUrl: action.payload.trackViewUrl,
				artworkUrl100: action.payload.artworkUrl100,
				collectionPrice: action.payload.collectionPrice,
				trackPrice: action.payload.trackPrice,
				releaseDate:action.payload.releaseDate.substring(0,10),
				trackTimeMillis: timeConversion(action.payload.trackTimeMillis),
				primaryGenreName: action.payload.primaryGenreName
			};
        default:
            return state;
    }
};

export default MediaItemReducer;
