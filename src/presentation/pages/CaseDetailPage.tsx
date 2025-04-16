import { useState } from "react";
import { useCaseDetailPage } from "../hooks/useCaseDetailPage";
import { DetailsTab } from "../components/caseDetail/DetailsTab";
import { ExpensesTab } from "../components/caseDetail/ExpensesTab";

export default function CaseDetailPage() {
  const [activeTab, setActiveTab] = useState<"details" | "expenses">("details");
  const { caseData } = useCaseDetailPage();

  if (!caseData) {
    return <div className="p-4">Loading case...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Case Detail: {caseData.client_name}
      </h1>

      <div className="flex border-b border-gray-200 mb-4">
        <button
          onClick={() => setActiveTab("details")}
          className={`mr-4 pb-2 ${
            activeTab === "details"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          Details
        </button>
        <button
          onClick={() => setActiveTab("expenses")}
          className={`pb-2 ${
            activeTab === "expenses"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          Expenses
        </button>
      </div>

      <div>
        {activeTab === "details" && <DetailsTab caseData={caseData} />}
        {activeTab === "expenses" && <ExpensesTab />}
      </div>
    </div>
  );
}
