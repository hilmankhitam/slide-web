import Trigger from "@/components/global/automations/trigger";
import AutomationsBreadCrumb from "@/components/global/bread-crumbs/automation";
import { Warning } from "@/icons/warning";
import React from "react";

type Props = {
  params: { id: string };
};

//WIP: Set some metadata

const Page = ({ params }: Props) => {
  //WIP: prefetch user automation data
  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationsBreadCrumb id={params.id} />
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1d1d1d] gap-y-3">
        <div className="flex gap-x-2">
          <Warning />
          When...
        </div>
        <Trigger id={params.id}/>
      </div>
    </div>
  );
};

export default Page;
