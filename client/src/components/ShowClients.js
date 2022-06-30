import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClientCard from './ClientCard';

class ShowClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {clients: []};
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/clients')
      .then(res => {
        this.setState({
          clients: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowClientList');
      })
  };


  render() {
    const clients = this.state.clients;
    const clientData = clients.data
    // console.log("PrintClient: " + clients);
    let clientList;

    if(!clientData) {
      clientList = "there is no client record!";
    } else {
      if(clientData){
        clientList = clientData.map((client, k) =>
          <ClientCard client={client} key={k} />
        );
      }
    }

    return (
      <div className="ShowClientList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Client List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/createclient" className="btn btn-outline-warning float-right">
                + Add New Client
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
          <div className="list">
                {clientList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowClientList;