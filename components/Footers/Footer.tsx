import { FC } from "react";

interface pageProps {
  title?: string;
  author?: string;
  href?: string;
}

const Footer: FC<pageProps> = ({
  title = "Leaves Management System",
  author = "Office National Identification (ONI)",
  href = "http://oni.gouv.ht/",
}: any) => {
  return (
    <>
      <footer className="relative pt-8 pb-6 bg-blueGray-200">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20 overflow-hidden pointer-events-none"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="fill-current text-blueGray-200"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container px-4 mx-auto">
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 mx-auto text-center md:w-4/12">
              <div className="py-1 text-sm font-semibold text-blueGray-500">
                Copyright © {new Date().getFullYear()} {title} by{" "}
                <a
                  href={href}
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  {author}
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
