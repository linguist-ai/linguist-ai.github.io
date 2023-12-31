import { Outlet } from "react-router-dom";
import { Header } from "../components/common/layout/header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
