import Head from "next/head";
import SidebarNav from "../components/Admin/SidebarNav";
import Navbar from "../components/Navbar";
interface Props {
  children: any;
}
const AdminLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Content" />
      </Head>
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
