export interface Case {
    id: string
    client_name: string
    doa: string
    medical_status: 'Active' | 'Pending' | 'In Progress'
    client_status: string
    law_firm: string
  }
  