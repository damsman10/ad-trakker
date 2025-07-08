import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Campaigns from './pages/Campaigns';
import Reports from './pages/Reports';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import MobileBlocked from './components/MobileBlocked'; // You will create this

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 1024);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  if (isMobile) {
    return <MobileBlocked />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen dark:bg-[#1E293B] dark:text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-64">
          <Topbar />

          <main className="flex-1 p-6 bg-[#f1f3f4] dark:bg-gray-700">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
