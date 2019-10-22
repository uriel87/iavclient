
import React from "react";
import { useSelector } from "react-redux";
import "../mediaListItem/mediaListItem.css"


const MediaItem = ({ match }, props) => {
	
	const mediaItem = useSelector(state => state.mediaItem)
	
	return (
		<div className="media-list-item">
			<h3>The ID is {mediaItem.trackId}</h3>
			<h3>The ID is {mediaItem.trackName}</h3>
			<h3>The ID is {mediaItem.artistName}</h3>
			<h3>The ID is {mediaItem.collectionName}</h3>
			<h3>The ID is {mediaItem.country}</h3>
			<audio controls>
				<source src={mediaItem.previewUrl} type="audio/MP3" />
			</audio>
		</div>
	)
	
}

export default MediaItem;

