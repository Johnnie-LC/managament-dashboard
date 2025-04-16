export interface BodyModalProps {
  deductionType: string;
  label: string;
  errors: {
    [key: string]: string;
  };
  amount: string;
  setDeductionType: (e: string) => void;
  setLabel: (e: string) => void;
  setAmount: (e: string) => void;
}

export const BodyAddExpenseModal = ({
  deductionType,
  errors,
  label,
  amount,
  setDeductionType,
  setLabel,
  setAmount,
}: BodyModalProps) => {
  return (
    <>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Deduction Type</label>
          <select
            value={deductionType}
            onChange={(e) => setDeductionType(e.target.value)}
            className={`w-full p-2 border rounded ${
              errors.deductionType ? "border-red-500" : ""
            }`}
          >
            <option value="">Select one</option>
            <option value="Settlement">Settlement</option>
            <option value="Medical">Medical</option>
            <option value="Legal">Legal</option>
          </select>
          {errors.deductionType && (
            <p className="text-sm text-red-500">{errors.deductionType}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Expense Label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className={`w-full p-2 border rounded ${
              errors.label ? "border-red-500" : ""
            }`}
            placeholder="e.g. X-Ray"
          />
          {errors.label && (
            <p className="text-sm text-red-500">{errors.label}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Expense Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={`w-full p-2 border rounded ${
              errors.amount ? "border-red-500" : ""
            }`}
            placeholder="e.g. 250.00"
          />
          {errors.amount && (
            <p className="text-sm text-red-500">{errors.amount}</p>
          )}
        </div>
      </div>
    </>
  );
};
