import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css'

const Contact = (props) => {
    return ( 
        <div className="Contact">
        <img className="avatar" alt={props.name} src={props.avatar}/>
        <div>
          <div className="name"> {props.name} </div>
          <div className="status">
            <div className={`${props.status === "Online"  ? 'status-online' : 'status-offline'}`}></div>
            <span className="status-text"> {props.status} </span>
          </div>
        </div>
      </div>
     );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

 
export default Contact;