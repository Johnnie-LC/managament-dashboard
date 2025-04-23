import { Case } from '@domain/entities/Case'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBank } from '@fortawesome/free-solid-svg-icons'
interface Props {
  caseData: Case
}

export function DetailsTab({ caseData }: Props) {
  return (
    <div className="space-y-2 px-10 pt-15 flex gap-50">
      <div className="flex flex-col gap-10">
        <p className="flex flex-col">
          <strong className="text-gray-400">Client Name:</strong>{' '}
          {caseData.client_name}
        </p>
        <p className="flex flex-col">
          <strong className="text-gray-400">Date of Birth:</strong>{' '}
          {caseData.date_of_birth}
        </p>
        <p className="flex flex-col">
          <strong className="text-gray-400">Date of Incident:</strong>{' '}
          {caseData.date_of_incident}
        </p>
      </div>
      <div>
        <p className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faBank} size="xl" className="ml-2" />
          <strong>{caseData.law_firm}</strong>
        </p>
      </div>
    </div>
  )
}
