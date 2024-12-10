import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import bgImage from "@/assets/auth_3.jpg";
const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Toaster />
      <div
        className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12"
        style={{
          backgroundImage: ` url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-7xl font-serif text-neutral-950 tracking-tight text-">
            <span className="text-slate-300">Unlea</span>sh Your Inner Glow with
            Spark Haven
          </h1>
        </div> */}
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
