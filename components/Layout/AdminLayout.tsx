"use client";
import FooterAdmin from "@components/Footers/FooterAdmin";
import HeaderStats from "@components/Headers/HeaderStats";
import AdminNavbar from "@components/Navbars/AdminNavbar";
import Sidebar from "@components/Sidebar/Sidebar";

export const metadata = {
  title: "Dashboard",
  description: "Leaves Management System",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="w-full px-4 mx-auto -m-24 md:px-10">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
