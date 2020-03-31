import React from 'react';
import UserInfo from './UserInfo'
import './style.css';

function TweetContainer(props) {
  let data = props.data;
  console.log("wuteverrr", data)
  // let userInfo = data.map((user) => 
  //   <UserInfo key={ data.id } name={ data.name }/> 
  // );
  return (
    <div className="tweet-container">
      <div className="img-container">
        <img src="https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif" alt="cat" width="100px" />
      </div>
      <UserInfo data= { data }/>
      
    </div>
  );
}

export default TweetContainer; 