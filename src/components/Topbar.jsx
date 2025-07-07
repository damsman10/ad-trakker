import DarkModeToggle from './DarkModeToggle';
import { Search } from 'lucide-react';
import ppic from '../assets/ppic.jpg';

const Topbar = () => {
  return (
    <header className="h-[5rem] flex items-center justify-between px-6 bg-white dark:bg-[#1E293B] border-b border-gray-200 dark:border-gray-700">
      
      <div className="flex-1 flex justify-center">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search campaigns..."
            className="w-full pl-12 pr-4 py-3 text-base rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300"
          />
        </div>
      </div>

      {/* CTA, Toggle & Avatar */}
      <div className="flex items-center gap-4 ml-6">
        <button className="bg-[#3D78DA] text-white px-4 py-3 rounded-md text-sm hover:bg-[#346dca]">
          + New Campaign
        </button>
        <DarkModeToggle />
        <div className="w-9 h-9 rounded-full bg-gray-400 bg-cover bg-center" style={{backgroundImage: `URL(${ppic})`}}>
          {/* profile image */}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
