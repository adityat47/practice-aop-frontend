"use client"
import { usePathname, useRouter } from "next/navigation"
import { getUserDetails } from ".";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
     const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
    const path = usePathname();
    const router = useRouter();
    if(!isClient){
        return "Rendering...";
    }
    const user = getUserDetails() || {};

    if(!user?.access_token){
        return router.push('/');
    }else{
        return children;
    }

}

export default AuthProvider;