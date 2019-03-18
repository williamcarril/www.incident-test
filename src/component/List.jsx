import React, { Component } from "react";
import { connect } from "react-redux";
import { listAll } from "../action/incident";

export class List extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.listAll();
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {(this.props.incidents || []).map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }

}

export default connect(
  null,
  { listAll }
)(List);
