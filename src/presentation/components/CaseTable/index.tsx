import { Case } from "@domain/entities/Case";
import CaseTableBody from "./CaseTableBody";
import CaseTableHead from "./CaseTableHead";

interface Props {
  cases: Case[];
}

export default function CaseTable({ cases }: Props) {
  return (
    <div className="max-h-[60vh] overflow-y-auto pr-2 grid grid-cols-1  gap-6">
      <table className="min-w-full rounded-lg">
        <CaseTableHead />
        <CaseTableBody cases={cases} />
      </table>
    </div>
  );
}
