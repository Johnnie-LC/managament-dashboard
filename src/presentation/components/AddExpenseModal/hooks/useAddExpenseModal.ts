import { useState } from 'react'

interface UseAddExpenseModal {
  onSave: (expense: {
    id: string
    label: string
    amount: number
    deducted_from: string
  }) => void
}

export function useAddExpenseModal({ onSave }: UseAddExpenseModal) {
  const [deductionType, setDeductionType] = useState('')
  const [label, setLabel] = useState('')
  const [amount, setAmount] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = () => {
    const newErrors: { [key: string]: string } = {}

    if (!deductionType) newErrors.deductionType = 'Required'
    if (!label) newErrors.label = 'Required'
    if (!amount) {
      newErrors.amount = 'Required'
    } else if (isNaN(Number(amount)) || Number(amount) <= 0) {
      newErrors.amount = 'Must be a valid number greater than 0'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = () => {
    if (!validate()) return

    onSave({
      id: crypto.randomUUID(),
      label,
      amount: parseFloat(amount),
      deducted_from: deductionType,
    })
  }

  return {
    handleSave,
    setLabel,
    setAmount,
    setDeductionType,
    deductionType,
    errors,
    label,
    amount,
  }
}
