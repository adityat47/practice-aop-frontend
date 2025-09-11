"use client";
import React, {  useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/axiosInstance";
import { getUserDetails, setUserDetails, setClientId } from "@/util";


type UserDetails = {
  access_token?: string;
  client_id?: string;
}

const Home = () => {
  const router = useRouter();
  const user: UserDetails | null = getUserDetails();
  const params = useSearchParams();
  const code = params.get("code");


  useEffect(() => {
    if (user?.access_token) {
      router.push("/clients");
    }
    if (!user?.access_token && !code) {
      location.href = process.env.NEXT_PUBLIC_KEYCLOAK_URL;
    } else if (!user?.access_token && code) {
      callback();
    }
  }, [code]);

  async function tokenExchange(token: string) {
    try {
      const result = await api.get(`auth/token-exchange?token=${token}`);
      if (result.status === 200) {
        const { access_token, client_id } = result.data as any;
        // Persist tokens and client id (prefer body value, fallback to header)
        setUserDetails({ access_token, client_id });
        router.push("/clients");
      }
    } catch (error) {}
  }

  async function callback() {
    try {
      console.log("code", code);
      const result = await api.get(`/auth/callback`, { params: { code } });
      if (result.status === 200) {
        const { access_token, client_id, x_client_id } = result.data as any;
        // Save x-client-id if present in body
        const bodyClientId = client_id ?? x_client_id;
        if (bodyClientId) setClientId(bodyClientId);
        if (access_token) {
          await tokenExchange(access_token);
        }
      }
    } catch (error) {
      console.log((error as any)?.message || error);
    }
  }

  console.log("Rendering...", code);

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
