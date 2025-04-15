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
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
      <input
        type="text"
        placeholder="Search by client name"
        className="border p-2 rounded w-full md:w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border p-2 rounded w-full md:w-1/4"
      >
        <option value="All">All Statuses</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
      </select>
    </div>
  );
}
