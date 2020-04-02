import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as AuthActions from '../../Store/Actions/auth';

class Navbar extends React.Component {
  logoutHandler = () => {
    this.props.logout();
    this.props.history.replace('/login');
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">
            <i className="fas fa-calculator mr-1"></i> Net Worth Calculator
          </span>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn btn-link nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="fas fa-user mr-1"></i> Hi {this.props.username}
              </button>
              <div className="dropdown-menu">
                <Link className="btn btn-link dropdown-item" to="/networthform">
                  <i className="fas fa-plus mr-1"></i> Calculate New
                </Link>
                <div className="dropdown-divider"></div>
                <button
                  className="btn btn-link dropdown-item"
                  onClick={this.logoutHandler}
                >
                  <i className="fas fa-sign-out-alt mr-1"></i> Sign Out
                </button>
              </div>
            </li>
            <li className="nav-item">
              <Link className="btn btn-link nav-link" to="/">
                <i className="fas fa-home mr-1"></i> home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { username: state.auth.firstname + ' ' + state.auth.lastname };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(AuthActions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
