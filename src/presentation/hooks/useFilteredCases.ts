import { useEffect } from 'react'
import { GetCaseList } from '@application/usecases/GetCaseList'
import { MockCaseRepository } from '@infrastructure/data/MockCaseRepository'
import { useCaseFiltersStore } from '@presentation/stores/useCaseFiltersStore'

export function useCaseListPage() {
  const { allCases, setAllCases, search, statusFilter } = useCaseFiltersStore()

  useEffect(() => {
    if (allCases.length > 0) return

    const fetchCases = async () => {
      const repo = new MockCaseRepository()
      const useCase = new GetCaseList(repo)
      const result = await useCase.execute()
      setAllCases(result)
    }

    fetchCases()
  }, [allCases, setAllCases])

  const normalizeText = (text: string) =>
    text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()

  const filteredCases = allCases.filter((c) => {
    const matchesSearch = normalizeText(c.client_name).includes(
      normalizeText(search)
    )
    const matchesStatus =
      statusFilter === 'All' || c.medical_status === statusFilter
    return matchesSearch && matchesStatus
  })

  return { cases: filteredCases }
}
