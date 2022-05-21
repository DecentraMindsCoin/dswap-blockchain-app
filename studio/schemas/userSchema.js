export const transactionSchema = {
  name: "transactions",
  title: "Transactions",
  type: "document",
  fields: [
    {
      name: "txHash",
      title: "Transaction Hash",
    },
    {
      name: "fromAddress",
      title: "From (Wallet Address)",
      type: "string",
    },
    {
      name: "toddress",
      title: "To (Wallet Address)",
      type: "string",
    },
    {
      name: "amount",
      title: "Amount",
      type: "number",
    },
    {
      name: "timestamp",
      title: "Timestamp",
      type: "datetime",
    },
  ],
};
