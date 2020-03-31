import React from 'react';
import UserInfo from './UserInfo'
import './style.css';

function TweetContainer(props) {
  return (
    <div className="tweet-container">
      <div className="img-container">
        <img src="https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif" alt="cat" width="100px" />
      </div>
      <UserInfo />
      
    </div>
  );
}

export default TweetContainer; 