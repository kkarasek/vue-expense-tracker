const displayBalanceAmount = (amount) => {
  const roundedAmount = amount.toFixed(2);
  const formattedRoundedAmount = `${roundedAmount < 0 ? '-' : ''}$${roundedAmount
    .toString()
    .replace('-', '')}`;
  return formattedRoundedAmount;
};

export default displayBalanceAmount;
