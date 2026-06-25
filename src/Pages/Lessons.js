import React, { useState } from 'react';
import { BookOpen, Search, Clock, Bookmark, ChevronRight } from 'lucide-react';

export default function ExploreLessons() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterCategories = ['All', 'Old Testament', 'Psalms & Wisdom', 'Gospels', 'Epistles'];

  const lessonsList = [
    {
      id: 1,
      tag: 'Foundations',
      category: 'Old Testament',
      duration: '25 min',
      title: 'In the Beginning',
      description: 'Walk through the opening chapters of Genesis and discover how God spoke the world into existence.',
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
      description: "Meditate on David's beloved psalm and learn what it means to trust the Lord as your shepherd.",
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
      description: 'Climb the mountain with Jesus and explore the surprising, upside-down blessings that open the Kingdom.',
      scripture: 'Matthew 5:1–12',
      progress: '0%',
      bgImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80'
    },
  ];

  const filteredLessons = lessonsList.filter((lesson) => {
    const matchesFilter = selectedFilter === 'All' || lesson.category === selectedFilter;
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          lesson.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lesson.scripture.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-8 transition-colors duration-300">
      
      {/* Page Header */}
      <div className="space-y-3 max-w-3xl">
        <h1 className="font-serif text-4xl font-normal tracking-wide text-slate-800 dark:text-slate-100">
          Explore Lessons
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
          Journey through Scripture one study at a time. Search a topic or filter by collection to find your next reading.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-slate-500">
          <Search size={20} strokeWidth={2} />
        </span>
        <input 
          type="text" 
          placeholder="Search lessons, books, or topics..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-250 placeholder-slate-400 dark:placeholder-slate-500 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-slate-400 dark:focus:border-slate-700 text-sm transition shadow-sm"
        />
      </div>

      {/* Capsule Filters Bar */}
      <div className="flex flex-wrap items-center gap-2.5">
        {filterCategories.map((category) => {
          const isSelected = selectedFilter === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-150
                ${isSelected 
                  ? 'bg-[#dfb15b] text-slate-950 border-[#dfb15b] shadow-sm' 
                  : 'bg-white dark:bg-[#141c2e] text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800/80 hover:text-slate-800 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-[#1a253d]'
                }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Lessons Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {filteredLessons.map((lesson) => (
          <div 
            key={lesson.id} 
            className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-slate-350 dark:hover:border-slate-700 transition shadow-sm"
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
              <button className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 p-1.5 rounded-full text-white backdrop-blur-sm transition">
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
                <span className="text-[#dfb15b] font-bold flex items-center gap-0.5">
                  Start Study <ChevronRight size={13} strokeWidth={2.5} className="mt-0.5" />
                </span>
              </div>
            </div>

          </div>
        ))}
        {filteredLessons.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-450 dark:text-slate-500">
            No studies found matching your criteria.
          </div>
        )}
      </div>

    </div>
  );
}