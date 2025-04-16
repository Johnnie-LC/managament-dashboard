import CaseFilters from "@components/CaseFilters";
import CaseTable from "@components/CaseTable";
import { useCaseListPage } from "@presentation/hooks/useFilteredCases";

export default function CaseListPage() {
  const { cases } = useCaseListPage();

  return (
    <section className="flex-1 flex flex-col p-3 bg-blue-100 m-0 ">
      <div className="flex-1 p-5 bg-white rounded-2xl shadow-[3px_5px_11px_0px_#679de6]">
        <CaseFilters />
        <CaseTable cases={cases} />
      </div>
    </section>
  );
}
