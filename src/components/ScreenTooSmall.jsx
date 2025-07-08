import { useEffect, useState } from 'react';

const ScreenTooSmall = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 text-white flex items-center justify-center text-center px-4 h-screen overflow-hidden">
      <div>
        <h2 className="text-2xl font-bold mb-2">Unsupported Screen Size</h2>
        <p className="text-lg">
          This application is only available on desktop devices. Please switch to a larger screen to continue.
        </p>
      </div>
    </div>
  );
};

export default ScreenTooSmall;
