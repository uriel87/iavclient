import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { setName, setEmail } from "../actions/user.action";
import { setMediaItem } from "../actions/mediaItem.action";
import Routes from "../routes/routes";


export const App = props => {
	
	console.log("App props", props);
	
    return (
        <Router props={props}>
            <div className="container"></div>
            <Routes />
        </Router>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
		mediaItem: state.mediaItem
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setName: name => {
            dispatch(setName(name));
        },
        setEmail: email => {
            dispatch(setEmail(email));
        },
		setMediaItem: mediaItem => {
            dispatch(setMediaItem(mediaItem));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
