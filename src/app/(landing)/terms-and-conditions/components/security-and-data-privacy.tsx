import SubList from "./sub-list";

const subList = [
  {
    text: (
      <>
        SMFB ensures <strong>data protection</strong> and will not share your
        personal details without your consent, except as required by law.
      </>
    ),
  },
  {
    text: (
      <>
        Your transactions may be monitored for compliance with{" "}
        <strong>anti-money laundering (AML) laws.</strong>
      </>
    ),
  },
  {
    text: (
      <>
        By using SMFB’s services, you authorize us to verify your identity and
        credit history with relevant agencies
      </>
    ),
  },
];

export const SecurityAndDataPrivacy = () => {
  return (
    <div className="font-satoshi">
      <h1 className="text-left text-xl font-semibold">
        6. Security & Data Privacy
      </h1>

      <SubList items={subList} />
    </div>
  );
};
