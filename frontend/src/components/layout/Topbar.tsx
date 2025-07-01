const Topbar = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <header
      className={`fixed top-0 h-16 bg-white border-b flex items-center p-8 z-20 transition-all duration-200 ${
        collapsed ? 'left-16' : 'left-64'
      } right-0`}
    >
      <div className="flex-1">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="border rounded px-3 py-1 text-sm">June 22 2025 ▼</button>
        <img
          src="https://i.pravatar.cc/36"
          alt="avatar"
          className="rounded-full w-9 h-9"
        />
      </div>
    </header>
  );
};

export default Topbar;
