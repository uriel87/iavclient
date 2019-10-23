
import React from "react";
import useMediaListForm from "./useMediaForm"
import mediaFormValidation from "./mediaFormValidation"
import { useState } from "react";
import axios from "axios";
import { mediaRoutes, mediaType, envRoutes, userRoutes } from "../../routes/constant.routes"
import MediaList from "../mediaList/mediaList"
import Loading from "../loading"
import "./mediaForm.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const MediaForm = () => {

	const { mediaInput, handleSubmit, handleChange, errors } = useMediaListForm(submit, mediaFormValidation);
	const [ mediaList, setMediaSList ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ mediaUrlReq, setmediaUrlReq ] = useState(mediaRoutes.getMediaList);
	const [ addLastMediaToUserUrlReq, setAddLastMediaToUserUrlReq ] = useState(envRoutes.envProduction + userRoutes.AddMediaItemToUser);

	
    function submit() {
		AddMediaItemToUser();
		getMediaItem();
    }
	
	const getMediaItem = async () => {
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
			setMediaSList(response.data.results);
			setIsLoading(false);
		}).catch(error => {
			console.log(error);
			setIsLoading(false);
		});
	};
	
	
	const AddMediaItemToUser = async () => {
		setIsLoading(true);
		await axios
		.post(addLastMediaToUserUrlReq, {
			params: {
				email: "firstUser@dd.com",
				lastSearch: mediaInput.media
			}
		})
		.then(response => {
			setIsLoading(false);
		}).catch(error => {
			console.log(error);
			setIsLoading(false);
		});
	};

    return (
        <div className="container">
            <form onSubmit={handleSubmit} noValidate>
                <label>Please enter your media query</label>
                <div className="input-group mb-3">
                    <input
						className={errors.media && "input-error"} 
                        name="media"
                        type="text"
						placeholder="Search media"
                        value={mediaInput.media}
                        onChange={handleChange}
                    />
                    {errors && <p className="mediaInput-input-error">{errors.media}</p>}
                </div>
				<div className="input-group-append">
					<button className="btn btn-info" type="submit">
						<span className="glyphicon glyphicon-search">Search media</span>
					</button>
				</div>
				
            </form>
			
			{isLoading ? <Loading /> : <MediaList mediaList = {mediaList}/>}
			
        </div>
    )

}


export default MediaForm;