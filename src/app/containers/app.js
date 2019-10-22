
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { setEmail } from "../actions/user.action";
import { setMediaItem } from "../actions/mediaItem.action";
import Routes from "../routes/routes";


export const App = () => {
    return (
        <Router>
            <div className="container"></div>
            <Routes />
        </Router>
    );
};

export default App;
