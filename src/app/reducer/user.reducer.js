
import { constant } from "../constant";


const initialState = {
	id: null,
	name: "",
	email: "",
	tel: ""
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case constant.setUser:
			return state = {
				 ...state,
				id: action.payload._id,
				name: action.payload.name,
				email: action.payload.email,
				tel: action.payload.tel
			};
        default:
            return state;
    }
};

export default userReducer;
