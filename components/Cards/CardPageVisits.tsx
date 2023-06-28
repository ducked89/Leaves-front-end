interface CardPageVisitsProps {
  title?: string;
  header?: string[];
  body?: any[];
}

const defaultData = {
  title: "Table title",
  header: ["PAGE NAME", "VISITORS", "UNIQUE USERS", "BOUNCE RATE"],
  body: [
    {
      pageName: "argon",
      visitor: 4569,
      unique: 340,
      bounce: "42,53%",
    },
  ],
};

const CardPageVisits = ({
  title = defaultData.title,
  header = defaultData.header,
  body = defaultData.body,
}: CardPageVisitsProps) => {
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
        <div className="px-4 py-3 mb-0 border-0 rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
              <h3 className="text-base font-semibold text-blueGray-700">
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            {header.length > 0 ? (
              <thead>
                <tr>
                  {header?.map((item: string, idx: number) => (
                    <th
                      className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
                      key={idx}
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
            ) : (
              ""
            )}

            {body.length > 0 ? (
              <tbody>
                {body?.map((item: any, idx: number) => (
                  <TrTable key={idx}>
                    <ThTable data={item} />
                  </TrTable>
                ))}
              </tbody>
            ) : (
              ""
            )}
          </table>
        </div>
      </div>
    </>
  );
};

const TrTable = ({ children }: { children: React.ReactNode }) => {
  return <tr>{children}</tr>;
};

const ThTable = ({ data }: any): any => {
  const keys = Object.keys(data);
  return (
    <>
      {keys?.map((item: string, index: number) => {
        return index === 0 ? (
          <th
            className={`p-4 px-6 text-xs ${
              index === 0 ? "text-left" : ""
            } align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap`}
            key={index}
          >
            {data[item]}
          </th>
        ) : (
          <td
            className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
            key={index}
          >
            {data[item]}
          </td>
        );
      })}
    </>
  );
};

export default CardPageVisits;
