import React from 'react';
import './Contact.css'

const Contact = () => {
    return ( 
        <div className="Contact">
        <img className="avatar" src="https://i.ibb.co/4S9wSTD/te-le-chargement.jpg"/>
        <div>
          <div className="name">Black Panther</div>
          <div className="status">
            <div className="status-online"></div>
            <span className="status-text">Online </span>
          </div>
        </div>
      </div>
     );
}

 
export default Contact;