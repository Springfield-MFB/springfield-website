import React from "react";
import SubList from "./sub-list";

const subList = [
  {
    text: (
      <>
        To open an account, you must be at least <strong>18 years old</strong>{" "}
        and provide accurate personal information, including:
      </>
    ),
    subItems: [
      <strong>Bank Verification Number (BVN)</strong>,
      <strong>National Identification Number (NIN)</strong>,
      <strong>
        Valid government-issued ID (National ID, Passport, Voter's Card, or
        Driver's License)
      </strong>,
      <strong>Registered phone number and email address</strong>,
    ],
  },
  {
    text: (
      <>
        Your account may be used for{" "}
        <strong>
          fund transfers, savings, bill payments, airtime purchases, loan
          applications, and investments.{" "}
        </strong>
      </>
    ),
  },
  {
    text: (
      <>
        You are responsible for keeping your{" "}
        <strong>
          Personal Identification Number (PIN), One-Time Password (OTP), and
          login details confidential
        </strong>
      </>
    ),
  },
];

export const AccountRegistration = () => {
  return (
    <div className="font-satoshi">
      <h1 className="text-left text-xl font-semibold">
        2. Account Registration
      </h1>

      <SubList items={subList} />
    </div>
  );
};
