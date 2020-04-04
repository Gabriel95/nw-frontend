import React from 'react';
import Navbar from '../Navbar/Navbar';
import * as AuthActions from '../../Store/Actions/auth';
import * as NetworthActions from '../../Store/Actions/networth';
import * as labelMapper from '../../LabelMapper';
import { connect } from 'react-redux';
import NetWorthDetailEntry from './NetWorthDetailEntry';
import Spinner from '../Spinner/Spinner';
import Alert from '../Alert/Alert';

class NetWorthDetail extends React.Component {
  async componentDidMount() {
    await this.props.tryAuth();
    if (this.props.token !== null) {
      this.props.getNetWorthDetail(
        this.props.token,
        this.props.match.params.networthId
      );
    } else {
      this.props.history.replace('/login');
    }
  }

  generateInputs = category => {
    if (this.props.netWorthDetail === null) return;
    const inputArray = [];
    const currentCategory = this.props.netWorthDetail[category];
    for (let key in currentCategory) {
      const current = currentCategory[key];
      inputArray.push(
        <NetWorthDetailEntry
          id={key}
          labelText={labelMapper.labelMapping(key)}
          key={key}
          value={(+current).toLocaleString()}
        />
      );
    }
    return inputArray;
  };

  getBody = () => {
    if (this.props.netWorthDetailLoading) {
      return <Spinner />;
    }

    if (this.props.netWorthDetailError !== null)
      return (
        <Alert
          type="danger"
          strongMessage="Error loading net worth."
          message={this.props.netWorthDetailError}
        />
      );

    return (
      <div>
        <h2>Assets</h2>
        <h3>Cash and Cash Equivalents</h3>
        {this.generateInputs('cash')}
        <h5 className="text-right">
          Total Cash: $
          {this.props.netWorthDetail !== null
            ? (+this.props.netWorthDetail.cashTotal).toLocaleString()
            : '0'}
        </h5>

        <h3>Invested Assets</h3>
        {this.generateInputs('investedAssets')}
        <h5 className="text-right">
          Total Invested Assets: $
          {this.props.netWorthDetail !== null
            ? (+this.props.netWorthDetail.investedAssetsTotal).toLocaleString()
            : '0'}
        </h5>

        <h3>Use Assets</h3>
        {this.generateInputs('useAssets')}
        <h5 className="text-right">
          Total Use Assets: $
          {this.props.netWorthDetail !== null
            ? (+this.props.netWorthDetail.useAssetsTotal).toLocaleString()
            : '0'}
        </h5>

        <h2>Liabilities</h2>
        {this.generateInputs('liabilities')}
        <h5 className="text-right">
          Total Liabilities: $
          {this.props.netWorthDetail !== null
            ? (+this.props.netWorthDetail.liabilitiesTotal).toLocaleString()
            : '0'}
        </h5>
        <h4 className="text-right mt-3 mb-4">
          Total Net Worth : $
          {this.props.netWorthDetail !== null
            ? (+this.props.netWorthDetail.total).toLocaleString()
            : '0'}
        </h4>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">{this.getBody()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    netWorthDetail: state.networth.netWorthDetail,
    netWorthDetailError: state.networth.netWorthDetailError,
    netWorthDetailLoading: state.networth.netWorthDetailLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAuth: () => dispatch(AuthActions.authCheckState()),
    getNetWorthDetail: (token, networthId) =>
      dispatch(NetworthActions.getNetWorth(token, networthId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NetWorthDetail);
