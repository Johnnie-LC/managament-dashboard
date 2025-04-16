import { MedicalStatus } from "@domain/valueObjects/MedicalStatus";

interface StatusDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export function StatusDropdown({ value, onChange }: StatusDropdownProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block md:w-50 w-full mb-10 bg-[#d3c9ee] rounded-[25px] py-2.5 px-10 text-sm text-center border-0 border-gray-200 appearance-none dark:text-[#7547f2] dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
