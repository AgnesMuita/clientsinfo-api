import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ClientCard = (props) => {
    const  client  = props.client;

    return(
        <div className="card-container">
            <img src={client.image} alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/showclient/${client.id}`}>
                        {client.first_name }
                    </Link>
                </h2>
                <h3>{client.last_name}</h3>
                <p>{client.email}</p>
            </div>
        </div>
    )
};

export default ClientCard;