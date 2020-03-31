import React, {Component} from 'react';
import './style.css';

function UserInfo(props) {
  return (
   <div className="tweet-container">
     <li>
      <div className="name-container">
        <h3>{ props.name }</h3>
        <p style={{paddingTop: "3px", paddingLeft: "5px"}}>{ props.handle }</p>
      </div>
     <div className="post-container">
      <p>{ props.post }</p>
     </div>
    </li>
   </div>
  );
}

export default UserInfo; 