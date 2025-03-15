import SubList from "./sub-list";

const subList = [
  {
    text: (
      <>
        In case of disputes, contact <strong>SMFB Customer Service</strong> for
        resolution
      </>
    ),
  },
  {
    text: (
      <>
        Unresolved disputes may be referred to <strong>arbitration</strong> or
        the <strong>CBN Ombudsman for Financial Services.</strong>
      </>
    ),
  },
  {
    text: (
      <>
        SMFB reserves the right to <strong>suspend or close accounts</strong>{" "}
        involved in fraudulent, suspicious, or non-compliant activities.
      </>
    ),
  },
];

export const DisputeResolutionAndTermination = () => {
  return (
    <div className="font-satoshi">
      <h1 className="text-left text-xl font-semibold">
        7. Dispute Resolution & Termination
      </h1>

      <SubList items={subList} />
    </div>
  );
};
