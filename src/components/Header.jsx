import React from 'react';

function Header(){
  return (
    <div>
      <style jsx>{
        `
        h1 {
          text-align: center;
          font-family: Helvetica;
        }
        `
      }
      </style>
      <h1>Help Queue</h1>
    </div>
  );
}

export default Header;