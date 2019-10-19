// import Song from "./components/song";
// import SongsList from "./components/songsList";
// import About from "./components/about";
// import Home from "./components/home";
import { Switch, Route } from "react-router-dom";
import React from "react";
import MediaList from "../components/mediaList/mediaList";
import Home from "../components/home/home";


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/about" component={About} /> */}
            <Route path="/mediaList" exact component={MediaList} />
            {/* <Route path="/mediaList/:id" exact component={Song} /> */}
        </Switch>
    );
};

export default Routes;

