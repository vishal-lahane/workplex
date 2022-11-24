import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SidebarNav from "../components/Admin/SidebarNav";
import Navbar from "../components/Navbar";
interface Props {
  children: any;
}
const AdminLayout = ({ children }: Props) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Content" />
      </Head>
      {loading && <div className="preloader"></div>}
      <Navbar />
      <div className="dashboard-wrap bg-light">
        <SidebarNav />
        <div className="dashboard-content">{children}</div>
      </div>
      <a
        id="back2Top"
        className="top-scroll"
        title="Back to top"
        href="#"
        style={{ display: "inline" }}
      >
        <i className="ti-arrow-up"></i>
      </a>
    </>
  );
};

export default AdminLayout;
