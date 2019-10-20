import React from "react";
import { useState, useEffect } from "react";
import MediaListItem from "../mediaListItem/mediaListItem"


const MediaList = (props) => {

	const [mediaList, setMediaList] = useState(props.mediaList);
 /*   const [getUserUrl, setgetUserUrl] = useState(envRoutes.envDev + userRoutes.getLastMediaList);
  const [mediaReq, setMediaReq] = { mediaId: match.params.id } */

/*   useEffect(() => {
    getMediaItem();
  }, []);

  const getMediaItem = async () => {
    await axios
      .post(getUserUrl, mediaReq)
      .then(response => {
        setMediaList(response.data);
        setIsLoading(true);
      })
      .catch(error => {
        console.log(error);
      });
  }; */
  

  
	console.log("props MediaList render", props.mediaList)
	//setMediaList(props.mediaList);
  
	useEffect(() => {
		setMediaList(props.mediaList);
	}, [props]);
	
/* 		useEffect(() => {
		setMediaList({
			...mediaList,
			items: [props.mediaList]
		});
	}, [props]); */
  

  return (
    <div className="container">
		{ mediaList.map((media, index) => (
			<MediaListItem key={index}  mediaItem={media} />
		))}

    </div>
  );
};

export default MediaList;

