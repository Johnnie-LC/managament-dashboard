import { Case } from "@domain/entities/Case";
import CaseTableBody from "./CaseTableBody";
import CaseTableHead from "./CaseTableHead";

interface Props {
  cases: Case[];
}

export default function CaseTable({ cases }: Props) {
  return (
    <div className="[@media(max-height:998px)]:h-130 h-180 overflow-y-auto ">
      <table className="min-w-full rounded-lg">
        <CaseTableHead />
        <CaseTableBody cases={cases} />
      </table>
    </div>
  );
}
