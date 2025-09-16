import { useState } from "react";
import "../styles/SupportTabContainer.css";

export function SupportTabContainer({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div className="support-tabs">
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">{tabs[active].content}</div>
    </div>
  );
}
