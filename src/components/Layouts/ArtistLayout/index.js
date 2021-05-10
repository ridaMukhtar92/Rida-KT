import React, {useState,Fragment}from "react";
import Artist from '../../Artist';
import Search from '../../Search';

const ArtistLayout = () => {

	//For spinner UI
	const [loader,setLoader] = useState(true);
	
    return (
    	<Fragment>
		    {loader &&
		    	<div className="loader d-flex justify-content-center align-items-center">
			    	<div class="spinner-border" role="status">
					  	<span class="sr-only"></span>
					</div>
				</div>
	    	}
		    	<div className="artist-container d-flex flex-column mt-5">

			 		<Search />
			 		<br/>
			 		<Artist setLoader={setLoader}/>
				</div>
	    </Fragment>
    	
	);

}

export default ArtistLayout;