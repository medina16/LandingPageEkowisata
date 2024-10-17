import NavBar from "./NavBar/NavBar";
import Footer from "./Footer";
import Slide from "../elements/Slide/Slide";

type AppShellProps = {
  children: React.ReactNode;
};
const AppShell = (props: AppShellProps) => {
  const { children } = props;
  return (
    <div>
      <NavBar />
      <header style={{marginTop: "47px" }}>
      <Slide/>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default AppShell;
