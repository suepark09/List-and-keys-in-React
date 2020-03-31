import React from 'react';
import './style.css';

function UserInfo(props) {
  return (
    <div>
      <div className="name-container">
        <h3>Sue Park</h3>
        <p style={{paddingTop: "3px", paddingLeft: "5px"}}>@suepark09</p>
      </div>
     <div className="post-container">
      <p>heyooo this is mah first post!</p>
     </div>
    </div>
  );
}

export default UserInfo; 