import { SearchInput } from "@presentation/components/caseList/SearchInput";
import { StatusDropdown } from "@presentation/components/caseList/StatusDropdown";
import { useCaseFilters } from "@presentation/hooks/useCaseFilters";
import { useCaseFiltersStore } from "@stores/useCaseFiltersStore";

export default function CaseFilters() {
  const filtersStore = useCaseFiltersStore();

  const { localSearch, setLocalSearch } = useCaseFilters({
    search: filtersStore.search,
    setSearch: filtersStore.setSearch,
  });

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
      <SearchInput value={localSearch} onChange={setLocalSearch} />
      <StatusDropdown
        value={filtersStore.statusFilter}
        onChange={filtersStore.setStatusFilter}
      />
    </div>
  );
}
