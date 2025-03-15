import SubList from "./sub-list";

const subList = [
  {
    text: (
      <>
        Deposits and withdrawals can be made via{" "}
        <strong>bank transfers, debit cards, or mobile money.</strong>
      </>
    ),
  },
  {
    text: (
      <>
        Transaction limits will be based on CBN regulations and your account
        tier.
      </>
    ),
  },
  {
    text: (
      <>
        If you provide incorrect beneficiary details, SMFB is not responsible
        for funds sent to the wrong account
      </>
    ),
  },
];

export const TransactionsAndTransfers = () => {
  return (
    <div className="font-satoshi">
      <h1 className="text-left text-xl font-semibold">
        4. Transactions & Transfers
      </h1>

      <SubList items={subList} />
    </div>
  );
};
