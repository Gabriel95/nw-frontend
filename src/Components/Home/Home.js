import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthActions from '../../Store/Actions/auth';
import * as NetWorthActions from '../../Store/Actions/networth';
import Spinner from '../Spinner/Spinner';
import NetWorthCardDeck from './NetWorthCardDeck/NetWorthCardDeck';
import NetWorthHistoryTable from './NetWorthHistoryTable/NetWorthHistoryTable';
import Alert from '../Alert/Alert';

class Home extends React.Component {
  componentDidMount() {
    this.props.tryAuth();
    if (this.props.token !== null) {
      this.props.getCurrentNetWorth(this.props.token);
      this.props.getAllNetWorth(this.props.token);
    }
  }

  deleteClickHandler = (token, netWorthId) => {
    this.props.deleteNetWorth(token, netWorthId);
  };

  getNetWorthCardDeck = () => {
    if (this.props.currentNetWorthLoading) return <Spinner />;
    return <NetWorthCardDeck />;
  };

  getNetWorthHistory = () => {
    if (this.props.allNetWorthsLoading) return <Spinner />;
    return (
      <NetWorthHistoryTable deleteClickHandler={this.deleteClickHandler} />
    );
  };

  displayError = (errorKey, strongErrorMessage) => {
    if (this.props[errorKey] !== null)
      return (
        <Alert
          type="danger"
          strongMessage={strongErrorMessage}
          message={this.props.currentNetWorthError}
        />
      );
  };

  render() {
    if (this.props.token === null) return <Redirect to="/login" />;

    return (
      <div>
        <Navbar />
        <div className="container">
          <h2 className="mb-3">
            Current Net Worth <i className="fas fa-chart-line ml-1"></i>
          </h2>
          {this.displayError(
            'currentNetWorthError',
            'Error loading current net worth.'
          )}
          {this.getNetWorthCardDeck()}
          <h2 className="mt-5 mb-3">
            Net Worth History <i className="fas fa-history ml-1"></i>
          </h2>
          {this.displayError(
            'deleteNetWorthErrorMessage',
            'Error deleting net worth.'
          )}
          {this.displayError(
            'allNetWorthsError',
            'Error loading net worth history.'
          )}
          {this.getNetWorthHistory()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    currentNetWorthLoading: state.networth.currentNetWorthLoading,
    currentNetWorthError: state.networth.currentNetWorthError,
    allNetWorthsError: state.networth.allNetWorthsError,
    allNetWorthsLoading: state.networth.allNetWorthsLoading,
    deleteNetWorthErrorMessage: state.networth.deleteNetWorthErrorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAuth: () => dispatch(AuthActions.authCheckState()),
    getCurrentNetWorth: token =>
      dispatch(NetWorthActions.getCurrentNetWorth(token)),
    getAllNetWorth: token => dispatch(NetWorthActions.getAllNetWorth(token)),
    deleteNetWorth: (token, netWorthId) =>
      dispatch(NetWorthActions.deleteNetWorth(token, netWorthId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
