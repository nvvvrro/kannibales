import React from "react";
import { Footer, Header } from ".";
import { Sidebar } from "components/sidebar";

interface Props {
  children: React.ReactNode;
  className?: string;
  pathName?: string;
}

export const Layout = ({ children, className, pathName }: Props) => {
  return (
    <div className={className || ""}>
      <Header>
        <Sidebar />
      </Header>

      {children}
      <Footer />
    </div>
  );
};
