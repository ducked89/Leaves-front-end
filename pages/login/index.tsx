"use client";
import AuthLayout from "@components/Layout/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface pageProps {}

const LoginPage: FC<pageProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = (e: any) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <>
      <AuthLayout>
        <div className="container h-full px-4 mx-auto">
          <div className="flex items-center content-center justify-center h-full">
            <div className="w-full px-4 lg:w-4/12">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200">
                <div className="px-6 py-6 mb-0 rounded-t">
                  <div className="mb-3 text-center">
                    <h6 className="text-sm font-bold text-blueGray-500">
                      Sign in
                    </h6>
                  </div>
                </div>
                <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                  <div className="mb-3 font-bold text-center text-blueGray-400">
                    <small>with credentials</small>
                  </div>
                  <form onSubmit={handleForm}>
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
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Password"
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-blueGray-700"
                        />
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          Remember me
                        </span>
                      </label>
                    </div>

                    <div className="mt-6 text-center">
                      <button
                        className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="relative flex flex-wrap mt-6">
                <div className="w-1/2">
                  <button
                    onClick={(e) => e.preventDefault()}
                    className="text-blueGray-200"
                  >
                    <small>Forgot password?</small>
                  </button>
                </div>
                <div className="w-1/2 text-right">
                  <Link href="/auth/register">
                    <p className="text-blueGray-200">
                      <small>Create new account</small>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default LoginPage;
