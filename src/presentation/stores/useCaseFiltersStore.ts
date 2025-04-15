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
}

export const useCaseFiltersStore = create<CaseFiltersState>((set) => ({
  search: '',
  setSearch: (value) => set({ search: value }),
  statusFilter: 'All',
  setStatusFilter: (value) => set({ statusFilter: value }),
  resetFilters: () => set({ search: '', statusFilter: 'All' }),
  allCases: [],
  setAllCases: (cases) => set({ allCases: cases }),
}))
