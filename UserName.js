import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function userName(props) {
  return(
    <div className="name-container">

        <Row>
          <h5>{ props.name }</h5>
        <p style={{paddingTop: "-1px", paddingLeft: "8px"}}>{ props.handle }</p>
        </Row>
        

        
      </div>
  );
}

export default userName;