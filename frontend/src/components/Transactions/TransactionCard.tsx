import React, { ReactNode } from "react";
import { Transaction } from "../../__generated__/graphql";

type TransactionCardProps = {
  transaction: Transaction;
};

const trimAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  const { amount, transactionType, user, blockNumber, blockTimestamp } =
    transaction;
  return (
    <div
      className={`w-full p-4 rounded-lg shadow-sm border-2 ${
        transactionType === "deposit"
          ? "border-green-600/70"
          : "border-red-600/70"
      }`}
    >
      <div className="flex items-center gap-2 flex-wrap">
        <p className="text-xl font-semibold">{amount / 10 ** 18} ether</p>
        <p className="bg-white py-1 px-2 text-slate-600 rounded-full text-sm">
          {trimAddress(user.address)}
        </p>
        <p
          className={`uppercase ml-auto font-medium ${
            transactionType === "deposit" ? "text-green-600" : "text-red-600"
          }`}
        >
          {transactionType}
        </p>
      </div>
      <div>
        <div className="flex items-center gap-2 text-sm">
          <p className="text-blue-500">Block Number: </p>
          <p className="font-medium text-slate-600">{blockNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
