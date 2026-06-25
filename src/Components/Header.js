import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Home, 
  User, 
  Search, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

export default function Header({ toggleMobileSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const isLinkActive = (path) => location.pathname === path;

  const handleLogout = () => {
    setShowLogoutConfirm(false);
    // Add any necessary authentication clear-out states here
    console.log("User logged out");
    navigate('/'); // Redirect back to landing/auth view
  };

  return (
    <>
      <nav className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/80 px-6 py-[14px] flex items-center justify-between select-none transition-colors duration-300">
        
        {/* Brand Section */}
        <div className="flex items-center gap-[14px]">
          <button 
            onClick={toggleMobileSidebar}
            className="md:hidden p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Navigation Menu"
          >
            <Menu size={20} />
          </button>
          
          <Link to="/" className="flex items-center gap-[14px] group">
            <div className="w-10 h-10 rounded-full bg-[#dfb15b]/10 dark:bg-[#dfb15b]/20 flex items-center justify-center text-[#dfb15b] shadow-inner transition-transform group-hover:scale-105 duration-300">
              <BookOpen size={20} strokeWidth={2.2} />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="text-[21px] font-serif font-medium tracking-wide text-slate-800 dark:text-white transition-colors">
                Voice of Prophecy
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-400 mt-[3px] transition-colors">
                Bible Study
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Tabs */}
        <div className="hidden md:flex items-center bg-slate-100/80 dark:bg-slate-950/60 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/50 transition-colors">
          <Link 
            to="/dashboard" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${
              isLinkActive('/dashboard')
                ? 'bg-white dark:bg-slate-850 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Home size={15} strokeWidth={2.2} />
            Dashboard
          </Link>
          <Link 
            to="/lessons" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${
              isLinkActive('/lessons')
                ? 'bg-white dark:bg-slate-850 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen size={15} strokeWidth={2.2} />
            Lessons
          </Link>
          <Link 
            to="/profile" 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all ${
              isLinkActive('/profile')
                ? 'bg-white dark:bg-slate-850 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <User size={15} strokeWidth={2.2} />
            Profile
          </Link>
        </div>

        {/* Utility Actions */}
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <button className="hover:text-slate-850 dark:hover:text-slate-200 transition-colors p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <Search size={18} strokeWidth={2} />
          </button>
          
          {/* Logout Action Trigger Button */}
          <button 
            onClick={() => setShowLogoutConfirm(true)}
            className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30"
            title="Log Out"
          >
            <LogOut size={18} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Confirmation Modal Overlay */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl transition-all">
            
            {/* Modal Cancel Top Right Cross */}
            <button 
              onClick={() => setShowLogoutConfirm(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Modal Content Headers */}
            <div className="text-center mt-2">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
                <LogOut size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">
                Confirm Log Out
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-sans mt-2">
                Are you sure you want to log out?
              </p>
            </div>

            {/* Modal Layout CTAs */}
            <div className="mt-6 flex flex-col gap-2 sm:flex-row-reverse sm:gap-3">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full inline-flex justify-center rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors font-sans"
              >
                Log Out
              </button>
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(false)}
                className="w-full inline-flex justify-center rounded-xl bg-slate-100 dark:bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-sans border border-slate-200 dark:border-slate-700"
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}