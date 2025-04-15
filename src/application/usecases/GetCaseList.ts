import { Case } from '@domain/entities/Case'
import { CaseRepository } from '@domain/repositories/CaseRespository'

export class GetCaseList {
  constructor(private caseRepository: CaseRepository) {}

  async execute(): Promise<Case[]> {
    return await this.caseRepository.getAll()
  }
}
