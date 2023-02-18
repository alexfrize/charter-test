import React, { useMemo } from "react";
import "./Table.css";

export const Table = ({ filteredTransactions }) => {
  const getTotalPoints = useMemo(() => {
    return filteredTransactions.length
      ? filteredTransactions.map((v) => v.points).reduce((acc, v) => acc + v)
      : 0;
  }, [filteredTransactions]);

  if (!filteredTransactions.length) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.map((tRow, tRowIndex) => (
            <tr key={tRowIndex}>
              <td>{tRow.customer}</td>
              <td>{tRow.transactionDate}</td>
              <td>{tRow.transactionAmount}</td>
              <td>{tRow.points}</td>
            </tr>
          ))}
          {filteredTransactions.length && (
            <tr>
              <td colSpan={4}>Total points: {getTotalPoints}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
