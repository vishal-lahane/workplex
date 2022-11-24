import Link from "next/link";
import { useRouter } from "next/router";

const SidebarNav = () => {
  const router = useRouter();
  return (
    <>
      <a
        className="mobNavigation"
        data-toggle="collapse"
        href="#MobNav"
        role="button"
        aria-expanded="false"
        aria-controls="MobNav"
      >
        <i className="fas fa-bars mr-2"></i>Dashboard Navigation
      </a>
      <div className="collapse" id="MobNav">
        <div className="dashboard-nav">
          <div className="dashboard-inner">
            <ul data-submenu-title="Main Navigation">
              <li
                className={
                  router.pathname === "/admin/dashboard" ? "active" : ""
                }
              >
                <Link href="/admin/dashboard">
                  <i className="lni lni-dashboard mr-2"></i>Dashboard
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/admin/manage-resumes" ? "active" : ""
                }
              >
                <Link href="/admin/manage-resumes">
                  <i className="lni lni-files mr-2"></i>Manage Resumes
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/admin/create-resume" ? "active" : ""
                }
              >
                <Link href="/admin/create-resume">
                  <i className="lni lni-add-files mr-2"></i>Create Resume
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/admin/applied-jobs" ? "active" : ""
                }
              >
                <Link href="/admin/applied-jobs">
                  <i className="lni lni-briefcase mr-2"></i>Applied jobs
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/admin/alert-jobs" ? "active" : ""
                }
              >
                <Link href="/admin/alert-jobs">
                  <i className="ti-bell mr-2"></i>Alert Jobs
                  <span className="count-tag bg-warning">4</span>
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/admin/bookmark-jobs" ? "active" : ""
                }
              >
                <Link href="/admin/bookmark-jobs">
                  <i className="lni lni-bookmark mr-2"></i>Bookmark Jobs
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/admin/packages" ? "active" : ""
                }
              >
                <Link href="/admin/packages">
                  <i className="lni lni-mastercard mr-2"></i>Packages
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/admin/messages" ? "active" : ""
                }
              >
                <Link href="/admin/messages">
                  <i className="lni lni-envelope mr-2"></i>Messages
                  <span className="count-tag">4</span>
                </Link>
              </li>
            </ul>
            <ul data-submenu-title="My Accounts">
              <li
                className={router.pathname === "/admin/profile" ? "active" : ""}
              >
                <Link href="/admin/profile">
                  <i className="lni lni-user mr-2"></i>My Profile{" "}
                </Link>
              </li>
              <li
                className={
                  router.pathname === "/admin/change-password" ? "active" : ""
                }
              >
                <Link href="/admin/change-password">
                  <i className="lni lni-lock-alt mr-2"></i>Change Password
                </Link>
              </li>
              <li>
                <a href="#">
                  <i className="lni lni-trash-can mr-2"></i>Delete Account
                </a>
              </li>
              <li>
                <Link href="/login-signup">
                  <i className="lni lni-power-switch mr-2"></i>Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
