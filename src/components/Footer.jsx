const Footer = () => {
  return (
    <footer className="text-xs text-gray-500 dark:text-gray-400 text-center py-8 border-t border-gray-200 dark:border-gray-700">
      <span>© {new Date().getFullYear()} AdTrakker</span> —{' '}
      <a href="#" className="hover:underline">Privacy Policy</a> —{' '}
      <a href="#" className="hover:underline">Help</a> —{' '}
      <a href="#" className="hover:underline">Release Notes</a> —{' '}
      <a href="#" className="hover:underline">Blog</a> —{' '}
      <a href="#" className="hover:underline">Ads Status Dashboard</a>
    </footer>
  );
};

export default Footer;
