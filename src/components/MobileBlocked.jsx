const MobileBlocked = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 text-white flex items-center justify-center text-center px-4">
      <div>
        <h2 className="text-2xl font-bold mb-3">Unsupported Screen Size</h2>
        <p className="text-lg">This app is only accessible on desktop devices. Please use a larger screen.</p>
      </div>
    </div>
  );
};

export default MobileBlocked;
