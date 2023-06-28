import TableDropdown from "@/components/Dropdowns/TableDropdown";
import Link from "next/link";
import { FC } from "react";

interface CardTableProps {
  color: string;
  title: string;
  header: string[];
  body: any[];
}

const CardTable: FC<CardTableProps> = ({
  color = "light",
  title,
  header,
  body,
}: any) => {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="px-4 py-3 mb-0 border-0 rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {title}
              </h3>
            </div>
            <div className="relative flex-1 flex-grow w-full max-w-full px-4 text-right">
              <Link
                className="px-3 py-1 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-indigo-500 rounded outline-none active:bg-indigo-600 focus:outline-none"
                href="/leaves/add"
              >
                Leave Application
              </Link>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            {header?.length > 0 ? (
              <thead>
                <tr>
                  {header?.map((item: string, index: number) => (
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    >
                      {item}
                    </th>
                  ))}
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  ></th>
                </tr>
              </thead>
            ) : null}

            {body?.length > 0 ? (
              <tbody>
                {body?.map((item: any, idx: number) => (
                  <TrTable key={idx}>
                    <ThTable data={item} color={color} />

                    <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      <TableDropdown />
                    </td>
                  </TrTable>
                ))}
              </tbody>
            ) : null}
          </table>
        </div>
      </div>
    </>
  );
};

const TrTable = ({ children }: { children: React.ReactNode }) => {
  return <tr>{children}</tr>;
};

const ThTable = ({ data, color }: any): React.ReactNode => {
  const keys = Object.keys(data);
  return (
    <>
      {keys?.map((item: string, index: number) => {
        if (index === 0) {
          return (
            <th
              className={` p-4 px-6 text-xs ${
                index === 0 ? "text-left" : ""
              } align-middle border-t-0 border-l-0 border-r-0 items-middle whitespace-nowrap`}
            >
              <span
                className={
                  "ml-3 font-bold " +
                  +(color === "light" ? "text-blueGray-600" : "text-white")
                }
              >
                {data[item]}
              </span>
            </th>
          );
        } else if (item === "completion") {
          return (
            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              <div className="flex items-center">
                <span className="mr-2">{data[item]}</span>
                <div className="relative w-full">
                  <div className="flex h-2 overflow-hidden text-xs bg-red-200 rounded">
                    <div
                      style={{ width: data[item] }}
                      className="flex flex-col justify-center text-center text-white bg-red-500 shadow-none whitespace-nowrap"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
          );
        } else if (item === "status") {
          return (
            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              <i className="mr-2 text-orange-500 fas fa-circle"></i>{" "}
              {data[item]}
            </td>
          );
        } else {
          return (
            <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
              {data[item]}
            </td>
          );
        }
      })}
    </>
  );
};

// CardTable.defaultProps = {
//   color: "light",
// };

// CardTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };
export default CardTable;
