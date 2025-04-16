export interface EditExpenseTabProps {
  handleDelete: () => void;
  selectedIds: string[];
  setIsModalOpen: (e: boolean) => void;
}

export function EditExpenseTab({
  handleDelete,
  selectedIds,
  setIsModalOpen,
}: EditExpenseTabProps) {
  return (
    <div className="flex gap-2 justify-end">
      <button
        onClick={handleDelete}
        disabled={selectedIds.length === 0}
        className="px-3 py-1 bg-red-600 text-white rounded disabled:opacity-50"
      >
        Delete
      </button>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-3 py-1 bg-blue-600 text-white rounded"
      >
        Add Expense
      </button>
    </div>
  );
}
