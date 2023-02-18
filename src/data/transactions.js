const names = ["Isabella", "Elizabeth", "David", "Jose"];
const lastNames = ["Smith", "Brown", "Martinez"];

const randomValue = () => {
  return {
    customer: `${names[Math.floor(Math.random() * names.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`,
    transactionDate: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toString(),
    transactionAmount: Number((Math.random() * 250 + 1).toFixed(2)),
  };
};

const transactions = [...Array(100)].map(randomValue);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getTransactions = async () => {
  await sleep(1000);
  return transactions;
};
