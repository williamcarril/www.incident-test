import React, { Component } from "react";

export default class ErrorList extends Component {
  
  handleAlertDismiss(index) {
    return function() {
      this.props.dismissAlert(index);
    };
  }

  render() {
    return (

      <div id="errors">
        {(this.props.items || []).map((el, i) => (
            <div key={i} className="alert alert-warning" role="alert">
              {el}
              <button type="button" className="close" aria-label="Close" onClick={this.handleAlertDismiss(i).bind(this)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
        ))}
      </div>
    );
  }
};

