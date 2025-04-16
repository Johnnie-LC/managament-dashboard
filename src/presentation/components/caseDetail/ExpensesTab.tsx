import { AddExpenseModal } from "./modals/AddExpenseModal";
import { EditExpenseTab } from "./EditExpenseTab";
import { ExpenseTabBody } from "./ExpenseTabBody";
import { useExpensesTab } from "./hooks/useExpensesTab";

export function ExpensesTab() {
  const expensesTab = useExpensesTab();

  return (
    <div className="space-y-4">
      <EditExpenseTab
        handleDelete={expensesTab.handleDelete}
        selectedIds={expensesTab.selectedIds}
        setIsModalOpen={expensesTab.setIsModalOpen}
      />

      <ExpenseTabBody
        setSelectedIds={expensesTab.setSelectedIds}
        expenses={expensesTab.expenses}
        selectedIds={expensesTab.selectedIds}
        toggleSelect={expensesTab.toggleSelect}
      />

      {expensesTab.isModalOpen && (
        <AddExpenseModal
          onClose={() => expensesTab.setIsModalOpen(false)}
          onSave={expensesTab.handleAdd}
        />
      )}
    </div>
  );
}
