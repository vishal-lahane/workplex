import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import NewsLettSubscription from "./NewsLettSubscription";

interface Props {
  children: any;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Content" />
      </Head>
      <Navbar />
      {children}
      <NewsLettSubscription />
      <Footer />
    </>
  );
};

export default Layout;
