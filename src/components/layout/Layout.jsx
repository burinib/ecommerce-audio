import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavbarContainer from "./navbar/NavbarContainer";

const Layout = () => {
  return (
    <>
      <div style={{ height: "60px" }}>
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
      <div style={{ height: "200px", backgroundColor: "#0E0E0E" }}>
        <FooterContainer />
      </div>
    </>
  );
};

export default Layout;
