"use client";
import React, {  useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/axiosInstance";
import { getUserDetails, setUserDetails } from "@/util";
import { Loader2 } from "lucide-react";

const Home = () => {
  const router = useRouter();
  const isToken = getUserDetails();
  const params = useSearchParams();
  const code = params.get("code");


  useEffect(() => {
    if (isToken?.access_token) {
      router.push("/clients");
    }
    if (!isToken?.access_token && !code) {
      location.href = process.env.NEXT_PUBLIC_KEYCLOAK_URL;
    } else if (!isToken?.access_token && code) {
      callback();
    }
  }, [code]);

  async function tokenExchange(token: string) {
    try {
      const result = await api.get(`auth/token-exchange?token=${token}`);
      if (result.status === 200) {
        const { access_token, client_id } = result.data;
        setUserDetails({ access_token, client_id });
        router.push("/clients");
      }
    } catch (error) {}
  }

  async function callback() {
    try {
      console.log("code", code);
      const result = await api.get(`/auth/callback?code=${code}`);
      console.log("result", result);
      if (result.status === 200) {
        const { access_token } = result.data;
        tokenExchange(access_token);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  //1) Get code from url query parms
  //2) If user is not logged in then call the redirect API
  //3) If you will find code in the url query params and user is not logged in then call the callback API
  //4) After hitting the callback API you will find the token in the API response of callback
  //5) After getting the token from the callback API you need to call token exchange API
  //6) In the response of token exchange API we will get all the details related to the user
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader2 className="animate-spin text-cyan-800" />
    </div>
  );
};

export default Home;
