import React, { useState } from 'react';
import { Link,useParams } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


function  ShowClientDetails(){

  const [client, setClient ] = useState({})
  const id = useParams();
  const newid = Number(Object.values(id))
  console.log(newid)

  React.useEffect(() => {
    axios.get('http://localhost:5000/api/clients/'+newid)
    .then(response => {
      console.log(response.data.data)
      setClient(response.data.data);
    });
  }, [newid]);

  const onDeleteClick = (id)=> {
    axios
      .delete('http://localhost:5000/api/clients/'+id)
      .then(res => {
        console.log(res.status)
         })
      .catch(err => {
        console.log("Error form ShowClientDetails_deleteClick");
      })
  };

  if (!client) return null;
  //  const client = this.state.client;
    let ClientItem = <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>First Name</td>
            <td>{ client.first_name }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Last Name</td>
            <td>{ client.last_name }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>email</td>
            <td>{ client.email }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Gender</td>
            <td>{ client.gender }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Image</td>
            <td>{ client.image }</td>
          </tr>
        </tbody>
      </table>
    </div>

  return (
    <div className="ShowClientDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Client List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Client's Record</h1>
              <p className="lead text-center">
                  View Client's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { ClientItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={onDeleteClick(client.id)}>Delete Client</button><br />
            </div>

          </div>
        </div>
      </div>
    );

}
export default ShowClientDetails;