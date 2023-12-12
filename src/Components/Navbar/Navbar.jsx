import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Auth Provider/AuthProvider";
import userPic from "../../assets/user.png";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logout");
        navigate("/login")
      })
      .catch((err) => toast.error("Error Occured"));
  };
  const links = (
    <>
      <li>
        {user && (
          <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Home</span>
            )}
          </NavLink>

        )}
      </li>
      <li>
        {user && (
          <NavLink to="/cart">
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Cart</span>
            )}
          </NavLink>

        )}
      </li>
      <li>
        {user && (
          <NavLink to="/favourite">
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Favourite</span>
            )}
          </NavLink>

        )}
      </li>
      <li>
        {user && (
          <NavLink to="/statistics">
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Statistics</span>
            )}
          </NavLink>

        )}
      </li>

      {user ? null : (
        <li>
          <NavLink to="/login">
            {({ isActive }) => (
              <span className={isActive ? "active" : ""}>Log in</span>
            )}
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar  bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2 active:underline"
            >
              {links}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Link to={"/"} className="btn btn-ghost normal-case text-xl">
              Donation
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-2">
          <div className="flex justify-center items-center gap-2 mx-2">
            {user?.photoURL ? (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            ) : (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={userPic} />
                </div>
              </label>
            )}
            {user?.displayName ? (
              <p className="font-semibold">{user.displayName}</p>
            ) : (
              ""
            )}
          </div>
          {user ? (
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
