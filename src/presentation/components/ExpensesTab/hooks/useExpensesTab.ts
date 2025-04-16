import { CaseExpense } from "@/domain/entities/CaseExpense";
import { useCaseExpensesStore } from "@/presentation/stores/useCaseExpensesStore";
import { useState } from "react";
import { useParams } from "react-router";

export function useExpensesTab() {
  const { id: caseId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const { getExpenses, addExpense, deleteExpenses } = useCaseExpensesStore();

  const expenses = getExpenses(caseId!);

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDelete = () => {
    deleteExpenses(caseId!, selectedIds);
    setSelectedIds([]);
  };

  const handleAdd = (expense: CaseExpense) => {
    addExpense(caseId!, expense);
    setIsModalOpen(false);
  };

  return {
    expenses,
    toggleSelect,
    handleDelete,
    handleAdd,
    isModalOpen,
    selectedIds,
    setIsModalOpen,
    setSelectedIds,
  }
}