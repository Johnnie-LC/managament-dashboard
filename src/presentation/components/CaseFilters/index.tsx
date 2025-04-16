import { SearchInput } from "@components/CaseFilters/SearchInput";
import { StatusDropdown } from "@components/CaseFilters/StatusDropdown";
import { useCaseFilters } from "@presentation/hooks/useCaseFilters";
import { useCaseFiltersStore } from "@stores/useCaseFiltersStore";

export default function CaseFilters() {
  const filtersStore = useCaseFiltersStore();

  const { localSearch, setLocalSearch } = useCaseFilters({
    search: filtersStore.search,
    setSearch: filtersStore.setSearch,
  });

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <SearchInput value={localSearch} onChange={setLocalSearch} />
      </div>
      <StatusDropdown
        value={filtersStore.statusFilter}
        onChange={filtersStore.setStatusFilter}
      />
    </>
  );
}
