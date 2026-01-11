import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../styles/Layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="app-layout">
      {/* FULL WIDTH HEADER */}
      <Header
      isSidebarOpen={isSidebarOpen}
      setIsSidebarOpen={setIsSidebarOpen} />

      {/* 🔥 ONLY THIS PART SCROLLS */}
      <div className="scroll-wrapper">
        <div className="content-area">
          <Sidebar isOpen={isSidebarOpen}
           setIsSidebarOpen={setIsSidebarOpen} />
          <main className="page-content">
            <Outlet />
          </main>
        </div>

        {/* 🔥 FULL WIDTH FOOTER (LIKE HEADER) */}
        <Footer />
      </div>
    </div>
  );
}
