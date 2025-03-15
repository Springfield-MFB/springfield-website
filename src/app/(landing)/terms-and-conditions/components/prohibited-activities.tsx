import SubList from "./sub-list";

const subList = [
  {
    text: <>Fraud, identity theft, or unauthorized transactions</>,
  },
  {
    text: <>Money laundering, financing terrorism, or illegal activities</>,
  },
  {
    text: (
      <>
        Purchase or sale of prohibited goods such as drugs, weapons, or
        counterfeit products.
      </>
    ),
  },

  {
    text: (
      <>Unlicensed gambling, pyramid schemes, or high-risk investment scams.</>
    ),
  },
];

export const ProhibitedActivities = () => {
  return (
    <div className="font-satoshi">
      <h1 className="text-left text-xl font-semibold">
        5. Prohibited Activities
      </h1>

      <SubList items={subList} />
    </div>
  );
};
