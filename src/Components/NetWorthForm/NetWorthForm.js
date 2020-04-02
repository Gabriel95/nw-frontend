import React from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import * as AuthActions from '../../Store/Actions/auth';
import * as NetWorthActions from '../../Store/Actions/networth';
import * as labelMapper from '../../LabelMapper';
import FormInput from './FormInput';
import Spinner from '../Spinner/Spinner';

class NetWorthForm extends React.Component {
  state = {
    forminputsvalues: {
      cash: {
        checkingaccounts: {
          value: 0,
          valid: true
        },
        moneymarketaccounts: {
          value: 0,
          valid: true
        },
        savingsbonds: {
          value: 0,
          valid: true
        },
        savingsaccounts: {
          value: 0,
          valid: true
        },
        cds: { value: 0, valid: true },
        cashvalueoflifeinsurance: {
          value: 0,
          valid: true
        }
      },
      investedassets: {
        brokerage: {
          value: 0,
          valid: true
        },
        ira: { value: 0, valid: true },
        rothira: { value: 0, valid: true },
        k401: {
          value: 0,
          valid: true
        },
        sepira: { value: 0, valid: true },
        keogh: {
          value: 0,
          valid: true
        },
        pension: {
          value: 0,
          valid: true
        },
        annuity: {
          value: 0,
          valid: true
        },
        realestate: {
          value: 0,
          valid: true
        },
        soleproprietorship: {
          value: 0,
          valid: true
        },
        partnership: {
          value: 0,
          valid: true
        },
        ccorporation: {
          value: 0,
          valid: true
        },
        scorporation: {
          value: 0,
          valid: true
        },
        limitedliabilitycompany: {
          value: 0,
          valid: true
        }
      },
      useassets: {
        principalhome: {
          value: 0,
          valid: true
        },
        vacationhome: {
          value: 0,
          valid: true
        },
        carstrucksboats: {
          value: 0,
          valid: true
        },
        homefurnishings: {
          value: 0,
          valid: true
        },
        artantiquescoinscollectibles: {
          value: 0,
          valid: true
        },
        jewelryfurs: {
          value: 0,
          valid: true
        }
      },
      liabilities: {
        creditcardbalances: {
          value: 0,
          valid: true
        },
        estimatedincometaxowed: {
          value: 0,
          valid: true
        },
        otheroutstandingbills: {
          value: 0,
          valid: true
        },
        homemortgage: {
          value: 0,
          valid: true
        },
        homeequityloan: {
          value: 0,
          valid: true
        },
        mortgagesonrentalproperties: {
          value: 0,
          valid: true
        },
        carloans: {
          value: 0,
          valid: true
        },
        studentloans: {
          value: 0,
          valid: true
        },
        lifeinsurancepolicyloans: {
          value: 0,
          valid: true
        },
        otherlongtermdebt: {
          value: 0,
          valid: true
        }
      }
    }
  };

  async componentDidMount() {
    await this.props.tryAuth('NetWorthForm');
    if (this.props.token === null) this.props.history.replace('/login');
  }

  async componentDidUpdate() {
    await this.props.tryAuth('NetWorthForm');
    if (this.props.token === null) this.props.history.replace('/login');
  }

  inputChangeHandler = (event, inputIdentifier, categoryIdentifier) => {
    const updatedInputValues = { ...this.state.forminputsvalues };
    const updatedCategoryValues = { ...updatedInputValues[categoryIdentifier] };
    updatedCategoryValues[inputIdentifier].value = event.target.value;
    updatedCategoryValues[inputIdentifier].valid = this.checkInputValidity(
      event.target.value
    );
    updatedInputValues[categoryIdentifier] = updatedCategoryValues;
    this.setState({ forminputsvalues: updatedInputValues });
  };

  calculateTotal = category => {
    let total = 0;
    const current = this.state.forminputsvalues[category];
    for (let key in current) {
      if (current[key].valid) total += +current[key].value;
    }
    return +total.toFixed(2);
  };

