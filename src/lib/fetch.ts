import axios from "axios";
import { headers } from "next/headers";

export const refreshToken = async (token: string) => {
  const refresh_token = await axios.get(
    `${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
  );

  return refresh_token.data;
};

export const sendDM = async (
  userId: string,
  recieverId: string,
  prompt: string,
  token: string
) => {
  console.log("sending message");
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/v21.0/${userId}/messages`,
    {
      recipient: {
        id: recieverId,
      },
      message: {
        text: prompt,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const sendPrivateMessage = async (
  userId: string,
  receiverId: string,
  prompt: string,
  token: string
) => {
  console.log("sending message");
  return await axios.post(
    `${process.env.INSTAGRAM_BASE_URL}/${userId}/messages`,
    {
      recipient: {
        comment_id: receiverId,
      },
      message: {
        text: prompt,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export const generateTokens = async (code: string) => {
  const insta_from = new FormData();
  insta_from.append("client_id", process.env.INSTAGRAM_CLIENT_ID as string);

  insta_from.append("grant_type", "authorization_code");
  insta_from.append(
    "redirect_uri",
    `${process.env.NEXT_PUBLIC_HOST_URL}/callback/instagram`
  );

  insta_from.append("code", code);

  const shortTokenRes = await fetch(process.env.INSTAGRAM_TOKEN_URL as string, {
    method: "POST",
    body: insta_from,
  });

  const token = await shortTokenRes.json();
  if (token.permissions.length > 0) {
    console.log(token, "got permissions");
    const long_token = await axios.get(
      `${process.env.INSTAGRAM_BASE_URL}/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_CLIENT_SECRET}&access_token=${token.access_token}`
    );

    return long_token.data;
  }
};
