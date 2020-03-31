import React, {Component} from 'react';
import UserPic from './UserPic';
import UserName from './UserName';
import Post from './Post';
import { Row, Col} from 'react-bootstrap';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

import './style.css';

function UserInfo(props) {
  let userPic = props.userPic;
  let name = props.name;
  let handle = props.handle;
  let post = props.post
  return (
     <li>
        <div className="tweet-container">
          <Row>
            <Col xs={3}>
               <UserPic userPic= { userPic }/>
            </Col>
            <Col>
              <UserName name={ name } handle={ handle } />
              <Post post={ post } />
            </Col>
          </Row>
          <Row>
            <Col xs={3}></Col>
            <Col className="icon-container">
              <div className="icon">
                <ChatBubbleOutlineIcon style={{ color: "grey", fontSize: 20 }}/> <p className="stats">{ props.comment }</p>
              </div>
              <div className="icon">
              <RepeatIcon style={{ color: "grey" }} fontSize="small"/><p className="stats">{ props.retweet }</p>
              </div>
              <div className="icon">
                <FavoriteBorderIcon style={{ color: "grey" }} fontSize="small"/><p className="stats">{ props.likes }</p>
              </div>
              <ShareIcon style={{ color: "grey" }} fontSize="small"/>
            </Col>
          </Row>
         
          
        </div>
      </li>
  
  );
}

export default UserInfo; 