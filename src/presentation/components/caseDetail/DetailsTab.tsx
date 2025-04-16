import { Case } from "@domain/entities/Case";

interface Props {
  caseData: Case;
}

export function DetailsTab({ caseData }: Props) {
  return (
    <div className="space-y-2">
      <p>
        <strong>Client Name:</strong> {caseData.client_name}
      </p>
      <p>
        <strong>Date of Birth:</strong> {caseData.date_of_birth}
      </p>
      <p>
        <strong>Date of Incident:</strong> {caseData.date_of_incident}
      </p>
      <p>
        <strong>Law Firm:</strong> {caseData.law_firm}
      </p>
    </div>
  );
}
