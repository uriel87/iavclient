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
			state = {
				 ...state,
				 state: action.paylod
			};
            break;
        case constant.getUser:
            //return {
            // ...state,
            // users: [...state.users, action.newUser]

            // state = {
            //     ...state,
            //     state: action.paylod
            //};
            //}
            break;
        default:
            return state;
    }
    return state;
};

export default userReducer;
