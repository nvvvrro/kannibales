import React from "react";
import { Footer, Header } from ".";

interface Props {
  children: React.ReactNode;
  className?: string;
  pathName?: string;
}

export const Layout = ({ children, className, pathName }: Props) => {
  return (
    <div className={className || ""}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
