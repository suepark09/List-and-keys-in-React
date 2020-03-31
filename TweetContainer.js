import React from 'react';
import './style.css';

function TweetContainer(props) {
  return (
    <div className="tweet-container">
      <div className="img-container">
        <img src="https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif" alt="cat" width="100px" />
      </div>
      <div className="name-container">
        <h3>Sue Park</h3>
        <p>@suepark09</p>
      </div>
     
      
    </div>
  );
}

export default TweetContainer; 