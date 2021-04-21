import React from 'react';
import PropTypes from 'prop-types';

class MessageCard extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <section>
        <h1>{`Error ${message.status}`}</h1>
        <h1>{message.statusText}</h1>
      </section>
    );
  }
}

MessageCard.propTypes = {
  message: PropTypes.shape.isRequired,
};

export default MessageCard;
