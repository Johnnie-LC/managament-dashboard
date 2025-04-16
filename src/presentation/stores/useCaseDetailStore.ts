import { create } from 'zustand'
import { Case } from '@domain/entities/Case'

interface CaseDetailState {
  casesById: Record<string, Case>
  setCase: (id: string, data: Case) => void
  getCase: (id: string) => Case | undefined
  clear: () => void
}

export const useCaseDetailStore = create<CaseDetailState>((set, get) => ({
  casesById: {},

  setCase: (id, data) =>
    set((state) => ({
      casesById: { ...state.casesById, [id]: data },
    })),

  getCase: (id) => get().casesById[id],

  clear: () => set({ casesById: {} }),
}))
