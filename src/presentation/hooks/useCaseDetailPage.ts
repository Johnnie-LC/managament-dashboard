/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { GetCaseById } from '@application/usecases/GetCaseById'
import { MockCaseRepository } from '@infrastructure/data/MockCaseRepository'
import { Case } from '@domain/entities/Case'
import { useCaseExpensesStore } from '@stores/useCaseExpensesStore'
import { useCaseFiltersStore } from '../stores/useCaseFiltersStore'

export function useCaseDetailPage() {
  const { id } = useParams()
  const [caseData, setCaseData] = useState<Case | null>(null)
  const { setExpenses, expensesByCaseId } = useCaseExpensesStore()
  const { allCases, updateCaseById } = useCaseFiltersStore()
  
  const existingCase = allCases.find((c) => c.id === id)

  useEffect(() => {
    if (!id) return
    
    if (existingCase) {
      setCaseData(existingCase)
      setExpenses(id, existingCase.expenses ?? [])
    } else {
      const fetchCase = async () => {
        const repo = new MockCaseRepository()
        const useCase = new GetCaseById(repo)
        const result = await useCase.execute(id)
        setCaseData(result)
        setExpenses(id, result.expenses ?? [])
        updateCaseById(result)
      }

      fetchCase()
    }
  }, [id, setExpenses])

  return {
    caseData,
    expenses: expensesByCaseId ?? [],
  }
}
