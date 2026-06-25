import React from 'react';
import { Trophy, Award, Flame, BookOpen, Shield, RefreshCw } from 'lucide-react';

export default function Profile() {
  const stats = [
    {
      id: 'streak',
      value: '0',
      label: 'Day Streak',
      icon: <Flame className="h-6 w-6 text-[#dfb15b]" />
    },
    {
      id: 'lessons',
      value: '0',
      label: 'Lessons Done',
      icon: <BookOpen className="h-6 w-6 text-[#dfb15b]" />
    },
    {
      id: 'xp',
      value: '0',
      label: 'Total XP',
      icon: <Trophy className="h-6 w-6 text-[#dfb15b]" />
    },
    {
      id: 'badges',
      value: '0',
      label: 'Badges',
      icon: <Award className="h-6 w-6 text-[#dfb15b]" />
    }
  ];

  const curriculumItems = [
    { title: 'In the Beginning', progress: '0%' },
    { title: "The Shepherd's Care", progress: '0%' },
    { title: 'Blessed Are You', progress: '0%' },
    { title: 'Fruit of the Spirit', progress: '0%' }
  ];

  const achievements = [
    { name: 'First Steps', desc: 'Complete your first section' },
    { name: 'Kindling Faith', desc: 'Reach a 3-day study streak' },
    { name: 'Scripture Scholar', desc: 'Finish a full lesson' },
    { name: 'Faith Scribe', desc: 'Write your first study note' },
    { name: 'Treasured Word', desc: 'Bookmark a lesson' },
    { name: 'Wholehearted', desc: 'Complete all 4 lessons' }
  ];

  return (
    <div className="space-y-8 pb-8 transition-colors duration-300">
      
      {/* Identity / Profile Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="h-16 w-16 bg-[#dfb15b] text-[#070b12] rounded-full flex items-center justify-center font-serif text-2xl font-bold shadow">
            L
          </div>
          <div>
            <h1 className="font-serif text-3xl font-normal tracking-wide text-slate-800 dark:text-slate-100">Your Journey</h1>
            <p className="text-sm font-semibold text-slate-450 dark:text-slate-400 mt-0.5">Friend in Faith</p>
          </div>
        </div>
        <button className="flex items-center gap-2 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-xs font-semibold px-4 py-2.5 rounded-xl transition text-slate-655 dark:text-slate-350 shadow-sm">
          <RefreshCw size={14} className="opacity-70" />
          <span>Reset progress</span>
        </button>
      </div>

      {/* Grid Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 shadow-sm"
          >
            <div className="p-3 bg-[#dfb15b]/10 dark:bg-[#dfb15b]/20 rounded-2xl">
              {stat.icon}
            </div>
            <div className="space-y-0.5">
              <div className="text-3xl font-serif font-bold text-slate-800 dark:text-slate-100">{stat.value}</div>
              <div className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Overall Progress Track Section */}
      <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 space-y-6 shadow-sm">
        <div>
          <h2 className="font-serif text-xl font-normal text-slate-800 dark:text-slate-100 tracking-wide">Overall Progress</h2>
          <div className="flex justify-between items-center text-xs font-semibold text-slate-450 dark:text-slate-500 mt-4">
            <span>Curriculum completion</span>
            <span className="font-bold text-[#dfb15b]">0%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-[#141c2e] h-2 rounded-full mt-2 overflow-hidden border border-slate-200/50 dark:border-slate-800/50">
            <div className="bg-[#dfb15b] h-full rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {curriculumItems.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-between border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#070b12]/50 px-5 py-3.5 rounded-xl text-sm font-semibold"
            >
              <span className="text-slate-700 dark:text-slate-200">{item.title}</span>
              <span className="text-slate-400 dark:text-slate-550 text-xs font-bold">{item.progress}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements List View Section */}
      <div className="space-y-4">
        <h2 className="font-serif text-xl font-normal tracking-wide text-slate-800 dark:text-slate-100">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((ach, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl flex items-center space-x-4 opacity-60 select-none shadow-sm"
            >
              <div className="h-11 w-11 rounded-full bg-slate-50 dark:bg-[#141c2e] border border-slate-200 dark:border-slate-800 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-550 shadow-inner">
                <Shield size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-750 dark:text-slate-200 tracking-wide">{ach.name}</h3>
                <p className="text-xs text-slate-450 dark:text-slate-500 mt-0.5 leading-relaxed">{ach.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}