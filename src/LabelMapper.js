export const labelMapping = key => {
  const upperCaseKey = key.toUpperCase();
  switch (upperCaseKey) {
    case 'CHECKINGACCOUNTS':
      return 'Checking Accounts';
    case 'SAVINGSACCOUNTS':
      return 'Savings Accounts';
    case 'MONEYMARKETACCOUNTS':
      return 'Money Market Accounts';
    case 'SAVINGSBONDS':
      return 'Savings Bonds';
    case 'CDS':
      return "Cd's";
    case 'CASHVALUEOFLIFEINSURANCE':
      return 'Cash value of life insurance';
    case 'BROKERAGE':
      return 'Brokerage';
    case 'IRA':
      return 'IRA';
    case 'ROTHIRA':
      return 'Roth IRA';
    case 'K401':
      return '401(k) or 403(b)';
    case 'SEPIRA':
      return 'SEP-IRA';
    case 'KEOGH':
      return 'Keogh or other qualified plan';
    case 'PENSION':
      return 'Pension (vested benefit)';
    case 'ANNUITY':
      return 'Annuity (accumulated value)';
    case 'REALESTATE':
      return 'Real estate (rental property or land)';
    case 'SOLEPROPRIETORSHIP':
      return 'Sole proprietorship';
    case 'PARTNERSHIP':
      return 'Partnership';
    case 'CCORPORATION':
      return 'C Corporation';
    case 'SCORPORATION':
      return 'S Corporation';
    case 'LIMITEDLIABILITYCOMPANY':
      return 'Limited liability company';
    case 'PRINCIPALHOME':
      return 'Principal Home';
    case 'VACATIONHOME':
      return 'Vacation Home';
    case 'CARSTRUCKSBOATS':
      return 'Cars, trucks, boats';
    case 'HOMEFURNISHINGS':
      return 'Home furnishings';
    case 'ARTANTIQUESCOINSCOLLECTIBLES':
      return 'Art, antiques, coins, collectibles';
    case 'CREDITCARDBALANCES':
      return 'Credit card balances';
    case 'ESTIMATEDINCOMETAXOWED':
      return 'Estimated income tax owed';
    case 'OTHEROUTSTANDINGBILLS':
      return 'Other outstanding bills';
    case 'HOMEMORTGAGE':
      return 'Home mortgage';
    case 'HOMEEQUITYLOAN':
      return 'Home equity loan';
    case 'MORTGAGESONRENTALPROPERTIES':
      return 'Mortgages on rental properties';
    case 'CARLOANS':
      return 'Car loans';
    case 'STUDENTLOANS':
      return 'Student loans';
    case 'LIFEINSURANCEPOLICYLOANS':
      return 'Life insurance policy loans';
    case 'OTHERLONGTERMDEBT':
      return 'Other long-term debt';
    default:
      return key;
  }
};
