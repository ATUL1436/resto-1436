import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar({ isOpen, setIsSidebarOpen }) {
  return (
    <>
      {/* 🔥 Toggle button always visible */}
      <button
        className={`sidebar-toggle-edge ${isOpen ? "open" : "closed"}`}
        onClick={() => setIsSidebarOpen(prev => !prev)}
      >
        {isOpen ? "⮜" : "⮞"}
      </button>

      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <NavLink to="/" end>
              <span className="icon">🏠</span>
              <span className="text">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/menu">
              <span className="icon">📋</span>
              <span className="text">Menu</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders">
              <span className="icon">🧾</span>
              <span className="text">Orders</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/kitchen">
              <span className="icon">👨‍🍳</span>
              <span className="text">Kitchen</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}
