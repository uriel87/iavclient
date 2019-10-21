import React from "react";
import { useState, useEffect } from "react";
import LastSearchListItems from "../lastSearchListItems/lastSearchListItems"


const LastSearchList = (props) => {
	
	console.log("props searchList render", props.searchList)

	const [lastSearcList, setLastSearcList] = useState(props.searchList);
  
 	useEffect(() => {
		setLastSearcList(props.searchList);
	}, [props]);
  
  return (
    <div className="container">
		{ lastSearcList.map((lastSearch, index) => (
			<LastSearchListItems key={index}  lastSearch={lastSearch} />
		))}
    </div>
  ); 
};

export default LastSearchList;






