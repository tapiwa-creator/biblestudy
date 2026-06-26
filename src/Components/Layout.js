import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Home, BookOpen, User, X, ChevronRight, Award } from 'lucide-react';

export default function Layout({ children }) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Lessons', path: '/lessons', icon: BookOpen },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  const isLinkActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white dark:bg-[#070b12] text-slate-800 dark:text-slate-100 transition-colors duration-300 flex flex-col">
      
      {/* Header component */}
      <Header toggleMobileSidebar={() => setMobileSidebarOpen(prev => !prev)} />

      {/* Main layout wrapper with smoked white background edge-to-edge */}
      <div className="flex-1 bg-slate-50 dark:bg-[#070b12] transition-colors duration-300">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex relative">
          
          {/* Mobile Sidebar Backdrop */}
          {mobileSidebarOpen && (
            <div 
              onClick={() => setMobileSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden transition-opacity"
            />
          )}

          {/* Mobile Sidebar Drawer */}
          <aside 
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-6 md:hidden transition-transform duration-300 ${
              mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-serif font-bold text-lg text-[#dfb15b]">Bible Study</span>
              <button 
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400"
                title="Close Menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                      isLinkActive(item.path)
                        ? 'bg-[#dfb15b]/10 text-[#dfb15b] font-semibold'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800/50 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-55" />
                  </Link>
                );
              })}
            </nav>
          </aside>

          {/* Content View */}
          <main className="flex-1 overflow-hidden flex flex-col">
            {children}
          </main>

        </div>
      </div>

      {/* Footer component */}
      <Footer />

    </div>
  );
}
