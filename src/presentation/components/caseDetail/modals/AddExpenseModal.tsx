import { useAddExpenseModal } from "@presentation/components/caseDetail/modals/hooks/useAddExpenseModal";
import { BodyAddExpenseModal } from "./BodyAddExpenseModal";

interface Props {
  onClose: () => void;
  onSave: (expense: {
    id: string;
    label: string;
    amount: number;
    deducted_from: string;
  }) => void;
}

export function AddExpenseModal({ onClose, onSave }: Props) {
  const expenseModal = useAddExpenseModal({ onSave: onSave });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded border border-gray-300 text-gray-700"
        >
          X
        </button>

        <h2 className="text-xl font-semibold">Add Expense</h2>

        <BodyAddExpenseModal {...expenseModal} />

        <div className="flex justify-end space-x-2 pt-4">
          <button
            onClick={expenseModal.handleSave}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
