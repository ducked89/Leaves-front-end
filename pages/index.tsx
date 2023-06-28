// import { Inter } from 'next/font/google'
import Footer from "@/components/Footers/Footer";
import IndexNavbar from "@components/Navbars/IndexNavbar";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })
// ${inter.className}`}

export default function Home() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="relative flex items-center h-screen pt-16 header max-h-860-px">
        <div className="container flex flex-wrap items-center mx-auto">
          <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 sm:pt-0">
              <h2 className="text-4xl font-semibold text-blueGray-600">
                Leaves Management System - A beautiful extension for ONI.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                LMS is the best solution for managing the human resources of{" "}
                <a
                  href="#"
                  className="text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ONI{" "}
                </a>
                organization. In this module, you can manage all leave
                applications. Also, you can add a leave type. As well as, you
                can manage all holidays and weekly holidays.
              </p>
              <div className="mt-12">
                {/* <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                  target="_blank"
                  className="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started focus:outline-none bg-blueGray-400 active:bg-blueGray-500 hover:shadow-lg"
                >
                  Get started
                </a> */}
                <Link
                  href="/login"
                  className="px-6 py-4 mb-1 ml-1 mr-1 text-sm font-bold text-white uppercase rounded shadow outline-none github-star focus:outline-none bg-blueGray-700 active:bg-blueGray-600 hover:shadow-lg"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 right-0 w-10/12 pt-16 -mt-48 b-auto sm:w-6/12 sm:mt-0 max-h-860-px"
          src="/pattern_nextjs.png"
          alt="..."
        />
      </section>
      <Footer />
    </>
  );
}
