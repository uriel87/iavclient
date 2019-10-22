
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import user from "./reducer/user.reducer";
import mediaItem from "./reducer/mediaItem.reducer";


export default createStore(
    combineReducers({
        user,
		mediaItem
    })
);
