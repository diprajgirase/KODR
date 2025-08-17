import React, { useState } from 'react';
import AppRouter from './Router/AppRouter';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[#0F0F0F] text-white">
      <Navbar onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="flex-1 overflow-y-auto">
          <AppRouter />
        </main>
      </div>
    </div>
  );
};

export default App;