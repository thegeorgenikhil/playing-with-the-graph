import React, { useEffect, useState } from "react";
import {
  GetAllTransactionsQuery,
  Transaction,
} from "../../__generated__/graphql";
import TransactionCard from "./TransactionCard";

type TransactionsProps = {
  loading: boolean;
  data: GetAllTransactionsQuery;
};
export const Transactions: React.FC<TransactionsProps> = ({
  loading,
  data,
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>();
  useEffect(() => {
    if (!loading) {
      setTransactions(data.transactions as Transaction[]);
    }
  }, [loading]);
  return (
    <div>
      {!loading ? (
        <div className="m-10 flex flex-col gap-4">
          {transactions?.map((transaction) => (
            <TransactionCard transaction={transaction} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
