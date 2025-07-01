import { Link, useLocation } from 'react-router-dom';
import SiteLogo from '../../assets/icons/SiteLogo.svg';
import SiteIcon from '../../assets/icons/favicon.svg';
//import { LayoutDashboard, UsersRound as ManageUsersIcon, Hospital as ClinicIcon, FileClock } from 'lucide-react';
import DashboardIcon from '../../assets/icons/Dashboard-icon.svg';
import UsersIcon from '../../assets/icons/Users-icon.svg';
import ClinicsIcon from '../../assets/icons/hospital.svg';
import BillingIcon from '../../assets/icons/file-clock.svg';
import ArrowLeft from '../../assets/icons/ArrowLeft.svg';
import ArrowRight from '../../assets/icons/ArrowRight.svg';

const Sidebar = ({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (v: boolean) => void }) => {
  const { pathname } = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/', icon: DashboardIcon},
    { label: 'Users', path: '/users', icon: UsersIcon },
    { label: 'Clinics', path: '/clinics', icon: ClinicsIcon },
    { label: 'Billing', path: '/billing', icon: BillingIcon }
  ];

  return (
    <aside className={`fixed top-0 left-0 h-screen bg-white border-r transition-all duration-200 ${collapsed ? 'w-16' : 'w-64'}`}>
      <div className="h-16 flex items-center p-4">
        {collapsed ? (
          <img src={SiteIcon} className="w-7" alt="Logo" />
        ) : (
          <img src={SiteLogo} className="w-28" alt="Logo" />
        )}
      </div>

      <nav className={`flex flex-col ${collapsed ? 'space-y-2 p-2' : 'space-y-2 p-2'}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 ${
              pathname === item.path ? 'bg-green-100 text-black-700' : 'text-gray-700'
            }`}
          >
            <img src={item.icon} alt={`${item.label} icon`} className="w-5 h-5" />
            {!collapsed && <span className="text-sm">{item.label}</span>}
          </Link>
        ))}
      </nav>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`absolute bottom-4 p-2 ${
          collapsed ? 'left-1/2 transform -translate-x-1/2 p-2' : 'left-4 right-4 px-3 py-2'
        } text-gray-500 hover:bg-gray-100 flex items-center gap-2 rounded`}
      >
        <img
          src={collapsed ? ArrowRight : ArrowLeft}
          alt="Toggle collapse"
          className="w-4 h-4"
        />
        {!collapsed && <span className="text-sm">Collapse</span>}
      </button>
    </aside>
  );
};

export default Sidebar;
