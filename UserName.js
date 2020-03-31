import React from 'react';

function userName(props) {
  return(
    <div className="name-container">
        <h5>{ props.name }</h5>
        <p style={{paddingTop: "3px", paddingLeft: "5px"}}>{ props.handle }</p>
      </div>
  );
}

export default userName;