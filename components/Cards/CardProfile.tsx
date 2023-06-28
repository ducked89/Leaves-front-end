// components

import { Folder, FolderArchive, Pencil } from "lucide-react";

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col w-full min-w-0 mt-16 mb-6 break-words bg-white rounded-lg shadow-xl">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center w-full px-4">
              <div className="relative">
                <img
                  alt="..."
                  src="/logo.png"
                  className="absolute h-auto -m-20 -ml-20 align-middle border-none rounded-full shadow lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 mt-8 text-center">
              <div className="flex justify-center py-4 pt-8 lg:pt-4">
                {/* <div className="p-3 mr-4 text-center">
                  <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                    2
                  </span>
                  <span className="text-sm text-blueGray-400">Upload logo</span>
                </div>
                <div className="p-3 mr-4 text-center">
                  <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div> */}
                <div className="p-4 text-center lg:mr-4">
                  <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                    {/* 89 */}
                  </span>
                  <span className="text-sm text-blueGray-700">
                    Upload logo
                    <Pencil size={18} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pb-10 mt-2 text-center border-b border-blueGray-200">
            <h3 className="mb-2 text-xl font-semibold leading-normal text-blueGray-700">
              Fiscal Year
            </h3>
            <div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400">
              <i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400"></i>{" "}
              For this Exercice
            </div>
            <div className="flex mt-10 mb-2 text-blueGray-600">
              <Folder className="mr-2 text-lg text-blueGray-400" size={18} />
              Fiscal start - 10/01/2022
            </div>
            <div className="flex mb-2 text-blueGray-600">
              <FolderArchive
                className="mr-2 text-lg text-blueGray-400"
                size={18}
              />
              Fiscal end - 09/30/2023
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
