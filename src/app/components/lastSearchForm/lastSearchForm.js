
import React from "react";
import { useState } from "react";
import axios from "axios";
import { mediaRoutes, mediaType, userRoutes, envRoutes } from "../../routes/constant.routes"
import Loading from "../loading"



const LastSearchForm = () => {

	const [ lastSearchItems, setLastSearchItems ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ lastSerachUrlReq, setLastSerachUrlReq ] = useState(envRoutes.envProduction + userRoutes.getLastMediaList);

	
    function submit(event) {
		event.preventDefault();
		getLastSearchItems(lastSerachUrlReq)

    }
	
	const getLastSearchItems = async () => {
		console.log("in getLastSearchItems", lastSerachUrlReq)
		setIsLoading(true);
		await axios
		.post(lastSerachUrlReq, null, {
			params: {
				email: "user@dd.com"
			}
		})
		.then(response => {
			console.log("getLastSearchItems", response.data)
			setLastSearchItems(response.data.results);
			setIsLoading(false);
		}).catch(error => {
			console.log(error);
			setIsLoading(false);
		});
	};
	

    return (
        <div>
            <form onSubmit={submit} noValidate>
                <label>Last search Items</label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}


export default LastSearchForm;		
