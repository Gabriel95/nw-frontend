import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NetWorthCard from './NetWorthCard';

class NetWorthCardDeck extends React.Component {
  getcurrentNetWorthCard = () => {
    if (
      this.props.currentNetWorth === null ||
      this.props.currentNetWorth.currentNetWorthDate === null
    )
      return;
    const title = +this.props.currentNetWorth.currentNetWorth;
    const cardFooter = this.props.currentNetWorth.currentNetWorthDate;
    return (
      <NetWorthCard
        cardTitle={'$' + title.toLocaleString()}
        cardText="Your current networth."
        cardFooter={cardFooter}
      />
    );
  };

  getIncreaseCard = () => {
    if (
      this.props.currentNetWorth === null ||
      this.props.currentNetWorth.previousNetWorthDate === null
    )
      return;
    const increase = +this.props.currentNetWorth.increase;
    const cardText =
      (increase > 0 ? 'Increase' : 'Decrease') +
      ' from your previous net worth.';
    const cardFooter = this.props.currentNetWorth.previousNetWorthDate;
    return (
      <NetWorthCard
        cardTitle={increase.toFixed(2) + '%'}
        cardText={cardText}
        cardFooter={cardFooter}
      />
    );
  };

  render() {
    return (
      <div className="card-deck">
        {this.getcurrentNetWorthCard()}
        {this.getIncreaseCard()}
        <div className="card text-center">
          <div className="card-body">
            <Link
              className="btn btn-info btn-block card-title"
              to="/networthform"
            >
              <i className="fas fa-plus mr-1"></i> Calculate Net Worth
            </Link>
            <p className="card-text">
              Click here to calculate your current net worth.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    currentNetWorth: state.networth.currentNetWorth
  };
};

export default connect(mapStateProps)(NetWorthCardDeck);
