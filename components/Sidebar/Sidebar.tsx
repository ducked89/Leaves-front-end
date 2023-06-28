"use client";
import {
  CalendarCheck,
  CalendarOff,
  Fingerprint,
  Key,
  LayoutDashboard,
  LucideHome,
  MenuIcon,
  Palmtree,
  Settings,
  Timer,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";

interface SidebarProps {
  title?: string;
}

const menus = [
  { title: "Dashboard", href: "/dashboard", Icon: LayoutDashboard },
  { title: "Department", href: "/department", Icon: LucideHome },
  { title: "Emplooyee", href: "/employee", Icon: Users2 },
  { title: "Leave type", href: "/leave_type", Icon: CalendarOff },
  { title: "Leaves", href: "/leaves", Icon: Palmtree },
  { title: "Holydays", href: "/holidays", Icon: CalendarCheck },
  { title: "Users", href: "/users", Icon: Fingerprint },
  { title: "Roles", href: "/roles", Icon: Key },
  { title: "Settings", href: "/settings", Icon: Settings },
];

const Sidebar: FC<SidebarProps> = ({
  title = "Leaves Management System",
}: SidebarProps) => {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const pathname = usePathname();
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Toggler */}
          <button
            className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <MenuIcon size={20} />
          </button>
          {/* Brand */}
          <Link href="/dashboard">
            <p className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap">
              {title}
            </p>
          </Link>
          {/* User */}
          {/* <ul className="flex flex-wrap items-center list-none md:hidden">
            <li className="relative inline-block">
              <NotificationDropdown />
            </li>
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul> */}
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <p className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap">
                      {title}
                    </p>
                  </Link>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <Timer />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="pt-0 mb-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border border-solid rounded shadow-none outline-none border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 focus:outline-none"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-2 md:min-w-full" />
            {/* Heading */}
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              {menus.map((item: any, index: number) => (
                <li className="flex items-center" key={index}>
                  <Link href={item.href}>
                    <p
                      className={
                        "text-xs uppercase py-4 font-bold  flex " +
                        (pathname === item.href
                          ? "text-blue-500 hover:text-blue-600"
                          : "text-gray-700 hover:text-gray-500")
                      }
                    >
                      {<item.Icon size={18} />}
                      <span className="ml-2">{item.title}</span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
