import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/use-subsription";
import { CreditCardIcon, Loader2 } from "lucide-react";
import React from "react";

type Props = {};

const PaymentButton = (props: Props) => {
  const { isProcessing, onSubscribe } = useSubscription();
  return (
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className="
        bg-gradient-to-br from-[#9685db] to-[#cc3bd4] via-[#9434e6] text-white rounded-full font-bold
    "
    >
      {isProcessing ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
      Upgrade
    </Button>
  );
};

export default PaymentButton;
