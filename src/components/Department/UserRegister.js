import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

//import { saveDepartment } from "../../../actions/departmentActions";
import { editDepartment } from "../../actions/departmentActions";

class UserRegister extends Component {
  state = {
    formState: "Registrar",
    id: "",
    title: "",
    body: "",
  };

  componentDidUpdate(prevProps) {
    const { department } = this.props.department;
    if (department !== prevProps.department.department) {
      this.updateState(department);
      this.changeForm();
    }
  }

  updateState = (department) => {
    this.setState({
      id: department.id,
      title: department.title,
      body: department.body,
    });
  };

  changeForm = () => {
    this.setState({
      formState: "Modificar",
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    /*const dataSave = {
      department: this.state.department,
    };*/

    const dataEdit = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
    };

    if (this.state.id === "") {
      //this.props.saveDepartment(dataSave);
    } else {
      this.props.editDepartment(dataEdit);
    }

    this.clearState();
  };

  clearState = () => {
    this.setState({
      formState: "Registrar",
      id: "",
      title: "",
      body: "",
    });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Col>
              <h4>
                <b>{this.state.formState}</b> Usuario
              </h4>
            </Col>
            <Form noValidate onSubmit={this.onSubmit}>
              <Form.Group>
                <Form.Label>Ingrese titulo</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.title}
                  id="title"
                  type="text"
                  placeholder="Ingrese un titulo"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ingrese description</Form.Label>
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.body}
                  id="body"
                  type="text"
                  placeholder="Ingrese description"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Guardar cambios
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

UserRegister.propTypes = {
  //saveDepartment: PropTypes.func.isRequired,
  editDepartment: PropTypes.func.isRequired,
  department: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  department: state.department,
});

export default connect(mapStateToProps, {
  //saveDepartment,
  editDepartment,
})(withRouter(UserRegister));