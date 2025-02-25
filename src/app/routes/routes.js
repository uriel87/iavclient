import { Switch, Route } from "react-router-dom";
import React from "react";
import MediaItem from "../components/mediaItem/mediaItem";
import Home from "../components/home/home";
import NoPageFound from "../components/noPageFound/noPageFound.js";



const Routes = () => {
	
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/mediaItem/:id" exact component={MediaItem} />
			<Route component={NoPageFound} />
        </Switch>
    );
	
};

export default Routes;


