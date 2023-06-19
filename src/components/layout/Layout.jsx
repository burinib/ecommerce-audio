import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavbarContainer from "./navbar/NavbarContainer";

const Layout = () => {
  return (
    <>
      <div style={{ height: "60px", backgroundColor: "red" }}>
        <NavbarContainer />
      </div>
      <div
        style={{
          minHeight: "calc(100vh - 60px - 200px)",
          backgroundColor: "blue",
        }}
      >
        <Outlet />
      </div>
      <div style={{ height: "200px", backgroundColor: "orange" }}>
        <FooterContainer />
      </div>
    </>
  );
};

export default Layout;
