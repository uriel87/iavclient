import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MediaForm from "../mediaForm/mediaForm"
import LastSearchForm from "../lastSearchForm/lastSearchForm"
import { envRoutes, userRoutes } from "../../routes/constant.routes";
import { constant } from "../../constant";
import "./home.css"


export const Home = ( { user } ) => {
	
	console.log("Home props", user);
	
	const userProps = useSelector(state => state.user);
	const dispatch = useDispatch();
	
	 useEffect(() => {
		getUser("firstuser@dd.com");
	}, []);
	
	const getUser = async (userEmail) => {
		console.log("params get user", userEmail);
		console.log("url get user", envRoutes.envProduction + userRoutes.getUser);
		await axios.post(envRoutes.envProduction + userRoutes.getUser, {
			params: {
				email: userEmail
			}
		})
		.then(response => {
			console.log("user.reducer get user", response)
			dispatch({ type: constant.setUser, payload: response.data })
		})
		.catch(err => {
			//dispatch({ type: payload.FAILURE })
		})
	}
	
    return (
        <div className="container home-text" >
            <h1 className="home-title" >Home</h1>
			<h2 className="user-name-title"> Hello {user} </h2>
			<MediaForm />
			<LastSearchForm />
        </div>
    )
}

export default Home;