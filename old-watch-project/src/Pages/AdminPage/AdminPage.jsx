import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { UserManagement } from "./UserManagement";
import { Disputes } from "./Disputes";
import { Security } from "./Security";
import { SystemSettings } from "./SystemSettings";
import "./AdminPage.css";

export function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "users":
        return <UserManagement />;
      case "disputes":
        return <Disputes />;
      case "security":
        return <Security />;
      case "system":
        return <SystemSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <main className="admin-container">
      <div className="admin-tabs">
        <button
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          Tổng quan
        </button>
        <button
          className={activeTab === "users" ? "active" : ""}
          onClick={() => setActiveTab("users")}
        >
          Quản lý người dùng
        </button>
        <button
          className={activeTab === "disputes" ? "active" : ""}
          onClick={() => setActiveTab("disputes")}
        >
          Giám sát giao dịch
        </button>
        <button
          className={activeTab === "security" ? "active" : ""}
          onClick={() => setActiveTab("security")}
        >
          Bảo mật
        </button>
        <button
          className={activeTab === "system" ? "active" : ""}
          onClick={() => setActiveTab("system")}
        >
          Hệ thống
        </button>
      </div>

      <div className="admin-content">{renderContent()}</div>
    </main>
  );
}
