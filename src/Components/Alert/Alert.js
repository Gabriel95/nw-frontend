import React from 'react';

class Alert extends React.Component {
  render() {
    return (
      <div
        className={
          'alert alert-' + this.props.type + ' alert-dismissible fade show'
        }
        role="alert"
        key="lealert"
      >
        <strong>{this.props.strongMessage}</strong> {this.props.message}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default Alert;
