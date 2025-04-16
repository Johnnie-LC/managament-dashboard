import { CaseRepository } from '@domain/repositories/CaseRespository'
import { Case } from '@domain/entities/Case'


export class GetCaseById {
  constructor(private repo: CaseRepository) {}

  async execute(id: string): Promise<Case | null> {
    return this.repo.getById(id)
  }
}
