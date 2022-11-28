import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLettSubscription from "../components/NewsLettSubscription";
interface Props {
  children: any;
  footerType?: string;
}
const WebsiteLayout = ({ children, footerType = "light" }: Props) => {
  return (
    <>
      <Head>
        <title>Hello</title>
        <meta name="description" content="Content" />
      </Head>
      <Navbar />
      {children}
      <NewsLettSubscription fType={footerType} />
      <Footer fType={footerType} />
    </>
  );
};

export default WebsiteLayout;
