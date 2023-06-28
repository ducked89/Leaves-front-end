import FooterSmall from "@components/Footers/FooterSmall";
import { FC } from "react";

interface layoutProps {
  children: React.ReactElement;
}

const AuthLayout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full min-h-screen py-40">
          <div
            className="absolute top-0 w-full h-full bg-no-repeat bg-blueGray-800 bg-full"
            style={{
              backgroundImage: "url('/login_bg.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
};

export default AuthLayout;
