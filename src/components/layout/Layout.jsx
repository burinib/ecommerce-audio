import { Outlet } from "react-router-dom";
import FooterContainer from "./footer/FooterContainer";
import NavbarContainer from "./navbar/NavbarContainer";
import CardBringingContainer from "../common/cardBringing/CardBringingContainer";

const Layout = () => {
  return (
    <>
      <div>
        <NavbarContainer />
      </div>
      <div>
        <Outlet />
      </div>

      <div>
        <FooterContainer />
      </div>
    </>
  );
};

export default Layout;
