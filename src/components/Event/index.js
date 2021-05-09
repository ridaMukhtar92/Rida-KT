import React, { useState, useEffect, Fragment } from "react";
import {useParams,useLocation} from 'react-router-dom';
import {getEventsData} from '../../api/artists';
import moment from 'moment';
import './style.scss';

const Event = (props) => {

  	const [eventsData, setEventsData] = useState([]);
	const {id} =  useParams();
	const location = useLocation();

	let query = new URLSearchParams(useLocation().search);
	const name = query.get("name");
	useEffect (() => {

		//Set Event Data according to artist
		if(name){
				getEventsData(name).then((data)=>{
		   		setEventsData(data.data);
			})
		}
		
	},[name]);


    return (
        <div className="events">
        	
            {Object.keys(eventsData).length != 0  ?

            	<div className="row">
	            	<p className="upcoming mt-5">{Object.keys(eventsData).length} upcoming events</p>

	            	{	
	            		eventsData.map((event,key) =>{
	            						//Date format required
		    			let date = moment(event.datetime).format('DD MMM,YYYY')
		        		return (
							<div className="col-md-4 event-detail" key={key}>
								<div className="container-box">
									<h5 className="heading">EVENT DETAILS</h5>
									<hr/>
									<div className="row">
										<span className="col-6">
											<h5 className="heading">Country</h5>
											<p>{event.venue['country']}</p>
										</span>
										<span className="col-6">
											<h5 className="heading">Country</h5>
											<p>{event.venue['city']}</p>
										</span>

									</div>
									<div className="row">
										<span className="col-6">
											<h5 className="heading">Venue</h5>
											<p>{event.venue['name']}</p>
										</span>
										<span className="col-6">
											<h5 className="heading">Date</h5>
											<p>{date}</p>
										</span>

									</div>
				        		</div>        
					        </div>
	    				)}
            			)
	            	}
            	</div>

            :
            	<div className="container-box">
            		<h5> No Upcoming Events</h5>
            	</div>
	    	}
        </div>

    );

}

export default Event;