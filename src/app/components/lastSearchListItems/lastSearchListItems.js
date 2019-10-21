
import React from "react";
import { Link } from "react-router-dom";
import "./lastSearchListItems.css"



const LastSearchListItems = (props) => {
	
	console.log("LastSearchListItems props", props.lastSearch);
	
 	return (
		<div className="container">
			<div className="last-serach-media-list-item">
				<p className="last-serach-media-item">{props.lastSearch}</p>
			</div>
		</div>
	) 
	
}

export default LastSearchListItems;