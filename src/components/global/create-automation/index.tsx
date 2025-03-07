"use client";

import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import Loader from "../loader";
import { AutomationDuoToneWhite } from "@/icons/automation-duotone-white";
import { useCreateAutomation } from "@/hooks/use-automations";
import { v4 } from "uuid";

type Props = {};

const CreateAutomation = (props: Props) => {
  const mutateId = useMemo(() => v4(), []);
  //WIP: Create the automation in the database using mutate

  const { isPending, mutate } = useCreateAutomation(mutateId);
  return (
    <Button
      className="
        lg:px-10 py-6 bg-gradient-to-br from-[#3352cc] to-[#1c2d70] font-medium hover:opacity-80 text-white rounded-full
    "
      onClick={() =>
        mutate({
          name: "Untitled",
          id: mutateId,
          createdAt: new Date(),
          keywords: [],
        })
      }
    >
      <Loader state={isPending}>
        <AutomationDuoToneWhite />
        <p className="lg:inline-button">Create an Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
