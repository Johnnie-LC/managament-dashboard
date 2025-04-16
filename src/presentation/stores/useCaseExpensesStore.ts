import { create } from 'zustand'
import { CaseExpense } from '@domain/entities/CaseExpense'

interface State {
  expensesByCaseId: Record<string, CaseExpense[]>
  getExpenses: (caseId: string) => CaseExpense[]
  addExpense: (caseId: string, expense: CaseExpense) => void
  deleteExpenses: (caseId: string, ids: string[]) => void
  setExpenses: (caseId: string, expenses: CaseExpense[]) => void
}

export const useCaseExpensesStore = create<State>((set, get) => ({
  expensesByCaseId: {},

  getExpenses: (caseId) => get().expensesByCaseId[caseId] || [],

  addExpense: (caseId, expense) =>
    set((state) => ({
      expensesByCaseId: {
        ...state.expensesByCaseId,
        [caseId]: [...(state.expensesByCaseId[caseId] || []), expense],
      },
    })),

  deleteExpenses: (caseId, ids) =>
    set((state) => ({
      expensesByCaseId: {
        ...state.expensesByCaseId,
        [caseId]: (state.expensesByCaseId[caseId] || []).filter(
          (e) => !ids.includes(e.id)
        ),
      },
    })),

  setExpenses: (caseId, expenses) =>
    set((state) => ({
      expensesByCaseId: {
        ...state.expensesByCaseId,
        [caseId]: expenses,
      },
    })),
}))
