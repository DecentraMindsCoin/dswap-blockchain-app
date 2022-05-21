export const userSchema = {
  name: "users",
  Title: "Users",
  type: "document",
  fields: [
    { name: "address", Title: "Wallet Address", type: "string" },
    { name: "userName", Title: "User Name", type: "string" },
    {
      name: "transactions",
      Title: "Transactions",
      type: "array",
      //references transactions from transactionSchema to connect their functionality an data
      of: [
        {
          type: "reference",
          to: [{ type: "transactions" }],
        },
      ],
    },
  ],
};
