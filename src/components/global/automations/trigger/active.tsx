import { InstagramBlue } from "@/icons/instagram-blue";
import { PlaneBlue } from "@/icons/plane-blue";
import React from "react";

type Props = {
  type: string;
  keywords: {
    id: string;
    word: string;
    automationId: string | null;
  }[];
};

const ActiveTrigger = ({ keywords, type }: Props) => {
  return (
    <div className="bg-background-90 p-3 rounded-xl w-full">
      <div className="flex gap-x-2 items-center">
        {type === "COMMENT" ? <InstagramBlue /> : <PlaneBlue />}
        <p className="text-lg">
          {type === "COMMENT"
            ? "User comments on my post."
            : "User sends me a direct message."}
        </p>
      </div>
      <p className="text-text-secondary">
        {type === "COMMENT"
          ? "If the user comments on a video that is setup to listen for keywords, this automation will fire"
          : "If the user send your a message that contains a keywords, this automation will fire"}
      </p>
      <div className="flex gap-2 mt-5 flex-wrap">
        {keywords.map((word) => (
          <div
            key={word.id}
            className="bg-gradient-to-br from-[#3352cc] to-[#1c2d70] flex items-center gap-x-2 capitalize text-white font-light py-1 px-4 rounded-full"
          >
            <p>{word.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTrigger;
