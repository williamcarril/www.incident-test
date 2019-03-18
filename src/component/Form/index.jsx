import React, { Component } from "react";
import { withRouter } from "react-router";

export class Form extends Component {

  handleSubmit(event) {
    event.preventDefault();

    let form = document.querySelector("#incidentForm");

    let model = [].reduce.call(form.elements, (obj, el) => {
      obj[el.name] = el.value;

      return obj;
    }, {});

    let workFunc = this.props.newModel;

    if (this.props.incident) workFunc = this.props.editModel;

    workFunc(model).then(() => {this.props.history.push("/")});
  }

  render() {

    return (
      <form id="incidentForm" onSubmit={this.handleSubmit.bind(this)}>
        {
          this.props.incident 
          ? (
            <input type="hidden" name="id" defaultValue={this.props.incident.id} />
          ) 
          : null
        }
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input id="title" type="text" name="title" defaultValue={this.props.incident ? this.props.incident.title  : null} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea id="description" name="description" defaultValue={this.props.incident ? this.props.incident.description  : null}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="criticity">Criticidade</label>
          <select id="criticity" name="criticity" defaultValue={this.props.incident && this.props.incident.criticity ? this.props.incident.criticity.slug : null}>
            <option value="">Selecione uma opção</option>
            {(this.props.criticities || []).map(el => (
            <option key={el.id} value={el.slug}>{el.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="type">Tipo</label>
          <select id="type" name="type" defaultValue={this.props.incident && this.props.incident.type ? this.props.incident.type.slug : null}>
            {(this.props.types || []).map(el => (
            <option key={el.id} value={el.slug}>{el.name}</option>
            ))}
          </select>
        </div>

        { this.props.incident 
          ? ( 
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select id="status" name="status" defaultValue={this.props.incident && this.props.incident.status ? this.props.incident.status.slug : null}>
              {(this.props.statuses || []).map(el => (
              <option key={el.id} value={el.slug}>{el.name}</option>
              ))}
              </select>
            </div>
          )
          : null
        }
        <button className="btn btn-primary" type="submit">Salvar</button>
      </form>
    );
  }
}

export default withRouter(Form);