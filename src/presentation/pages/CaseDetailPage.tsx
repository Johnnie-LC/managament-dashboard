import { useState } from "react";
import { useCaseDetailPage } from "../hooks/useCaseDetailPage";
import { DetailsTab } from "@components/DetailsTab";
import { ExpensesTab } from "@components/ExpensesTab";
import { CaseDetailTabs } from "@components/CaseDetailTabsButtons";

export default function CaseDetailPage() {
  const [activeTab, setActiveTab] = useState<"details" | "expenses">("details");
  const { caseData } = useCaseDetailPage();

  if (!caseData) {
    return <div className="p-4">Loading case...</div>;
  }

  return (
    <div className="pt-6 flex-1 flex flex-col p-3 bg-blue-100 m-0 ">
      <CaseDetailTabs setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex-1 bg-white">
        {activeTab === "details" && <DetailsTab caseData={caseData} />}
        {activeTab === "expenses" && <ExpensesTab />}
      </div>
    </div>
  );
}
