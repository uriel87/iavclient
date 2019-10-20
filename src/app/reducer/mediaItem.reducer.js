import { constant } from "../constant";


const initialState = {
	id: "q234123",
	name: "szdfasdf"
};

const MediaItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.setMdiaItem:
			state = {
				...state,
				mediaItem: action.paylod
			};
            break;
        default:
            return state;
    }
    return state;
};

export default MediaItemReducer;
