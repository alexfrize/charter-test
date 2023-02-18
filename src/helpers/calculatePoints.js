// A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.

export const calculatePoints = (transaction) => {
  const dollarsAbove100 = Math.floor(transaction.transactionAmount - 100);
  const points = dollarsAbove100 > 0 ? dollarsAbove100 * 2 + 50 : 0;
  return { ...transaction, points };
};
