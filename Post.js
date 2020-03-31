import React from 'react';

function Post(props) {
  return (
     <div className="post-container">
        <p>{ props.post }</p>
      </div>
  );
}

export default Post; 