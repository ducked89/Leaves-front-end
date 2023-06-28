import CardTable from "@components/Cards/CardTable";
import AdminLayout from "@components/Layout/AdminLayout";
import { FC } from "react";

interface pageProps {}

const header: string[] = ["Id", "Fullname", "Date end", "Status", "Completion"];
const body: any[] = [
  {
    id: "4rart4",
    name: "Leger Kevenson",
    end_date: "2023-07-07",
    status: "Pending",
    completion: "60%",
  },
  {
    id: "4rart4",
    name: "Leger Kevenson",
    end_date: "2023-07-07",
    status: "Pending",
    completion: "20%",
  },
];

const LeavesPage: FC<pageProps> = ({}) => {
  return (
    <>
      <AdminLayout>
        <div className="flex flex-wrap mt-4">
          <div className="w-full px-4 mb-12">
            <CardTable
              color="dark"
              title="Leaves List"
              header={header}
              body={body}
            />
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default LeavesPage;
