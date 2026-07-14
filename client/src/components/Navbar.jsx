import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FilePlus2,
  History,
  ShieldCheck,
} from "lucide-react";

function Navbar() {
  const navItem = ({ isActive }) =>
    `flex flex-col items-center justify-center flex-1 py-2 transition ${
      isActive ? "text-blue-600" : "text-gray-500"
    }`;

  return (
    <>
      {/* Top App Bar */}
      <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="bg-white/20 p-2 rounded-full">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h1 className="font-semibold text-lg leading-tight">
              JR Safety & Security
            </h1>
            <p className="text-xs text-blue-100">
              Iyyappanthangal, Chennai
            </p>
          </div>
        </div>
      </header>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex z-50">

        <NavLink
          to="/dashboard"
          className={navItem}
        >
          <LayoutDashboard size={22} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>

        <NavLink
          to="/"
          className={navItem}
        >
          <FilePlus2 size={22} />
          <span className="text-xs mt-1">New Bill</span>
        </NavLink>

        <NavLink
          to="/history"
          className={navItem}
        >
          <History size={22} />
          <span className="text-xs mt-1">History</span>
        </NavLink>

      </nav>
    </>
  );
}

export default Navbar;