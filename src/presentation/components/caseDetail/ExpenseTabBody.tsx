import { CaseExpense } from "@domain/entities/CaseExpense";

export interface ExpenseTabBodyProps {
  setSelectedIds: (e: string[]) => void;
  expenses: CaseExpense[];
  selectedIds: string[];
  toggleSelect: (id: string) => void;
}

export function ExpenseTabBody({
  setSelectedIds,
  expenses,
  selectedIds,
  toggleSelect,
}: ExpenseTabBodyProps) {
  return (
    <table className="min-w-full border border-gray-200">
      <thead className="bg-gray-100 text-left">
        <tr>
          <th className="p-2">
            <input
              type="checkbox"
              onChange={(e) =>
                setSelectedIds(
                  e.target.checked ? expenses.map((e) => e.id) : []
                )
              }
              checked={
                selectedIds.length === expenses.length && expenses.length > 0
              }
            />
          </th>
          <th className="p-2 border-b">Label</th>
          <th className="p-2 border-b">Amount</th>
          <th className="p-2 border-b">Deducted From</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id} className="border-t">
            <td className="p-2">
              <input
                type="checkbox"
                checked={selectedIds.includes(exp.id)}
                onChange={() => toggleSelect(exp.id)}
              />
            </td>
            <td className="p-2">{exp.label}</td>
            <td className="p-2">${exp.amount}</td>
            <td className="p-2">{exp.deducted_from}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
