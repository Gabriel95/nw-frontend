import React from 'react';

class NetWorthCard extends React.Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-body">
          <h4 className="card-title">{this.props.cardTitle}</h4>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.cardFooter}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default NetWorthCard;
