import CardForm from "@components/Cards/CardForm";
import CardPageVisits from "@components/Cards/CardPageVisits";
import AdminLayout from "@components/Layout/AdminLayout";
import { FC } from "react";

interface pageProps {}

const header = ["ID", "Name", "Description", "Company", "Action"];
const body = [
  {
    id: "557yey7",
    name: "Accountant",
    description: "Lorem Ipsum ...",
    company: "ONI",
    action: "222",
  },
];

const Department: FC<pageProps> = ({}) => {
  // TODO: On click to submit form disable the button form

  return (
    <AdminLayout>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
          <CardPageVisits title="Users List" header={header} body={body} />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardForm
            title="Create New Department"
            subtitle="To create a new department within your organization."
          >
            <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Derpartment Name (Service)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Name"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Description
                  </label>
                  <textarea className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"></textarea>
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="password"
                  >
                    In the Company
                  </label>
                  <select className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring">
                    <option value="">ONI</option>
                  </select>
                </div>

                <div className="mt-6 text-center">
                  <button
                    className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                    type="button"
                  >
                    Add New Department
                  </button>
                </div>
              </form>
            </div>
          </CardForm>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Department;
