
import React from "react";
import "../mediaListItem/mediaListItem.css"



const MediaListItem = (props) => {
	
	//console.log("MediaListItem props", props);
	
	return (
		<div className="media-list-item">
			<h3>{props.mediaItem.artistName}</h3>
			<h3>{props.mediaItem.collectionArtistName}</h3>
			<h3>{props.mediaItem.trackName}</h3>
		</div>
	)
	
}

export default MediaListItem;