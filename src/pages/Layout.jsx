import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="border-8 border-red-300  z- -100">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>Home
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
