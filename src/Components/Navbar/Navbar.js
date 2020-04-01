import React from 'react';

class Navbar extends React.Component {
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
                <i className="fas fa-user mr-1"></i> Hi Username
              </button>
              <div className="dropdown-menu">
                <button className="btn btn-link dropdown-item">
                  <i className="fas fa-plus mr-1"></i> Calculate New
                </button>
                <div className="dropdown-divider"></div>
                <button className="btn btn-link dropdown-item">
                  <i className="fas fa-sign-out-alt mr-1"></i> Sign Out
                </button>
              </div>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link">
                <i className="fas fa-home mr-1"></i> home
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
