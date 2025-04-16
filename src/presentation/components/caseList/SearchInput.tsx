export function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search by client name"
      className="border p-2 rounded w-full md:w-1/3"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
