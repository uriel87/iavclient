
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMediaItem } from "../../actions/mediaItem.action"
import mediaItem from"../mediaItem/mediaItem"
import 'bootstrap/dist/css/bootstrap.min.css';
import './mediaListItem.css';





const MediaListItem = (props) => {

	const history = useHistory();
	const dispatch = useDispatch();
	
	function goToMediaItemPage(mediaItem) {
		dispatch(setMediaItem(mediaItem));
		history.push(`/mediaItem/${mediaItem.trackId}`);	
	}
	
	return (
		<div className="media-list-item-container">
			<div className="media-list-item-artworkUrl60">
				<img src={props.mediaItem.artworkUrl60} />
			</div> 
			<div className="media-list-item-trackName">{props.mediaItem.trackName}</div>
			<div className="media-list-item-artistName">{props.mediaItem.artistName}</div>
			<div className="media-list-item-collectionName">{props.mediaItem.collectionName}</div>
			<div className="media-list-item-releaseDate">{props.mediaItem.releaseDate.substring(0, 4)}</div>
			<button className="btn btn-info media-list-item-btn" onClick={goToMediaItemPage.bind(this, props.mediaItem)} >More details</button>
		</div>
	)
	
}

export default MediaListItem;

