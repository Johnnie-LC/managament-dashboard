import { MedicalStatus } from "@domain/valueObjects/MedicalStatus";

export function StatusDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded w-full md:w-1/4"
    >
      <option value="All">All Statuses</option>
      {Object.values(MedicalStatus).map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
}
