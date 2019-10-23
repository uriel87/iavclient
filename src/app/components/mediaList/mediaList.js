
import React from "react";
import { useState, useEffect } from "react";
import MediaListItem from "../mediaListItem/mediaListItem"
import "./mediaList.css"



const MediaList = (props) => {

	const [mediaList, setMediaList] = useState(props.mediaList);

	useEffect(() => {
		setMediaList(props.mediaList);
	}, [props]);
  
  return (
	<div className="container flex-media-list">
		<div>
			{ mediaList.map((media, index) => (
				<MediaListItem key={index}  mediaItem={media} />
			))}
		</div>
	</div>
  );
};

export default MediaList;

