import React from 'react';

class NetWorthDetailEntry extends React.Component {
  getClasses = () => {
    if (this.props.invalid) return 'form-control is-invalid';
    return 'form-control';
  };
  render() {
    return (
      <div className="form-group" key={this.props.id}>
        <label htmlFor={this.props.id}>{this.props.labelText}</label>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input
            className="form-control"
            id={this.props.id}
            value={this.props.value}
            readOnly
          />
        </div>
      </div>
    );
  }
}

export default NetWorthDetailEntry;
