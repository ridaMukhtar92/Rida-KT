import React, {useState,Fragment}from "react";
import Artist from '../../Artist';
import Events from '../../Event';
import { Link,useHistory } from "react-router-dom";
import arrow from '../../../images/left-arrow.png'

const EventsLayout = (props) => {
	
	const history = useHistory();
	const goBack = () => {
	  history.goBack()
	}
	
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
	    	<div className="events-container">
	    		<button className="back-btn mt-3" onClick={()=>{goBack()}}>
	    			<img src={arrow} width="7" height="7"/>		
	    			Back to results
				</button>
		 		<Artist setLoader={setLoader}/>
		 		<Events />
			</div>
		</Fragment>
	);

}

export default EventsLayout;