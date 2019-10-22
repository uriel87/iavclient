
import React from "react";
import "./lastSearchListItems.css"


const LastSearchListItems = (props) => {
 	return (
		<div className="container">
			<div className="last-serach-media-list-item">
				<p className="last-serach-media-item">{props.lastSearch}</p>
			</div>
		</div>
	) 
}

export default LastSearchListItems;