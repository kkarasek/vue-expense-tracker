const displayTransactionAmount = (amount) => {
  const formattedAmount = `${amount < 0 ? '-' : ''}$${amount.toString().replace('-', '')}`;
  return formattedAmount;
};

export default displayTransactionAmount;
