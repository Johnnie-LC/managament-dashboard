import { Case } from "@domain/entities/Case";
import { Link } from "react-router";

interface Props {
  cases: Case[];
}

export default function CaseTable({ cases }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Client</th>
            <th className="p-3">DOA</th>
            <th className="p-3">Medical Status</th>
            <th className="p-3">Client Status</th>
            <th className="p-3">Law Firm</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c) => (
            <tr key={c.id} className="border-t hover:bg-gray-50">
              <td className="p-3">
                <Link
                  to={`/case/${c.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {c.client_name}
                </Link>
              </td>
              <td className="p-3">{c.doa}</td>
              <td className="p-3">{c.medical_status}</td>
              <td className="p-3">{c.client_status}</td>
              <td className="p-3">{c.law_firm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
