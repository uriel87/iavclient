import React from "react";
import MediaForm from "../mediaForm/mediaForm"
import LastSearchForm from "../lastSearchForm/lastSearchForm"

export const Home = (props) => {
	
	console.log("Home props", props);
	
    return (
        <div>
            <h1>Home</h1>
			<MediaForm />
			<LastSearchForm />
        </div>
    )
}

export default Home;