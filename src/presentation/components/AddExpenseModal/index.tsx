import { useAddExpenseModal } from '@components/AddExpenseModal/hooks/useAddExpenseModal'
import { BodyAddExpenseModal } from './BodyAddExpenseModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

interface Props {
  onClose: () => void
  onSave: (expense: {
    id: string
    label: string
    amount: number
    deducted_from: string
  }) => void
}

export function AddExpenseModal({ onClose, onSave }: Props) {
  const expenseModal = useAddExpenseModal({ onSave: onSave })

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <div className="flex justify-end">
          <button onClick={onClose} className="rounded text-xl text-gray-700">
            <FontAwesomeIcon icon={faX} size="lg" />
          </button>
        </div>

        <h2 className="text-xl font-semibold">Add Expense</h2>

        <BodyAddExpenseModal {...expenseModal} />

        <div className="flex justify-center space-x-2 pt-4">
          <button
            onClick={expenseModal.handleSave}
            className="px-10 py-2 rounded bg-blue-600 text-white"
          >
            Submit Expense
          </button>
        </div>
      </div>
    </div>
  )
}
