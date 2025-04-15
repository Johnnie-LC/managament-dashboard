import { useEffect } from 'react'
import { GetCaseList } from '@application/usecases/GetCaseList'
import { MockCaseRepository } from '@infrastructure/data/MockCaseRepository'
import { useCaseFiltersStore } from '@presentation/stores/useCaseFiltersStore'

export function useCaseListPage() {
  const {
    allCases,
    setAllCases,
    search,
    statusFilter,
  } = useCaseFiltersStore()

  useEffect(() => {
    if (allCases.length > 0) return; 

    const fetchCases = async () => {
      const repo = new MockCaseRepository()
      const useCase = new GetCaseList(repo)
      const result = await useCase.execute()
      setAllCases(result)
    }

    fetchCases()
  }, [allCases, setAllCases])

  const filteredCases = allCases.filter((c) => {
    const matchesSearch = c.client_name.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'All' || c.medical_status === statusFilter
    return matchesSearch && matchesStatus
  })

  return { cases: filteredCases }
}
