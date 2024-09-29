import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
// import useAdmin from "../../Hooks/useAdmin";
// import useTeacher from "../../Hooks/useTeacher";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  // const [isAdmin] = useAdmin();
  // const [isTeacher] = useTeacher();
  const navigate = useNavigate();

  const navLinks = (
    <div className="md:space-x-5  md:space-y-0 flex flex-col md:flex-row items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#e67e22] md:text-lg font-medium text-center" : "text-center font-medium"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/public-classes"
        className={({ isActive }) =>
          isActive ? "text-[#e67e22] md:text-lg font-medium text-center" : "text-center font-medium"
        }
      >
        All Classes
      </NavLink>
    </div>
  ); 

  const handleSignOut = () => {
    signOutUser();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Sign out successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <div className="navbar z-10 max-w-7xl bg-[#686D76] bg-opacity-25">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-700 bg-opacity-90 rounded-box w-36"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <div className="w-12">
            <img src="/learnEase.png" alt="" />
          </div>
          <Link to="/">
            <button className="text-xl font-bold">learnEase</button>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end">

        <div>
          {user ? (
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle rounded-full">
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-gray-700 bg-opacity-65 rounded-box w-36 text-white"
            >
              <li>
                <p>{user?.displayName}</p>
              </li>
              <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
                {/* {
                  user && isAdmin && <NavLink to="/dashboard/admin-home">Dashboard</NavLink>
                } */}
                {/* {
                  user && !isAdmin && !isTeacher && <NavLink to="/dashboard/user-home">Dashboard</NavLink>
                } */}
                {/* {
                  user && isTeacher && <NavLink to="/dashboard/user-home">Dashboard</NavLink>
                } */}
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-ghost bg-[#e67e22] text-white hover:text-black"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
          ) : (
            <Link to="/sign-in">
              <button className="btn btn-ghost bg-[#e67e22] text-white hover:text-black">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
