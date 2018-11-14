import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Image will not display'
  },
  {
    names: 'Hyewon and Derek',
    location: '3A',
    issue: 'Tickets will not loop!'
  }
];

function TicketList(){
  return (
    <div>
      <style jsx>{
        `
        div {
          width: 600px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        `
      }
      </style>
      { masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} /> 
      )}
    </div>
  );
}

export default TicketList;