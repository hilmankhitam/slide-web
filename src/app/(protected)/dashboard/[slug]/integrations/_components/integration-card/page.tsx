import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: "INSTAGRAM" | "CRM";
};

const IntegrationCard = ({ description, icon, strategy, title }: Props) => {
  //WIP: wire up fetching data and get the integrations from the db
  return (
    <div className="border-2 border-[#3352cc] rounded-2xl gap-x-5 p-5 flex items-center">
      {icon}
      <div className="flex flex-col flex-1">
        <h3 className="text-xl">{title}</h3>
        <p className="text-[#9d9d9d] text-base w-full md:w-10/12 xl:w-9/12 2xl:w-6/12">
          {description}
        </p>
      </div>
      <Button
        // onClick={onInsta0Auth}
        // disabled={integrated?.name === strategy}
        className="bg-gradient-to-br text-white rounded-full text-lg from-[#3352cc] to-[#1c2d70] font-medium hover:opacity-70 transition duration-100"
      >
        {/* {integrated ? "Connected" : "Connect"} */}
        Connect
      </Button>
    </div>
  );
};

export default IntegrationCard;
