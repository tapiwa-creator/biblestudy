import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl transition-all duration-300">
        <div className="w-16 h-16 rounded-full bg-[#dfb15b]/10 flex items-center justify-center text-[#dfb15b] mx-auto mb-6">
          <BookOpen size={32} strokeWidth={2} />
        </div>
        
        <h1 className="text-3xl font-serif font-medium text-slate-800 dark:text-white mb-3">
          Voice of Prophecy
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
          Welcome to your Bible study journey. Discover the truths of Scripture one lesson at a time.
        </p>

        <Link
          to="/lessons"
          className="inline-flex items-center justify-center gap-2.5 w-full py-4 bg-[#dfb15b] hover:bg-[#d4a247] text-slate-950 font-bold rounded-2xl shadow-lg shadow-[#dfb15b]/20 transition-all hover:scale-[1.02]"
        >
          <span className="text-[15px] tracking-wide">Continue: In the Beginning</span>
          <ArrowRight size={18} strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}