  inputBluredHandler = (event, inputIdentifier, categoryIdentifier) => {
    const updatedInputValues = { ...this.state.forminputsvalues };
    const updatedCategoryValues = { ...updatedInputValues[categoryIdentifier] };

    if (event.target.value.trim() === '') {
      updatedCategoryValues[inputIdentifier].valid = true;
      updatedCategoryValues[inputIdentifier].value = 0;
    } else if (this.checkInputValidity(event.target.value)) {
      updatedCategoryValues[inputIdentifier].valid = true;
      updatedCategoryValues[inputIdentifier].value =
        +event.target.value > 0 ? (+event.target.value).toFixed(2) : 0;
    }
    updatedInputValues[categoryIdentifier] = updatedCategoryValues;
    this.setState({ forminputsvalues: updatedInputValues });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    const NetWorthFormSubmit = {};
    for (let categorykey in this.state.forminputsvalues) {
      const category = this.state.forminputsvalues[categorykey];
      for (let key in category) {
        if (!category[key].valid) return;
        NetWorthFormSubmit[key] = +category[key].value;
      }
    }
    this.props.submitForm(this.props.token, NetWorthFormSubmit);
  };

  checkInputValidity = value => {
    const regex = /^[0-9]\d*(\.\d+)?$/;
    return regex.test(value);
  };

  generateInputs = category => {
    const inputArray = [];
    const currentCategory = this.state.forminputsvalues[category];
    for (let key in currentCategory) {
      const current = currentCategory[key];
      inputArray.push(
        <FormInput
          labelText={labelMapper.labelMapping(key)}
          key={key}
          id={key}
          category={category}
          invalid={!current.valid}
          changed={this.inputChangeHandler}
          blured={this.inputBluredHandler}
          value={this.state.forminputsvalues[category][key].value}
        />
      );
    }
    return inputArray;
  };

  getFormBody = () => {
    if (this.props.isLoading) return <Spinner />;

    const totalCash = this.calculateTotal('cash');
    const totalInvestedAssets = this.calculateTotal('investedassets');
    const totalUseAssets = this.calculateTotal('useassets');
    const totalLiabilities = this.calculateTotal('liabilities');
    const total =
      totalCash + totalInvestedAssets + totalUseAssets - totalLiabilities;

    return (
      <form onSubmit={this.formSubmitHandler}>
        <h2>Assets</h2>

        <h3>Cash and Cash Equivalents</h3>
        {this.generateInputs('cash')}
        <h5 className="text-right">
          Total Cash: ${totalCash.toLocaleString()}
        </h5>
        <h3>Invested Assets</h3>
        {this.generateInputs('investedassets')}
        <h5 className="text-right">
          Total Invested Assets: ${totalInvestedAssets.toLocaleString()}
        </h5>
        <h3>Use Assets</h3>
        {this.generateInputs('useassets')}
        <h5 className="text-right">
          Total Use Assets: ${totalUseAssets.toLocaleString()}
        </h5>
        <h3>Liabilities</h3>
        {this.generateInputs('liabilities')}
        <h5 className="text-right">
          Total Invested Liabilities: ${totalLiabilities.toLocaleString()}
        </h5>
        <h4 className="text-right my-3">
          Total Net Worth: ${total.toLocaleString()}
        </h4>
        <div className="btn-group d-block mb-5">
          <button type="submit" className="btn btn-success w-50">
            Submit
          </button>
          <button type="" className="btn btn-danger w-50">
            Cancel
          </button>
        </div>
      </form>
    );
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">{this.getFormBody()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    isLoading: state.networth.postNetWorthLoading,
    postNetWorthError: state.networth.postNetWorthError,
    postNetWorthSuccessMessage: state.networth.postNetWorthSuccessMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tryAuth: () => dispatch(AuthActions.authCheckState()),
    submitForm: (token, body) =>
      dispatch(NetWorthActions.postNetWorth(token, body))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NetWorthForm);
