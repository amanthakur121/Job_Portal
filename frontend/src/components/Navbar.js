import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer">

            <img
              src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
              alt="logo"
              className="w-8 h-8"
            />

            <h1 className="text-2xl font-bold text-blue-600">
              JobPortal
            </h1>

          </div>
        </Link>

        {/* Navigation Links */}

        <div className="flex gap-6 font-medium">

          <Link to="/jobs" className="hover:text-blue-600">
            Jobs
          </Link>

          <Link to="/postjob" className="hover:text-blue-600">
            Post Job
          </Link>

          <Link to="/login" className="hover:text-blue-600">
            Login
          </Link>

          <Link to="/register" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            Register
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;