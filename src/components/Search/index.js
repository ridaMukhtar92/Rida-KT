import React, { useState } from "react";
import './style.scss';
import Icon from './images/search-icon.svg';
import { useHistory } from "react-router-dom";

const Search = (props) => {

 	let history = useHistory();

	//To maintain search value
 	const [search, setSearch] = useState('');

  	//Change Route with param
	const handleSubmit = async (e) =>{
		if(search){
			history.push('/artists/?name='+search)
		}
	  e.preventDefault();
	}
	
    return (
	      	<form onSubmit={e => { handleSubmit(e) }} className="search-form" >
			  <div className="form-group">
			    <input type="text" className="form-control" id="search" aria-describedby="artistName" 
			    placeholder="Search artist" value={search} onChange={(e)=>setSearch(e.target.value)}/>
			    <button type="submit">
			    	<img src={Icon} alt="profile"/>
		    	</button>
			  </div>
			</form>
	);

}

export default Search;