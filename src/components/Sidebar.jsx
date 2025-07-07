import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Megaphone, BarChart4 } from 'lucide-react';


const Sidebar = () => {
  const baseClass = "block px-4 py-2 rounded-[8px] hover:bg-[#b9cff2] hover:text-[#303D54] transition-colors";
  const activeClass = "bg-[#3D78DA]";

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-gray-900 border-r border-gray-700">
      <div className="p-4 text-[2rem] font-bold text-white w-[90%] m-auto">
        Ad Trakker
      </div>

      <nav className="mt-12 text-white w-[90%] m-auto">
        <ul className="space-y-1">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""}`
              }
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard size={18} />
                Home
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/campaigns"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""}`
              }
            >
              <div className="flex items-center gap-3">
                <Megaphone size={18} />
                Campaigns
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""}`
              }
            >
              <div className="flex items-center gap-3">
                <BarChart4 size={18} />
                Reports
              </div>
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `${baseClass} ${isActive ? activeClass : ""}`
              }
            >
              Settings
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
