import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthActions from '../../Store/Actions/auth';

class Home extends React.Component {
  componentDidMount() {
    this.props.tryAuth('home');
  }

  render() {
    if (this.props.token === null) return <Redirect to="/login" />;

    return (
      <div>
        <Navbar />
        <div className="container">
          <h2 className="mb-3">
            Current Net Worth <i className="fas fa-chart-line ml-1"></i>
          </h2>
          <div className="card-deck">
            <div className="card text-center">
              <div className="card-body">
                <h4 className="card-title">$100,000,000.00</h4>
                <p className="card-text">Your current net worth.</p>
                <p className="card-text">
                  <small className="text-muted">01/04/2020</small>
                </p>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-body">
                <h4 className="card-title">100%</h4>
                <p className="card-text">
                  Increase from your previous net worth.
                </p>
                <p className="card-text">
                  <small className="text-muted">31/03/2020</small>
                </p>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-body">
                <button className="btn btn-info btn-block card-title">
                  <i className="fas fa-plus mr-1"></i>Calculate Net Worth
                </button>
                <p className="card-text">
                  Click here to calculate your current Net Worth.
                </p>
              </div>
            </div>
          </div>
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
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAuth: () => dispatch(AuthActions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
