import CaseFilters from "@presentation/components/CaseFilters";
import CaseTable from "@presentation/components/CaseTable";
import { useCaseListPage } from "@presentation/hooks/useFilteredCases";

export default function CaseListPage() {
  const { cases, search, setSearch, statusFilter, setStatusFilter } =
    useCaseListPage();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Case List</h1>
      <CaseFilters
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <CaseTable cases={cases} />
    </div>
  );
}
