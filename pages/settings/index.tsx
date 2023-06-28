import CardProfile from "@components/Cards/CardProfile";
import CardSettings from "@components/Cards/CardSettings";
import AdminLayout from "@components/Layout/AdminLayout";
import { FC } from "react";

interface pageProps {}

const SettingsPage: FC<pageProps> = ({}) => {
  return (
    <>
      <AdminLayout>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            <CardSettings title="My Company" />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <CardProfile />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default SettingsPage;
