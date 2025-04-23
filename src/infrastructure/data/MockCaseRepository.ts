import { MedicalStatus } from '@domain/valueObjects/MedicalStatus'
import { Case } from '@domain/entities/Case'
import { CaseRepository } from '@domain/repositories/CaseRespository'

const mockData: Case[] = [
  {
    id: '1',
    client_name: 'Juan Pérez',
    doa: '2024-02-01',
    medical_status: MedicalStatus.Active,
    client_status: 'Open',
    law_firm: 'LegalCo',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
    expenses: [
      {
        id: 'e1',
        label: 'Medical Bill',
        amount: 500,
        deducted_from: 'Settlement',
      },
      {
        id: 'e2',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e3',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e4',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e5',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
    ],
  },
  {
    id: '2',
    client_name: 'María Gómez',
    doa: '2023-11-15',
    medical_status: MedicalStatus.Pending,
    client_status: 'Closed',
    law_firm: 'JusticeNow',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
    expenses: [
      {
        id: 'e1',
        label: 'Medical Bill',
        amount: 500,
        deducted_from: 'Settlement',
      },
      {
        id: 'e2',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e3',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
    ],
  },
  {
    id: '3',
    client_name: 'Carlos Sánchez',
    doa: '2023-08-20',
    medical_status: MedicalStatus.InProgress,
    client_status: 'Active',
    law_firm: 'Abogados S.A.',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
    expenses: [
      {
        id: 'e1',
        label: 'Medical Bill',
        amount: 500,
        deducted_from: 'Settlement',
      },
      {
        id: 'e2',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e3',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
    ],
  },
  {
    id: '4',
    client_name: 'Pedro Paramo',
    doa: '2024-02-25',
    medical_status: MedicalStatus.InProgress,
    client_status: 'Active',
    law_firm: 'Abogados S.A.',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
  },
  {
    id: '5',
    client_name: 'Juan Pérez',
    doa: '2024-02-01',
    medical_status: MedicalStatus.Active,
    client_status: 'Open',
    law_firm: 'LegalCo',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
    expenses: [
      {
        id: 'e1',
        label: 'Medical Bill',
        amount: 500,
        deducted_from: 'Settlement',
      },
      {
        id: 'e2',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e3',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
    ],
  },
  {
    id: '6',
    client_name: 'María Gómez',
    doa: '2023-11-15',
    medical_status: MedicalStatus.Pending,
    client_status: 'Closed',
    law_firm: 'JusticeNow',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
    expenses: [
      {
        id: 'e1',
        label: 'Medical Bill',
        amount: 500,
        deducted_from: 'Settlement',
      },
      {
        id: 'e2',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e3',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
    ],
  },
  {
    id: '7',
    client_name: 'Carlos Sánchez',
    doa: '2023-08-20',
    medical_status: MedicalStatus.InProgress,
    client_status: 'Active',
    law_firm: 'Abogados S.A.',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
    expenses: [
      {
        id: 'e1',
        label: 'Medical Bill',
        amount: 500,
        deducted_from: 'Settlement',
      },
      {
        id: 'e2',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e3',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
    ],
  },
  {
    id: '8',
    client_name: 'Pedro Paramo',
    doa: '2024-02-25',
    medical_status: MedicalStatus.InProgress,
    client_status: 'Active',
    law_firm: 'Abogados S.A.',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
  },
  {
    id: '9',
    client_name: 'Juan Pérez',
    doa: '2024-02-01',
    medical_status: MedicalStatus.Active,
    client_status: 'Open',
    law_firm: 'LegalCo',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
    expenses: [
      {
        id: 'e1',
        label: 'Medical Bill',
        amount: 500,
        deducted_from: 'Settlement',
      },
      {
        id: 'e2',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
    ],
  },
  {
    id: '10',
    client_name: 'María Gómez',
    doa: '2023-11-15',
    medical_status: MedicalStatus.Pending,
    client_status: 'Closed',
    law_firm: 'JusticeNow',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
    expenses: [
      {
        id: 'e1',
        label: 'Medical Bill',
        amount: 500,
        deducted_from: 'Settlement',
      },
      {
        id: 'e2',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
    ],
  },
  {
    id: '11',
    client_name: 'Carlos Sánchez',
    doa: '2023-08-20',
    medical_status: MedicalStatus.InProgress,
    client_status: 'Active',
    law_firm: 'Abogados S.A.',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
    expenses: [
      {
        id: 'e1',
        label: 'Medical Bill',
        amount: 500,
        deducted_from: 'Settlement',
      },
      {
        id: 'e2',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e3',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e4',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
      {
        id: 'e5',
        label: 'Transportation',
        amount: 150,
        deducted_from: 'Client',
      },
    ],
  },
  {
    id: '12',
    client_name: 'Pedro Paramo',
    doa: '2024-02-25',
    medical_status: MedicalStatus.InProgress,
    client_status: 'Active',
    law_firm: 'Abogados S.A.',
    date_of_birth: '2023-11-15',
    date_of_incident: '2023-11-15',
  },
]

export class MockCaseRepository implements CaseRepository {
  async getAll(): Promise<Case[]> {
    return new Promise((resolve) => setTimeout(() => resolve(mockData), 300))
  }

  async getById(id: string): Promise<Case | null> {
    return mockData.find((c) => c.id === id) ?? null
  }
}
