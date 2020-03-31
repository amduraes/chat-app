import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className='Contact' >
            <img className='avatar'
                src="https://randomuser.me/api/portraits/men/25.jpg"
                alt="Guy Ross" />
            <div>
                <h4 className='name'>Guy Ross</h4>
                <div className='status'>
                    <ins className='status-online'></ins>
                    <p className='status-text'>Online</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
