import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GetCaseById } from '@application/usecases/GetCaseById'
import { MockCaseRepository } from '@infrastructure/data/MockCaseRepository'
import { Case } from '@domain/entities/Case'
import { useCaseExpensesStore } from '@stores/useCaseExpensesStore'

export function useCaseDetailPage() {
  const { id } = useParams()
  const [caseData, setCaseData] = useState<Case | null>(null)
  const { setExpenses, expensesByCaseId } = useCaseExpensesStore()
  
  useEffect(() => {
    const fetchCase = async () => {
      const repo = new MockCaseRepository()
      const useCase = new GetCaseById(repo)
      const result = await useCase.execute(id!)
      setCaseData(result)
      setExpenses(id!, result.expenses ?? [])
    }

    fetchCase()
  }, [id, setExpenses])

  return {
    caseData,
    expenses: expensesByCaseId ?? [],
  }
}
