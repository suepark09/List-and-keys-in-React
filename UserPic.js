import React from 'react';

function UserPic(props) {
  return(
     <div>
        <img src={ props.userPic } width="80px"/>
      </div>
  );
}

export default UserPic