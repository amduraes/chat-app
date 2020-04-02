import React from 'react';
import Contact from './Contact';

const users = [
    {
        id: 1,
        name: 'These',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false
    },
    {
        id: 2,
        name: 'Are',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
    },
    {
        id: 3,
        name: 'Not',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
    },
    {
        id: 4,
        name: 'Real',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
    },
    {
        id: 5,
        name: 'People',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true
    }
];

const ContactList = () => (
    <div>
        {users.map(user => (<Contact {...user} />))}
    </div>
);

export default ContactList;

// name = { user.name } avatar = { users.avatar } online = { users.online } 