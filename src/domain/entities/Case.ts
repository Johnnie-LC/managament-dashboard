import { MedicalStatus } from '@domain/valueObjects/MedicalStatus'
import { CaseExpense } from '@domain/entities/CaseExpense'

export interface Case {
  id: string
  client_name: string
  date_of_birth: string
  date_of_incident: string
  law_firm: string
  doa: string
  medical_status: MedicalStatus
  client_status: string
  expenses?: CaseExpense[]
}
