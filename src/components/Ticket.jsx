import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
      <style jsx>{
        `h3 {
          color: navy;
          font-family: Helvetica;
        }
        div {
          background-color: #ebfafa;
          padding-top: 10px;
          padding-bottom: 10px;
          margin-bottom: 10px;
          border: 1px solid lightgrey;
        }
        div:hover {
          background-color: #d6f5f5;
        }
        `
      }
      </style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;