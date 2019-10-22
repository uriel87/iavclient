
import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMediaItem } from "../../actions/mediaItem.action"
import mediaItem from"../mediaItem/mediaItem"


const MediaListItem = (props) => {

	const history = useHistory();
	const dispatch = useDispatch();
	
	function goToMediaItemPage(mediaItem) {
		dispatch(setMediaItem(mediaItem));
		history.push(`/mediaItem/${mediaItem.trackId}`);	
	}
	
	return (
		<div className="media-list-item" onClick={goToMediaItemPage.bind(this, props.mediaItem)} >
			<div className="media-list-item">
				<p>{props.mediaItem.artistName}</p>
				<p>{props.mediaItem.collectionArtistName}</p>
				<p>{props.mediaItem.trackName}</p>
			</div>
		</div>
	)
	
}

export default MediaListItem;

