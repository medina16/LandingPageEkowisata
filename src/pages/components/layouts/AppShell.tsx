import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer"
import Slide from "../elements/Slide/Slide";
import { useRouter } from "next/router";
import { Rubik } from "next/font/google";
import MedSos from "../elements/MedSos/MedSos";

const rubik_init = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rubik",
});

type AppShellProps = {
  children: React.ReactNode;
};

const disableNavHeaderFooterMedsos = ["/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <div className={rubik_init.variable}>
      {!disableNavHeaderFooterMedsos.includes(pathname) && (
        <div className="rubik">
          <NavBar /> &&
          <header>
            <Slide />
          </header>
          <MedSos/>
        </div>
      )}

      

      <main>{children}</main>
      {!disableNavHeaderFooterMedsos.includes(pathname) && (
      <footer className="rubik">
        <Footer />
      </footer>
      )}
    </div>
  );
};
export default AppShell;
