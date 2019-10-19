
import React from "react";
import useMediaListForm from "./useMediaForm"
import mediaFormValidation from "./mediaFormValidation"
import { useState } from "react";
import axios from "axios";
import { mediaRoutes, mediaType } from "../../routes/constant.routes"
import MediaList from "../mediaList/mediaList"
import Loading from "../loading"



const MediaForm = (match) => {

	const { mediaInput, handleSubmit, handleChange, errors } = useMediaListForm(submit, mediaFormValidation);
	const [ mediaList, setMediaSList ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ mediaUrlReq, setmediaUrlReq ] = useState(mediaRoutes.getMediaList);

	
    function submit() {
		//console.log("submitted media", mediaInput.media)
		//console.log("mediaUrlReq", mediaUrlReq)
		getMediaItem(mediaUrlReq)

    }
	
	const getMediaItem = async (mediaUrlReq) => {
		//console.log("in getMediaItem params", mediaInput.media, mediaUrlReq)
		setIsLoading(true);
		await axios
		.post(mediaUrlReq, null, {
			params: {
				term: mediaInput.media,
				limit: 25,
				media: mediaType.musicVideo
			}
		})
		.then(response => {
			//console.log("getMediaItem", response.data)
			setMediaSList(response.data.results);
			setIsLoading(false);
		}).catch(error => {
			console.log(error);
			setIsLoading(false);
		});
	};

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <label>Media</label>
                <div>
                    <input
                        name="media"
                        type="text"
                        value={mediaInput.media}
                        onChange={handleChange}
                    />
                    {errors && <p className="mediaInput-input-error">{errors.media}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
			
			{isLoading ? <Loading /> : <MediaList mediaList = {mediaList}/>}
			
        </div>
    )

}


export default MediaForm;