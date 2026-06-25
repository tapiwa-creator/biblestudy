import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Flame, BookOpen, Trophy, Award, ArrowRight, Quote, Lock, Clock, Bookmark, ChevronRight } from 'lucide-react';

export default function Home() {
  const stats = [
    { id: 'streak', value: '0', label: 'Day streak', icon: <Flame size={18} className="text-[#dfb15b]" /> },
    { id: 'lessons', value: '0', label: 'Lessons done', icon: <BookOpen size={18} className="text-[#dfb15b]" /> },
    { id: 'overall', value: '0%', label: 'Overall', icon: <Trophy size={18} className="text-[#dfb15b]" /> },
    { id: 'xp', value: '0', label: 'XP earned', icon: <Award size={18} className="text-[#dfb15b]" /> },
  ];

  const achievementsList = [
    { name: 'First Steps', id: 'first_steps' },
    { name: 'Kindling Faith', id: 'kindling_faith' },
    { name: 'Scripture Scholar', id: 'scripture_scholar' },
    { name: 'Faithful Scribe', id: 'faithful_scribe' },
    { name: 'Treasured Word', id: 'treasured_word' },
    { name: 'Wholehearted', id: 'wholehearted' },
  ];

  const lessonsList = [
    {
      id: 1,
      tag: 'Foundations',
      category: 'Old Testament',
      duration: '25 min',
      title: 'In the Beginning',
      description: 'Walk through the opening chapters of Genesis and discover how God spoke the world into...',
      scripture: 'Genesis 1–2',
      progress: '0%',
      bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      tag: 'Foundations',
      category: 'Psalms & Wisdom',
      duration: '18 min',
      title: "The Shepherd's Care",
      description: "Meditate on David's beloved psalm and learn what it means to trust the Lord as your shepherd...",
      scripture: 'Psalm 23',
      progress: '0%',
      bgImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      tag: 'Intermediate',
      category: 'Gospels',
      duration: '22 min',
      title: 'Blessed Are You',
      description: 'Climb the mountain with Jesus and explore the surprising, upside-down blessings that open the...',
      scripture: 'Matthew 5:1–12',
      progress: '0%',
      bgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
    },
  ];

  return (
    <div className="space-y-10 pb-8 transition-colors duration-300">
      
      {/* Top Banner Card */}
      <section className="bg-[#172543] rounded-3xl text-white p-6 sm:p-10 shadow-xl border border-white/[0.04] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Section */}
        <div className="space-y-6 max-w-xl">
          <div className="flex items-center gap-2 text-[#dfb15b]">
            <Sparkles size={16} strokeWidth={2.5} className="animate-pulse" />
            <span className="text-[13px] font-semibold tracking-wide uppercase">
              Welcome back to your study
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-serif font-medium leading-tight">
              Continue: In the Beginning
            </h1>
            <p className="text-slate-350 text-sm sm:text-base leading-relaxed">
              Next up — Days of Creation · Genesis 1:1–31. Pick up right where you left off.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/lessons"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#dfb15b] hover:bg-[#d4a247] text-slate-950 font-bold rounded-xl transition-all hover:scale-[1.02]"
            >
              <span>Continue studying</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link
              to="/lessons"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-xl transition-all"
            >
              Browse all lessons
            </Link>
          </div>
        </div>

        {/* Right Section - Progress Grid */}
        <div className="bg-[#243355]/40 dark:bg-slate-950/20 border border-white/[0.04] rounded-2xl p-6 w-full lg:w-80 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-300">
              <span>Your journey</span>
              <span className="font-bold text-[#dfb15b]">0%</span>
            </div>
            <div className="w-full bg-[#1b2640] h-1.5 rounded-full overflow-hidden border border-white/[0.02]">
              <div className="bg-[#dfb15b] h-full rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.id} className="bg-[#243355]/30 dark:bg-slate-950/30 border border-white/[0.02] p-4 rounded-xl flex flex-col justify-center space-y-1 shadow-sm">
                {s.icon}
                <span className="text-xl font-bold text-white leading-none pt-1">{s.value}</span>
                <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Verse of the Day Card */}
      <section className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 flex items-start gap-4 sm:gap-6 shadow-sm transition-colors duration-300">
        <div className="p-3.5 bg-[#dfb15b]/10 dark:bg-[#dfb15b]/20 text-[#dfb15b] rounded-full flex-shrink-0">
          <Quote size={20} className="fill-current" />
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest block leading-none">
            Verse of the day
          </span>
          <h3 className="font-serif text-lg sm:text-xl text-slate-750 dark:text-slate-100 font-normal leading-relaxed italic">
            “Your word is a lamp to my feet and a light to my path.”
          </h3>
          <span className="text-xs text-slate-505 dark:text-slate-450 block font-semibold">
            Psalm 119:105
          </span>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-normal text-slate-800 dark:text-slate-100">
            Achievements
          </h2>
          <Link 
            to="/profile" 
            className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            View profile
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {achievementsList.map((ach) => (
            <div 
              key={ach.id} 
              className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 shadow-sm transition-colors duration-300"
            >
              <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-[#141c2e] border border-slate-200 dark:border-slate-850 flex items-center justify-center text-slate-400 dark:text-slate-550 shadow-inner">
                <Lock size={16} />
              </div>
              <span className="text-[11px] font-bold text-slate-600 dark:text-slate-350 leading-tight">
                {ach.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Your Lessons Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-normal text-slate-800 dark:text-slate-100">
            Your lessons
          </h2>
          <Link 
            to="/lessons" 
            className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            See all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lessonsList.map((lesson) => (
            <Link 
              key={lesson.id} 
              to="/lessons"
              className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-slate-350 dark:hover:border-slate-700 transition shadow-sm"
            >
              
              {/* Card Thumbnail Area */}
              <div className="relative h-44 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <img 
                  src={lesson.bgImage} 
                  alt={lesson.title} 
                  className="w-full h-full object-cover opacity-80 dark:opacity-65 group-hover:scale-105 transition duration-500" 
                />
                {/* Level Tag Label */}
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wider">
                  {lesson.tag}
                </span>
                {/* Bookmark Toggle */}
                <button 
                  onClick={(e) => { e.preventDefault(); }}
                  className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 p-1.5 rounded-full text-white backdrop-blur-sm transition"
                >
                  <Bookmark size={15} />
                </button>
              </div>

              {/* Card Meta Content Details Area */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 dark:text-slate-550">
                    <span className="bg-slate-100 dark:bg-[#1e293b] px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">
                      {lesson.category}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock size={12} />
                      <span>{lesson.duration}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-slate-800 dark:text-slate-100 group-hover:text-[#dfb15b] transition">
                    {lesson.title}
                  </h3>
                  
                  <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {lesson.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-450 dark:text-slate-500 font-semibold">
                  <span>{lesson.scripture}</span>
                  <span className="text-slate-400 dark:text-slate-550">{lesson.progress}</span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}