"use client";

import { useState } from "react";
import ChatScreen from "@/Components/ChatScreen";
import Sidebar from "@/Components/Sidebar";
import BottomBar from "@/Components/BottomBar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Main content area: sidebar + chat */}
      <div className="flex flex-1 min-h-0 p-2 md:px-2 md:py-3">
        {/* Sidebar panel */}
        <Sidebar isOpen={sidebarOpen} />

        {/* Chat content */}
        <ChatScreen isOpen={sidebarOpen} />
      </div>

      {/* Full-width bottom bar */}
      <BottomBar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
    </div>
  );
}
