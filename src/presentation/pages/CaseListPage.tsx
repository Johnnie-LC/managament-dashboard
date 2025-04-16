import CaseFilters from "@/presentation/components/caseList/CaseFilters";
import CaseTable from "@/presentation/components/caseList/CaseTable";
import { useCaseListPage } from "@presentation/hooks/useFilteredCases";

export default function CaseListPage() {
  const { cases } = useCaseListPage();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Case List</h1>
      <CaseFilters />
      <CaseTable cases={cases} />
    </div>
  );
}
