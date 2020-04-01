import React from 'react';
import Navbar from './Navbar';

class NetWorthForm extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <form className="">
            <h2>Assets</h2>
            <div className="form-group">
              <label htmlFor="leinput">Assets</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input className="form-control" id="leinput" />
              </div>
            </div>
            <h2>Liabilities</h2>
            <div className="form-group">
              <label htmlFor="leinput2">Liabilities</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input className="form-control" id="leinput2" />
              </div>
            </div>
            <div className="btn-group d-block mb-5">
              <button type="submit" className="btn btn-success w-50">
                Submit
              </button>
              <button type="" className="btn btn-danger w-50">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NetWorthForm;
