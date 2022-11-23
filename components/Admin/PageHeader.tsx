import Link from "next/link";

interface Props {
  title: string;
  menu: string | null;
}
const PageHeader = ({ title, menu }: Props) => {
  return (
    <>
      <div className="dashboard-tlbar d-block mb-5">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <h1 className="ft-medium">{title}</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item text-muted">
                  <a href="#">Home</a>
                </li>
                {menu === null ? (
                  <li className="breadcrumb-item">
                    <a href="#" className="theme-cl">
                      Dashboard
                    </a>
                  </li>
                ) : (
                  <>
                    <li className="breadcrumb-item text-muted">
                      <Link href="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#" className="theme-cl">
                        {menu}
                      </a>
                    </li>
                  </>
                )}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
