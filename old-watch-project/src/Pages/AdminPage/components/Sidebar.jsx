// src/Pages/AdminPage/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <nav>
        <NavLink to="/admin/dashboard" className="sidebar-link">
          Dashboard
        </NavLink>
        <NavLink to="/admin/users" className="sidebar-link">
          Users
        </NavLink>
        <NavLink to="/admin/transactions" className="sidebar-link">
          Transactions
        </NavLink>
        <NavLink to="/admin/disputes" className="sidebar-link">
          Disputes
        </NavLink>
        <NavLink to="/admin/security" className="sidebar-link">
          Security
        </NavLink>
      </nav>
    </aside>
  );
}
