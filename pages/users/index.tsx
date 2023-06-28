import CardForm from "@components/Cards/CardForm";
import CardPageVisits from "@components/Cards/CardPageVisits";
import AdminLayout from "@components/Layout/AdminLayout";
import { FC } from "react";

interface pageProps {}

const header = ["ID", "Username", "Email", "Role", "Action"];
const body = [
  {
    id: "557yey7",
    username: "myadmin",
    email: "myadmin@gmail.com",
    role: "administrator",
    action: "222",
  },
];

const UsersPages: FC<pageProps> = ({}) => {
  // TODO: On click to submit form disable the button form

  return (
    <AdminLayout>
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
          <CardPageVisits title="Users List" header={header} body={body} />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardForm
            title="Create New User"
            subtitle="Create user and sign in with this credentials."
          >
            <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Username
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
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Email"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Password"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="confirm_password"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Password"
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                    htmlFor="confirm_password"
                  >
                    Role
                  </label>
                  <select className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring">
                    <option value="">Administrator</option>
                  </select>
                </div>

                {/* <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-blueGray-700"
                  />
                  <span className="ml-2 text-sm font-semibold text-blueGray-600">
                    I agree with the{" "}
                    <a href="#" className="text-lightBlue-500">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div> */}

                <div className="mt-6 text-center">
                  <button
                    className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                    type="button"
                  >
                    Create Account
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

export default UsersPages;
