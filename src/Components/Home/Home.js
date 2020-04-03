import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthActions from '../../Store/Actions/auth';
import * as NetWorthActions from '../../Store/Actions/networth';
import Spinner from '../Spinner/Spinner';
import NetWorthCardDeck from './NetWorthCardDeck/NetWorthCardDeck';

class Home extends React.Component {
  componentDidMount() {
    this.props.tryAuth();
    if (this.props.token !== null) {
      this.props.getCurrentNetWorth(this.props.token);
    }
  }

  getNetWorthCardDeck = () => {
    if (this.props.currentNetWorthLoading) return <Spinner />;
    return <NetWorthCardDeck />;
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
          {this.getNetWorthCardDeck()}
          <h2 className="mt-5 mb-3">
            Net Worth History <i className="fas fa-history ml-1"></i>
          </h2>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Date Created</th>
                <th>Time</th>
                <th>Total</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>27/3/2020</td>
                <td>16:30</td>
                <td>$900,000.00</td>
                <td>
                  <div className="btn btn-group d-block">
                    <button className="btn btn-outline-secondary w-50">
                      View
                    </button>
                    <button className="btn btn-outline-danger w-50">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>1/3/2020</td>
                <td>15:30</td>
                <td>$80,000.00</td>
                <td>
                  <div className="btn btn-group d-block">
                    <button className="btn btn-outline-secondary w-50">
                      View
                    </button>
                    <button className="btn btn-outline-danger w-50">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    currentNetWorthLoading: state.networth.currentNetWorthLoading,
    currentNetWorthError: state.networth.currentNetWorthError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAuth: () => dispatch(AuthActions.authCheckState()),
    getCurrentNetWorth: token =>
      dispatch(NetWorthActions.getCurrentNetWorth(token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
