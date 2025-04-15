import { SearchInput } from "@presentation/components/SearchInput";
import { StatusDropdown } from "@presentation/components/StatusDropdown";
import { useCaseFilters } from "@presentation/hooks/useCaseFilters";
import { useCaseFiltersStore } from "../stores/useCaseFiltersStore";

export default function CaseFilters() {
  const { search, setSearch, statusFilter, setStatusFilter } =
    useCaseFiltersStore();

  const { localSearch, setLocalSearch } = useCaseFilters({ search, setSearch });

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
      <SearchInput value={localSearch} onChange={setLocalSearch} />
      <StatusDropdown value={statusFilter} onChange={setStatusFilter} />
    </div>
  );
}
