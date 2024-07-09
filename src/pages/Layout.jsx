import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <Link to="/"></Link>
        <Link to="/cart"></Link>
        <Link to="/checkoutone"></Link>
        <Link to="/checkouttwo"></Link>
        <Link to="/CheckOutThree"></Link>
      </div>

      <Outlet />
    </>
  );
}

export default Layout