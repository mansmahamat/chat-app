import React from 'react';
import './Contact.css'

const ContactList = () => {
    const users = [
        {
          name: 'Robert Reyes',
          avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
          online: false
        },
        {
          name: 'Nellie Caldwell',
          avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
          online: true
        },
        {
          name: 'Vernon Mason',
          avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
          online: true
        },
        {
          name: 'Erica Hunt',
          avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
          online: false
        },
        {
          name: 'Juanita Phillips',
          avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
          online: true
        }
      ];


    return ( 
    <div>
        {users.map(user => (
            <div className="Contact">
                <img className="avatar" alt={user.avatar} src={user.avatar}/>
                    <div>
                        <h4 className="name"> {user.name} </h4>
                        <div className="status">
                            <span className={`${user.online ? 'status-online' : 'status-offline'}`}></span>
                                <p className="status-text"> {user.online ? 'Online' : 'Offline' } </p>
                        </div>
                    </div>
            </div>
    ))}
    </div> );
}
 
export default ContactList;