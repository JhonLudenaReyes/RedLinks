import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Table, Button } from "react-bootstrap";

import { getListDepartments } from "../../actions/departmentActions";
import { setDepartment } from "../../actions/departmentActions";
import { changeVerification } from "../../actions/departmentActions";
import { setDepartments } from "../../actions/departmentActions";

class ListDepartments extends Component {
  state = {
    departs: [],
  };

  componentDidMount() {
    this.getDepartments();
    this.departState();
  }

  departState = () => {
    this.setState({
      departs: this.props.department.departments,
    });
  };

  componentDidUpdate(prevProps) {
    const { verification } = this.props.department;
    const { departments } = this.props.department;
    const { department } = this.props.department;
    if (verification !== prevProps.department.verification) {
      console.log("Entre");
      departments.map((depart) => {
        if (depart.id === department.id) {
          (depart.title = department.title), (depart.body = department.body);
        }
        this.props.changeVerification(false);
      });
      this.props.setDepartments(departments);
      //console.log("Verificacion")
      //console.log(departments);
      //this.setState({
      //  departs: departments,
      //});
    }
  }

  getDepartments = () => {
    this.props.getListDepartments();
  };

  handleClickEdit = (id, title, body) => {
    const data = {
      id,
      title,
      body,
    };
    this.props.setDepartment(data);
  };

  render() {
    const { departments } = this.props.department;

    return (
      <>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{department.id}</td>
                <td>{department.title}</td>
                <td>{department.body}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() =>
                      this.handleClickEdit(
                        department.id,
                        department.title,
                        department.body
                      )
                    }
                  >
                    Editar
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    /*onClick={() =>
                      this.handleClickDelete(department.departmentId)
                    }*/
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

ListDepartments.propTypes = {
  getListDepartments: PropTypes.func.isRequired,
  setDepartment: PropTypes.func.isRequired,
  changeVerification: PropTypes.func.isRequired,
  department: PropTypes.object.isRequired,
  setDepartments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  department: state.department,
});

export default connect(mapStateToProps, {
  getListDepartments,
  setDepartment,
  changeVerification,
  setDepartments,
})(withRouter(ListDepartments));
