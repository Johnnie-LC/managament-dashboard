import { GetCaseList } from '@application/usecases/GetCaseList'
import { Case } from '@domain/entities/Case'
import { MockCaseRepository } from '@infrastructure/data/MockCaseRepository'
import { useEffect, useState } from 'react'

export function useCaseListPage() {
  const [allCases, setAllCases] = useState<Case[]>([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')

  useEffect(() => {
    const fetchCases = async () => {
      const repo = new MockCaseRepository()
      const useCase = new GetCaseList(repo)
      const result = await useCase.execute()
      setAllCases(result)
    }

    fetchCases()
  }, [])

  const filteredCases = allCases.filter((c) => {
    const matchesSearch = c.client_name.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'All' || c.medical_status === statusFilter
    return matchesSearch && matchesStatus
  })

  return {
    cases: filteredCases,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
  }
}
