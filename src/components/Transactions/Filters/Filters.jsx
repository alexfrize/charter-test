import React, { useEffect, useState } from "react";
import {
  ALL_CUSTOMERS,
  PERIOD_TOTAL,
  PERIOD_3_MONTHS,
  PERIOD_1_MONTH,
} from "../../../constants/constants";
import "./Filters.css";

export const Filters = ({
  allTransactions,
  setFilteredTransactions,
  uniqueCustomers,
}) => {
  const [currentCustomer, setСurrentCustomer] = useState(ALL_CUSTOMERS);
  const [firstDayOfPeriod, setFirstDayOfPeriod] = useState(null);

  const changeCustomer = (e) => setСurrentCustomer(e.target.value);

  const changePeriod = (e) => {
    const numberOfMonths = {
      [PERIOD_TOTAL]: null,
      [PERIOD_1_MONTH]: 1,
      [PERIOD_3_MONTHS]: 3,
    };

    const newFirstDayOfPeriod = numberOfMonths[e.target.value]
      ? new Date(
          new Date().setMonth(
            new Date().getMonth() - numberOfMonths[e.target.value]
          )
        )
      : numberOfMonths[PERIOD_TOTAL];
    setFirstDayOfPeriod(newFirstDayOfPeriod);
  };

  useEffect(() => {
    const filteredList = allTransactions
      .filter((transaction) =>
        currentCustomer === ALL_CUSTOMERS
          ? true
          : transaction.customer === currentCustomer
      )
      .filter((t) =>
        firstDayOfPeriod ? new Date(t.transactionDate) > firstDayOfPeriod : t
      );

    setFilteredTransactions(filteredList);
  }, [
    currentCustomer,
    firstDayOfPeriod,
    allTransactions,
    setFilteredTransactions,
  ]);

  return (
    <div className="filters-container">
      <div className="filters">
        <div>
          Customer:
          <select
            name="customers"
            id="customers"
            onChange={changeCustomer}
            defaultValue={currentCustomer}
          >
            <option value={ALL_CUSTOMERS}>{ALL_CUSTOMERS}</option>
            {uniqueCustomers.map((v, i) => (
              <option key={`customer-${i}`} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div>
          Period:
          <select name="period" id="period" onChange={changePeriod}>
            <option value={PERIOD_TOTAL}>{PERIOD_TOTAL}</option>
            <option value={PERIOD_3_MONTHS}>{PERIOD_3_MONTHS}</option>
            <option value={PERIOD_1_MONTH}>{PERIOD_1_MONTH}</option>
          </select>
        </div>
      </div>
    </div>
  );
};
