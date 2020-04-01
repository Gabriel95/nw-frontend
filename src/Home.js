import React from 'react';
import Navbar from './Navbar';

class Home extends React.Component {
  render() {
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
        </div>
      </div>
    );
  }
}

export default Home;
