import { CaseExpense } from '@/domain/entities/CaseExpense'
import { Case } from '@domain/entities/Case'
import { create } from 'zustand'


interface CaseFiltersState {
  search: string
  setSearch: (value: string) => void
  statusFilter: string
  setStatusFilter: (value: string) => void
  resetFilters: () => void
  allCases: Case[]
  setAllCases: (cases: Case[]) => void
  updateCaseById: (updatedCase: Case) => void
  updateCaseExpensesById: (caseId: string, newExpenses: CaseExpense[]) => void
}

export const useCaseFiltersStore = create<CaseFiltersState>((set) => ({
  search: '',
  setSearch: (value) => set({ search: value }),
  statusFilter: 'All',
  setStatusFilter: (value) => set({ statusFilter: value }),
  resetFilters: () => set({ search: '', statusFilter: 'All' }),
  allCases: [],
  setAllCases: (cases) => set({ allCases: cases }),
  updateCaseById: (updatedCase) =>
    set((state) => ({
      allCases: state.allCases.map((c) =>
        c.id === updatedCase.id ? updatedCase : c
      ),
    })),
  updateCaseExpensesById: (caseId: string, newExpenses: CaseExpense[]) =>
    set((state) => ({
      allCases: state.allCases.map((c) =>
        c.id === caseId ? { ...c, expenses: newExpenses } : c
      ),
    })),
}))
