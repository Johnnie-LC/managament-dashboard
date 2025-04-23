import { Case } from '@domain/entities/Case'

export interface CaseRepository {
  getAll(): Promise<Case[]>
  getById(id: string): Promise<Case | null>
}
