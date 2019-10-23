
import React from "react";
import { useSelector } from "react-redux";
import "./mediaItem.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const MediaItem = () => {
	
	const mediaItem = useSelector(state => state.mediaItem)
	
	console.log("in MediaItem", mediaItem)

	return (
		<div>
		<h1 className="media-header" >Song details</h1>
			<div className="container media-item">
			<div className="media-name-image">
				<img src={mediaItem.artworkUrl100} />
			</div>
			<div className="media-name-header">
				<div>Song: {mediaItem.trackName}</div>
				<div>Artist: {mediaItem.artistName}</div>
			</div>
			<div className="media-details-content">
				<div>Album: {mediaItem.collectionName}</div>
				<div>Country {mediaItem.country}</div>
				<div>Album price: {mediaItem.collectionPrice}</div>
				<div>Song price: {mediaItem.trackPrice}</div>
				<div>Country: {mediaItem.country}</div>
				<div>Release date: {mediaItem.releaseDate}</div>
				<div>Time: {mediaItem.trackTimeMillis}</div>
				<div>Genre: {mediaItem.primaryGenreName}</div>
				<div><a href={mediaItem.collectionViewUrl}>Album link to Itunes</a></div>
				<div><a href={mediaItem.artistViewUrl}>Artist link to Itunes</a></div>
			</div>
			<div className="media-details-audio">
				<audio controls>
					<source src={mediaItem.previewUrl} type="audio/MP3" />
				</audio>
			</div>
			</div>
		</div>
	)
	
}

export default MediaItem;

