import React from "react";
import { useState, useEffect } from "react";
import MediaListItem from "../mediaListItem/mediaListItem"


const MediaList = (props) => {

	const [mediaList, setMediaList] = useState(props.mediaList);

	console.log("props MediaList render", props.mediaList)
  
	useEffect(() => {
		setMediaList(props.mediaList);
	}, [props]);
  
  return (
    <div className="container">
		{ mediaList.map((media, index) => (
			<MediaListItem key={index}  mediaItem={media} />
		))}
    </div>
  );
};

export default MediaList;

