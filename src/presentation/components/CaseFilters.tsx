import { SearchInput } from "@presentation/components/SearchInput";
import { StatusDropdown } from "@presentation/components/StatusDropdown";
import { useCaseFilters } from "@presentation/hooks/useCaseFilters";

interface Props {
  search: string;
  setSearch: (value: string) => void;
  statusFilter: string;
  setStatusFilter: (value: string) => void;
}

export default function CaseFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}: Props) {
  const { localSearch, setLocalSearch } = useCaseFilters({ search, setSearch });

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
      <SearchInput value={localSearch} onChange={setLocalSearch} />
      <StatusDropdown value={statusFilter} onChange={setStatusFilter} />
    </div>
  );
}
