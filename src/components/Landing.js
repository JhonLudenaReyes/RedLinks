import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListDepartments from "./Department/ListDepartments";
import UserRegister from "./Department/UserRegister";

class Landing extends Component {
  render() {
    return (
      <Container>
        <ListDepartments />
        <Row>
          <Col>
            <ListDepartments />
          </Col>
          <Col>
            <UserRegister />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
