import React, {Component} from 'react';
import UserPic from './UserPic';
import UserName from './UserName';
import Post from './Post';
import './style.css';

function UserInfo(props) {
  let userPic = props.userPic;
  let name = props.name;
  let handle = props.handle;
  let post = props.post
  return (
     <li>
        <div className="tweet-container">
          <UserPic userPic= { userPic }/>
          <UserName name={ name } handle={ handle } />
          <Post post={ post } />
        </div>
      </li>
  
  );
}

export default UserInfo; 