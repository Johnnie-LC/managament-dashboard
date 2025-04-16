interface CaseDetailTabsProps {
  setActiveTab: (activeTab: "details" | "expenses") => void;
  activeTab: string;
}

export function CaseDetailTabs({
  setActiveTab,
  activeTab,
}: CaseDetailTabsProps) {
  return (
    <div className="flex">
      <button
        onClick={() => setActiveTab("details")}
        className={`mr-4 pb-2 pt-3 px-5 rounded-tr-lg rounded-tl-lg text-xl font-bold ${
          activeTab === "details" ? " text-blue-600 bg-white " : "text-gray-600"
        }`}
      >
        Details
      </button>
      <button
        onClick={() => setActiveTab("expenses")}
        className={`pb-2 pt-3 px-5 rounded-tr-lg rounded-tl-lg text-xl font-bold ${
          activeTab === "expenses"
            ? " text-blue-600 bg-white "
            : "text-gray-600"
        }`}
      >
        Expenses
      </button>
    </div>
  );
}
