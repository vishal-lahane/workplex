import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLettSubscription from "../components/NewsLettSubscription";
interface Props {
  children: any;
}
const WebsiteLayout = ({ children }: Props) => {
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

export default WebsiteLayout;
