import NavBar from "./NavBar/NavBar";
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

const disableNavHeaderMedsos = ["/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();

  return (
    <div className={rubik_init.variable}>
      {!disableNavHeaderMedsos.includes(pathname) && (
        <div className="rubik">
          <NavBar />
          
          <MedSos />
        </div>
      )}
      <main>{children}</main>
    </div>
  );
};
export default AppShell;
