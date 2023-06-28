import CardForm from "@components/Cards/CardForm";
import CardPageVisits from "@components/Cards/CardPageVisits";
import AdminLayout from "@components/Layout/AdminLayout";
import { EnumEmployee } from "@utils";
import { FC } from "react";

interface pageProps {}

const header = ["ID", "Fullname", "Department", "Status", "Action"];
const body = [
  {
    id: "557yey7",
    fullname: "Pierre Adolphe",
    department: "Accoountant.",
    status: "Enabled",
    action: "222",
  },
];

const EmployeePage: FC<pageProps> = ({}) => {
  return (
    <AdminLayout>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
          <CardPageVisits title="Users List" header={header} body={body} />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardForm
            title="Create New Employee"
            subtitle="A new employee is a person who has been hired."
          >
            <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-pid"
                  >
                    PID
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="1234567890"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-firstname"
                  >
                    Firstname
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Firstname"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-lastname"
                  >
                    Lastname
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Lastname"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="password"
                  >
                    Gender
                  </label>
                  <select className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring">
                    <option value={EnumEmployee.MALE}>Default</option>
                    <option value={EnumEmployee.MALE}>
                      {EnumEmployee.MALE}
                    </option>
                    <option value={EnumEmployee.FEMALE}>
                      {EnumEmployee.FEMALE}
                    </option>
                  </select>
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-joining"
                  >
                    Joining Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Lastname"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="password"
                  >
                    Department
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
                    Add New Employee
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

export default EmployeePage;
