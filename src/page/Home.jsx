import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

import List from "../component/List/index.jsx";
import ErrorList from "../component/ErrorList/index.jsx";

import { dismissAlert } from "../action/global";
import { listAll, deleteModel } from "../action/incident";

export class Home extends Component {

  componentDidMount() {
    this.props.listAll();
  }

  render() {
    return (
      <div className="home page">
        <ErrorList dismissAlert={this.props.dismissAlert} items={this.props.errors}/>
        <h1>Lista de incidentes</h1>
        <Link to="/new">Novo incidente</Link>
        <List items={this.props.incidents} deleteModel={this.props.deleteModel}/>
      </div>
    )
  }
}

export default connect(
  ({ globalState, incidentState }) => ({incidents: incidentState.incidents, errors: globalState.errors}),
  { listAll, deleteModel, dismissAlert }
)(Home);
