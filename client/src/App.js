import React from 'react';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import './App.css';

import CreateClient from "./components/CreateClient";
import ShowClientList from "./components/ShowClients";
import ShowClientDetails from "./components/ShowClientDetails";


class App extends React.Component{
  render(){
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<ShowClientList/>}/>
          <Route path='/createclient' element={<CreateClient/>}/>
          <Route path='/showclient/:id' element={<ShowClientDetails/>}/>
        </Routes>
      </Router>
    )
  }
 
}

export default App;
