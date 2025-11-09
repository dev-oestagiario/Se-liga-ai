import React, { useState } from "react";

const SimpleTabs = ({ defaultValue, tabs }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div>
      {/* Trigger buttons */}
      <div className="inline-flex h-10 items-center justify-center rounded-md bg-base-200 p-1 text-base-content/70 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all cursor-pointer ${
              activeTab === tab.value
                ? "bg-base-100 text-base-content shadow-sm"
                : "text-base-content/50 hover:bg-base-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.value && (
              <div key={tab.value} className="bg-base-100 rounded-md p-4 shadow-sm">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default SimpleTabs;
