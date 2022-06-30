import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateClient extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname:'',
      email:'',
      gender:'',
      image:'',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      first_name: this.state.firstname,
      last_name: this.state.lastname,
      email: this.state.email,
      gender: this.state.gender,
      image: this.state.image,
    };

    axios
      .post('http://localhost:5000/api/clients', data)
      .then(res => {
        this.setState({
          first_name: '',
          last_name:'',
          email:'',
          gender:'',
          image:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in createclient!");
      })
  };

  render() {
    return (
      <div className="CreateClient">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Client List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add client</h1>
              <p className="lead text-center">
                  Create new client
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='First Name'
                    name='firstname'
                    className='form-control'
                    value={this.state.first_name}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    name='lastname'
                    className='form-control'
                    value={this.state.last_name}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='form-control'
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Gender'
                    name='gender'
                    className='form-control'
                    value={this.state.gender}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Image-URL'
                    name='image'
                    className='form-control'
                    value={this.state.image}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateClient;