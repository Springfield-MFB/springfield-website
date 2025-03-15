import SubList from "./sub-list";

const subList = [
  {
    text: (
      <>
        Loans are provided based on{" "}
        <strong>
          eligibility criteria, creditworthiness, and income verification.
        </strong>
      </>
    ),
  },
  {
    text: (
      <>
        Interest rates and applicable fees will be displayed during the loan
        application process
      </>
    ),
  },
  {
    text: (
      <>
        Repayments must be made on or before the due date. Late or missed
        payments may attract penalties, including additional charges and
        reporting to credit agencies.
      </>
    ),
  },
  {
    text: (
      <>
        <strong>
          In case of non-repayment, SMFB reserves the right to debit your linked
          bank account or card to recover outstanding amounts
        </strong>
      </>
    ),
  },
];

export const LoansAndRepayments = () => {
  return (
    <div className="font-satoshi">
      <h1 className="text-left text-xl font-semibold">3. Loans & Repayments</h1>

      <SubList items={subList} />
    </div>
  );
};
