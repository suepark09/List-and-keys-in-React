import React from 'react';
import UserInfo from './UserInfo'
import './style.css';

function TweetContainer(props) {
  let data = props.data;
  let tweets = data.map((user) => 
    <UserInfo key={ user.id } name={ user.name } handle={ user.handle } userPic={ user.image } post={ user.post }/> 
  );
  return (
    <div>
      <ul>{ tweets }</ul>
    </div>
  );
}

export default TweetContainer; 