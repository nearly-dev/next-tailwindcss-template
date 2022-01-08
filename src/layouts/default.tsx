import { Header, Footer } from "@/components";
import React from "react";

const DefaultLayout = ({ children }: { children: React.ReactChild }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
