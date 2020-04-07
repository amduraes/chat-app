import React, { Component } from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      online: props.online,
    };
  }
  render() {
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt={this.props.name} />
        <div>
          <h4 className='name'>{this.props.name}</h4>
          <div className='status'>
            <div
              onClick={(event) => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
              }}
              className={this.state.online ? 'status-online' : 'status-offline'}
            />
            <p className='status-text'>
              {this.state.online ? 'online' : 'offline'}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default Contact;
