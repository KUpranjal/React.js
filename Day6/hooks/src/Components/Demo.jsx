import { useState } from "react";

const Demo = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-black text-white h-screen" : "bg-white text-black h-screen"}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 m-2 border rounded"
      >
        {darkMode ? "☀️" : "🌑"}
      </button>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <div
          onMouseEnter={() => setShowSidebar(true)}
          onMouseLeave={() => setShowSidebar(false)}
          className={`border bg-yellow-200 h-[100vh] transition-all duration-300 ${
            showSidebar ? "w-[15vw]" : "w-[5vw]"
          }`}
        >
          Sidebar
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4">
          <h1 className="text-2xl">Main Content</h1>
        </div>
      </div>
    </div>
  );
};

export default Demo;
