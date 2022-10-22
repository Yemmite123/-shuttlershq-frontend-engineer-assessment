import React, { useState } from 'react';
import './App.css';
import Aside from './Components/Aside';
import AsideSm from './Components/AsideSm';
import Navbar from './Components/Navbar';
import HomePage from './pages/Home';

function App() {
  const [sidebarActive, setSideBarActive] = useState(false);

  return (
    <div className='app'>
      <Navbar toggleSideBar={setSideBarActive} />
      <div className='flex'>
        <Aside />
        <AsideSm isActive={sidebarActive} onClose={setSideBarActive} />
        <main className="App overflow-x-hidden relative flex-1 overflow-auto h-screen">
          <HomePage />
        </main>
      </div>
    </div>
  );
}

export default App;
