import { getAutomationInfo } from "@/actions/automations";
import PostNode from "@/components/global/automations/post/node";
import ThenNode from "@/components/global/automations/then/node";
import Trigger from "@/components/global/automations/trigger";
import AutomationsBreadCrumb from "@/components/global/bread-crumbs/automation";
import { Warning } from "@/icons/warning";
import {
  PrefetchUserAutomation,
  PrefetchUserAutomations,
} from "@/react-query/prefetch";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import React from "react";

export const dynamic = 'force-dynamic';

type Props = {
  params: { id: string };
};

//WIP: Set some metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const info = await getAutomationInfo(params.id);
  return { title: info.data?.name };
}

const Page = async ({ params }: Props) => {
  const query = new QueryClient();

  await PrefetchUserAutomation(query, params.id);
  return (
    <HydrationBoundary state={dehydrate(query)}>

    <div className="flex flex-col items-center gap-y-20">
      <AutomationsBreadCrumb id={params.id} />
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1d1d1d] gap-y-3">
        <div className="flex gap-x-2">
          <Warning />
          When...
        </div>
        <Trigger id={params.id} />
      </div>
      <ThenNode id={params.id}/>
      <PostNode id={params.id}/>
    </div>
    </HydrationBoundary>
  );
};

export default Page;
