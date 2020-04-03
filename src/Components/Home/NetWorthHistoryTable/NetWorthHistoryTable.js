import React from 'react';
import { connect } from 'react-redux';
import NetWorthHistoryTableEntry from './NetWorthHistoryTableEntry';

class NetWorthHistoryTable extends React.Component {
  generateTableEntries = () => {
    const tableEntryArray = [];
    for (let i = 0; i < this.props.allNetWorths.length; i++) {
      tableEntryArray.push(
        <NetWorthHistoryTableEntry
          key={i}
          iterator={i}
          dateTimeCreated={this.props.allNetWorths[i].dateTimeCreated}
          total={this.props.allNetWorths[i].total}
          networthId={this.props.allNetWorths[i].id}
        />
      );
    }
    return tableEntryArray;
  };

  render() {
    if (this.props.allNetWorths === null || this.props.allNetWorths.length <= 0)
      return <h4>No records found.</h4>;

    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Date Created</th>
            <th>Time</th>
            <th>Total</th>
            <th className="text-cent">Actions</th>
          </tr>
        </thead>
        <tbody>{this.generateTableEntries()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    allNetWorths: state.networth.allNetWorths
  };
};

export default connect(mapStateToProps)(NetWorthHistoryTable);
