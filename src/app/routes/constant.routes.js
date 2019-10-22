

const envRoutes = {
    envDev: "http://localhost:8000/",
    envProduction: "http://localhost:8000/",
};


const mediaRoutes = {
    getMediaList: "https://itunes.apple.com/search",
	getMediaById: "http://itunes.apple.com/lookup"
};


const userRoutes = {
    getUser: "getUser/",
    getLastMediaList: "getLastMediaList/",
	AddMediaItemToUser: "AddMediaItemToUser/"
};


const mediaType = {
    musicVideo: "music"
};


export {
	envRoutes,
	mediaRoutes,
	userRoutes,
	mediaType
};



