import React, { useEffect, useState } from "react";
import { Table } from "./Table";
import { Filters } from "./Filters";
import { getTransactions } from "../../data/transactions";
import { calculatePoints } from "../../helpers/calculatePoints";

export const Transactions = () => {
  const [allTransactions, setAllTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [uniqueCustomers, setUniqueCustomers] = useState([]);

  useEffect(() => {
    (async () => {
      const transactions = await getTransactions();
      const listOfTransactions = transactions.map(calculatePoints);
      setAllTransactions(listOfTransactions);
      setFilteredTransactions(listOfTransactions);
      const listOfUniqueCustomers = Array.from(
        new Set(listOfTransactions.map((t) => t.customer))
      );

      setUniqueCustomers(listOfUniqueCustomers);
    })();
  }, []);

  return (
    <div>
      <Filters
        uniqueCustomers={uniqueCustomers}
        allTransactions={allTransactions}
        setFilteredTransactions={setFilteredTransactions}
      />
      <Table filteredTransactions={filteredTransactions} />
    </div>
  );
};
