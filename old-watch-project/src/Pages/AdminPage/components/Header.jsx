import "./Header.css";

export function Header({ title }) {
  return (
    <header className="admin-header">
      <h1>{title}</h1>
      <div className="header-actions">
        <button className="btn">Settings</button>
        <button className="btn">Logout</button>
      </div>
    </header>
  );
}
