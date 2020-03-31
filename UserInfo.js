import React, {Component} from 'react';
import './style.css';

class UserInfo extends Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
      let data = this.props.data
      console.log("##asdf##", data[0])
  }

  // let name = data.map((name) => )
  render() {
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
 
}

export default UserInfo; 