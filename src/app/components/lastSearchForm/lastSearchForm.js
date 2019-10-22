
import React from "react";
import { useState } from "react";
import axios from "axios";
import { userRoutes, envRoutes } from "../../routes/constant.routes"
import Loading from "../loading"
import LastSearchList from "../lastSearchList/lastSearchList"
import "./lastSearchForm.css"


const LastSearchForm = () => {

	const [ lastSearchItems, setLastSearchItems ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ lastSerachUrlReq, setLastSerachUrlReq ] = useState(envRoutes.envProduction + userRoutes.getLastMediaList);

	
    function submit(event) {
		event.preventDefault();
		getLastSearchItems(lastSerachUrlReq)
    }
	
	const getLastSearchItems = async () => {
		setIsLoading(true);
		await axios
		.post(lastSerachUrlReq, {
			params: {
				email: "firstUser@dd.com"
			}
		})
		.then(response => {
			setLastSearchItems(response.data[0].lastSearch);
			setIsLoading(false);
		}).catch(error => {
			console.log(error);
			setIsLoading(false);
		});
	};
	

    return (
        <div className="container lastSearchForm-position" >
            <form onSubmit={submit} noValidate className="last-search-form">
                <label className="last-search-label">Click to get the last search Items</label>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
			{isLoading ? <Loading /> : <LastSearchList searchList = {lastSearchItems}/>}
        </div>
    )

}


export default LastSearchForm;		
