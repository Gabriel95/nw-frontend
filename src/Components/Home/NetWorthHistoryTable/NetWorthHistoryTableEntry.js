import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NetWorthHistoryTableEntry extends React.Component {
  formatDate = date => {
    const splitDate = date.split('-');
    return splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0];
  };

  render() {
    return (
      <tr>
        <th scope="row">{this.props.iterator + 1}</th>
        <td>{this.formatDate(this.props.dateTimeCreated.split('T')[0])}</td>
        <td>{this.props.dateTimeCreated.split('T')[1].split('.'[0])}</td>
        <td>${(+this.props.total).toLocaleString()}</td>
        <td>
          <div className="btn-group d-block">
            <Link
              className="btn btn-outline-secondary w-50"
              to={'/networthdetail/' + this.props.networthId}
            >
              View
            </Link>
            <button className="btn btn-outline-danger w-50">Delete</button>
          </div>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(NetWorthHistoryTableEntry);
