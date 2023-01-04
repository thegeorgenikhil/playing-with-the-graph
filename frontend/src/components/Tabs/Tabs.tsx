import React from "react";

type TabProps = {
  tab: "transactions" | "users";
  setTab: (tab: "transactions" | "users") => void;
};

export const Tabs: React.FC<TabProps> = ({ tab, setTab }) => {
  const activeClass =
    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active";
  const inactiveClass =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300";

  const activeTab = (currTab: "transactions" | "users") => {
    if (currTab === tab) {
      return activeClass;
    } else {
      return inactiveClass;
    }
  };

  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          <div
            onClick={() => setTab("transactions")}
            className={activeTab("transactions")}
          >
            Transactions
          </div>
        </li>
        <li className="mr-2">
          <a onClick={() => setTab("users")} className={activeTab("users")}>
            Users
          </a>
        </li>
      </ul>
    </div>
  );
};
