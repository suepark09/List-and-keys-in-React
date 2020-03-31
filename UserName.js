import React from 'react';

function userName(props) {
  return(
    <div className="name-container">
        <h3>{ props.name }</h3>
        <p style={{paddingTop: "3px", paddingLeft: "5px"}}>{ props.handle }</p>
      </div>
  );
}

export default userName;