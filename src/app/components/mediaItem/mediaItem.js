
import React from "react";
import "../mediaListItem/mediaListItem.css"
import { useState } from "react";


const MediaItem = ({ match }, props) => {
	
	console.log("MediaItem match", match);
	console.log("MediaItem props", props);
	const[mediaList, setMediaList] = useState(match)
	
	return (
		<div className="media-list-item">
			<h3>The ID is {mediaList.params.id}</h3>
		</div>
	)
	
}

export default MediaItem;


/* 			<h3>{props.mediaItem.collectionArtistName}</h3>
			<h3>{props.mediaItem.trackName}</h3>
			<audio controls>
				<source src={props.mediaItem.previewUrl} type="audio/mpeg"/>
			</audio> */