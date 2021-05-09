import React, { useState, useEffect, Fragment } from "react";
import {getArtistsData} from '../../api/artists';
import { useHistory, useLocation, Link } from "react-router-dom";
import './style.scss';

const Artist = (props) => {

	const [artistData, setArtistData] = useState({});
	let history = useHistory();

	let query = new URLSearchParams(useLocation().search);
	const name = query.get("name");

	useEffect (() => {;
		if(name){
			//Artist data API call
			getArtistsData(name).then((data)=>{
	   			setArtistData(data.data);
	   			props.setLoader(false);
			})
		}
	},[name]);

	
    return (
    	
		        <div className="artist-results">
		        	{Object.keys(artistData).length != 0 &&
	  			        	<div className="row">    
				            	<div className="col-md-3">
						        	<div className="d-flex align-items-center artist container-box" onClick={()=>{
						        		history.push({
									      pathname: `/artists/events/`,
									      search: `?name=${artistData.name}`,
									      artistData
									    })
						        	}}>
						        		<img src={artistData.image_url} width= "60" height="60" alt="profile"/>
						        		<div className="artist-detail">
							        		<p className="name">{artistData.name}</p>
							        		<a href={artistData.facebook_page_url} className="link">{artistData.facebook_page_url}</a>
								        </div>
							        </div>
						        </div>
				    		</div>
		    		}	
		        </div>
	    
    );

}

export default Artist;