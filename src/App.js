import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import ArtistLayout from './components/Layouts/ArtistLayout';
import SearchLayout from './components/Layouts/SearchLayout';
import EventsLayout from './components/Layouts/EventsLayout';

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <BrowserRouter>
            <Switch>
            
              //Search Screen
              <Route exact path="/">
                <SearchLayout />
              </Route>

              //Artists Screen
              <Route exact path="/artists">
                <ArtistLayout />
              </Route>

              //Events Screen
              <Route path="/artists/events">
                <EventsLayout />
              </Route>
            
             
            </Switch>
          </BrowserRouter>

        </div>
      </div>
    </div>
  );
}

export default App;
