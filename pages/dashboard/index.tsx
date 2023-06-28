import CardLineChart from "@components/Cards/CardLineChart";
import AdminLayout from "@components/Layout/AdminLayout";
import { FC } from "react";

interface pageProps {}

const Dashboard: FC<pageProps> = ({}) => {
  return (
    <>
      <AdminLayout>
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
            <CardLineChart /> Test1
          </div>
          <div className="w-full px-4 xl:w-4/12">
            {/* <CardBarChart /> */} Test2
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
            {/* <CardPageVisits /> */} Test3
          </div>
          <div className="w-full px-4 xl:w-4/12">
            {/* <CardSocialTraffic /> */} Test4
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default Dashboard;
