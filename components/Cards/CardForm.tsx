// components
interface CardFormProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  header?: string[];
  body?: any[];
}

const defaultData = {
  title: "Form title",
  subtitle: "Form title",
  children: (
    <>
      <p>Hello world</p>
    </>
  ),
  // header: ["PAGE NAME", "VISITORS", "UNIQUE USERS", "BOUNCE RATE"],
  // body: [
  //   {
  //     pageName: "argon",
  //     visitor: 4569,
  //     unique: 340,
  //     bounce: "42,53%",
  //   },
  // ],
};

const CardForm = ({
  title = defaultData.title,
  subtitle = defaultData.subtitle,
  children = defaultData.children,
}: CardFormProps) => {
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg">
        <div className="px-4 py-2 mb-0 border-0 rounded-t">
          <div className="flex flex-wrap items-center">
            <div className="relative flex-1 flex-grow w-full max-w-full px-4">
              <h3 className="text-base font-semibold text-blueGray-700">
                {title}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <div className="mb-3 font-bold text-center text-blueGray-400">
            <small>{subtitle}</small>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default CardForm;
