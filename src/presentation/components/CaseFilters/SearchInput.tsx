interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Search Clients"
      className="border-2 border-[#bbbbbb] rounded-[25px] p-2 pl-5 w-full md:w-1/3"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
