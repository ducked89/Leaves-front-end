import UserDropdown from "@/components/Dropdowns/UserDropdown";
import { ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const allRoute = pathname?.trim().split("/");

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent md:flex-row md:flex-nowrap md:justify-start">
        <div className="flex flex-wrap items-center justify-between w-full px-4 mx-autp md:flex-nowrap md:px-10">
          {/* Brand */}
          {pathname?.includes("dashboard") ? (
            <button
              className="hidden text-sm font-semibold text-white uppercase lg:inline-block"
              onClick={(e) => {
                e.preventDefault();
                router.push("/dashboard");
              }}
            >
              Dashboard
            </button>
          ) : (
            <>
              <button
                className="hidden text-sm font-semibold text-white uppercase lg:inline-block"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/dashboard");
                }}
              >
                Dashboard
              </button>
              {allRoute?.map(
                (item: string, index: number) =>
                  item.length > 0 && (
                    <div key={index} className="flex items-center">
                      <ArrowRight className="px-3 text-gray-400" size={45} />
                      <span className="hidden text-sm font-semibold text-gray-400 uppercase lg:inline-block">
                        {item}
                      </span>
                    </div>
                  )
              )}
            </>
          )}

          {/* Form */}
          <form className="flex-row flex-wrap items-center hidden mr-3 md:flex lg:ml-auto">
            <div className="relative flex flex-wrap items-stretch w-full">
              <span className="absolute z-10 items-center justify-center w-8 h-full py-3 pl-3 text-base font-normal leading-snug text-center bg-transparent rounded text-blueGray-300">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="relative w-full px-3 py-3 pl-10 text-sm bg-white border-0 rounded shadow outline-none placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col items-center hidden list-none md:flex-row md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
