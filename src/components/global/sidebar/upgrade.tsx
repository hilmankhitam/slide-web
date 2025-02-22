import React from "react";
import PaymentButton from "../payment-button";

type Props = {};

const UpgradeCard = (props: Props) => {
  return (
    <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
      <span className="text-sm">
        Upgrade to {""}
        <span
          className="bg-gradient-to-r
            from-[#CC38D4] to-[#D064AC]
           font-bold text-transparent bg-clip-text
           "
        >
          Smart AI
        </span>
      </span>
      <p className="text-[#989CA0] font-light text-sm">
        Unlock all features <br /> including AI and more
      </p>
      <PaymentButton />
    </div>
  );
};

export default UpgradeCard;
