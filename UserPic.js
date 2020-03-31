import React from 'react';

function UserPic(props) {
  return(
     <div className="img-container">
        <img src={ props.userPic } width="80px"/>
      </div>
  );
}

export default UserPic