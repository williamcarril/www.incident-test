import React, { Component } from "react";

import { Link } from 'react-router-dom';

export default class List extends Component {

  handleModelDeletion(model) {
    return function() {

      this.props.deleteModel(model);
    };
  }

  render() {
    return (
      <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Título</th>
              <th scope="col">Descrição</th>
              <th scope="col">Criticidade</th>
              <th scope="col">Tipo</th>
              <th scope="col">Status</th>
              <th scope="col"><span className="fa fa-cog"></span></th>
            </tr>
          </thead>
          <tbody>
            {(this.props.items || []).map(el => (
              <tr key={el.id}>
                <th scope="row">{el.id}</th>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td>{el.criticity ? el.criticity.name : ""}</td>
                <td>{el.type.name}</td>
                <td>{el.status.name}</td>
                <td><Link className="fa fa-edit btn btn-primary" to={`/edit/${el.id}`}></Link><button className="fa fa-trash btn btn-danger" onClick={this.handleModelDeletion(el).bind(this)}></button></td>
              </tr>
            ))}
          </tbody>
        </table>
    );
  }
};