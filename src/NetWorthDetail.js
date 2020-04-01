import React from 'react';
import Navbar from './Navbar';

class NetWorthDetail extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Assets</h2>
          <div className="form-group">
            <label htmlFor="leinput">Assets</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input className="form-control" id="leinput" readOnly />
            </div>
          </div>
          <h2>Liabilities</h2>
          <div className="form-group">
            <label htmlFor="leinput2">Liabilities</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input className="form-control" id="leinput2" readOnly />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NetWorthDetail;
