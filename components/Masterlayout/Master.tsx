import React, { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./Navbar/navbar";

type Props = {
  children: ReactNode;
};

const MasterLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MasterLayout;
