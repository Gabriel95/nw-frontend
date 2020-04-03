import React from 'react';

class FormInput extends React.Component {
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
            className={this.getClasses()}
            id={this.props.id}
            onChange={event =>
              this.props.changed(event, this.props.id, this.props.category)
            }
            onBlur={event =>
              this.props.blured(event, this.props.id, this.props.category)
            }
            value={this.props.value}
          />
        </div>
      </div>
    );
  }
}

export default FormInput;
