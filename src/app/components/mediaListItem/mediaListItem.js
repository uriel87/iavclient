
import React from "react";
import { Link } from "react-router-dom";
import "../mediaListItem/mediaListItem.css"
import mediaItem from"../mediaItem/mediaItem"



const MediaListItem = (props) => {
	
	//console.log("MediaListItem props", props);
	
	return (
		<div className="media-list-item">
			<Link to={`/mediaItem/${props.mediaItem.trackId}`}>	
				<div className="media-list-item">
					<p>{props.mediaItem.artistName}</p>
					<p>{props.mediaItem.collectionArtistName}</p>
					<p>{props.mediaItem.trackName}</p>
				</div>
			</Link>
		</div>
	)
	
}

export default MediaListItem;

/* 					<mediaItem mediaItem={mediaItem} >{props.mediaItem.artistName}</mediaItem>
 */