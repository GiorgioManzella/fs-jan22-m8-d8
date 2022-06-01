import React from "react";
import { Container } from "react-bootstrap";

class ChatBox extends React.Component {
  render() {
    return (
      <>
        <Container>
          <div id="container">
            <div className="chat"></div>
            <div className="users"></div>
          </div>
        </Container>
      </>
    );
  }
}

export default ChatBox;
