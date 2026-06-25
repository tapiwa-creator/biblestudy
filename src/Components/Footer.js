import React from 'react';
import { BookOpen, Globe, Heart, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#070b12] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Side: Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#dfb15b]/10 dark:bg-[#dfb15b]/20 flex items-center justify-center text-[#dfb15b]">
              <BookOpen size={16} strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-medium text-slate-800 dark:text-slate-200 leading-none">
                Voice of Prophecy
              </span>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-[2px]">
                © {new Date().getFullYear()} All rights reserved.
              </span>
            </div>
          </div>

          {/* Right Side: Credits Link & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            
            {/* Socials & Made With Love */}
            <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
              <span className="text-xs inline-flex items-center gap-1.5 font-medium">
               
              </span>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
              <a href="#" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                
              </a>
              <a href="#" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                
              </a>
            </div>

            <div className="hidden md:block h-4 w-px bg-slate-200 dark:bg-slate-800" />

            {/* Developed By Link (Far opposite corner) */}
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Developed by{' '}
              <a 
                href="https://elevatelt.co.zw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#dfb15b] hover:underline transition-all font-semibold"
              >
                elevateLT
              </a>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}