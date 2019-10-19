import React from "react";
import { connect } from "react-redux";
// import { User } from "../components/users";
import { setName, setEmail } from "../actions/user.action";
import { BrowserRouter as Router } from "react-router-dom";
// import Nav from "../components/nav";
import Routes from "../routes/routes";
// import Signup from "../components/signUp";
// import Form from "../components/form";
import MediaForm from "../components/mediaForm/mediaForm.cmp"


export const App = props => {
    return (
        <Router>
            <div className="container">
                <h1>hello world</h1>
            </div>
            <hr />
            <div>
                <MediaForm />
                {/* <Nav /> */}
            </div>
            <Routes />
            {/* <Form /> */}
        </Router>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setName: name => {
            dispatch(setName(name));
        },
        setEmail: email => {
            dispatch(setEmail(email));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
