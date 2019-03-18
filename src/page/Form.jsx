import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import ErrorList from "../component/ErrorList/index.jsx";
import { default as FormComponent } from "../component/Form/index.jsx";

import { dismissAlert } from "../action/global";
import { newModel , editModel } from "../action/incident";
import { listAll as listCriticities } from "../action/criticity";
import { listAll as listStatuses } from "../action/status";
import { listAll as listTypes } from "../action/type";

export class Form extends Component {

  componentDidMount() {
    this.props.listCriticities();
    this.props.listStatuses();
    this.props.listTypes();
  }

  render() {

    let incident = null;

    if(this.props.match && this.props.match.params && this.props.match.params.id) {
      incident = this.props.incidents.filter(e => e.id == this.props.match.params.id)[0];
    }

    return (
      <div className="form page">
        <ErrorList dismissAlert={this.props.dismissAlert} items={this.props.errors}/>
        <h1>{incident ? "Editar" : "Novo"} incidente</h1>
        <FormComponent incident={incident} criticities={this.props.criticities} statuses={this.props.statuses} types={this.props.types} newModel={this.props.newModel} editModel={this.props.editModel} />
      </div>
    );
  }

}

export default connect(
  ({globalState, criticityState, statusState, typeState, incidentState}) => ({
    "errors": globalState.errors,
    "criticities": criticityState.criticities,
    "statuses": statusState.statuses,
    "types": typeState.types,
    "incidents": incidentState.incidents
  }),
  { 
    newModel,
    editModel,
    listCriticities,
    listStatuses,
    listTypes,
    dismissAlert
  }
)(withRouter(Form));
