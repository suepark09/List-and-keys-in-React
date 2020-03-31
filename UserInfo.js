import React, {Component} from 'react';
import UserPic from './UserPic'
import './style.css';

function UserInfo(props) {
  let userPic = props.userPic
  return (
     <li>
        <div className="tweet-container">
          <UserPic userPic= { userPic }/>
      
           <div className="name-container">
               <h3>{ props.name }</h3>
                <p style={{paddingTop: "3px", paddingLeft: "5px"}}>{ props.handle }</p>
          </div>
          <div className="post-container">
            <p>{ props.post }</p>
           </div>
        </div>
      </li>
  
  );
}

export default UserInfo; 