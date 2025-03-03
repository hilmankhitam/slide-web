import { client } from '@/lib/prisma';
import { onUserInfo } from "@/actions/user";
import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { getAllAutomations } from '@/actions/automations';

const prefetch = async (
  client: QueryClient,
  action: QueryFunction,
  key: string
) => {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 60000,
  });
};

export const PrefetchUserProfile = async (client: QueryClient) => {
  return await prefetch(client, onUserInfo, "user-profile");
};


export const PrefetchUserAutomations = async (client: QueryClient)=> {
    return await prefetch(client, getAllAutomations, "user-automations")
}