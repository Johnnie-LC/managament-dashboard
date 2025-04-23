import { Case } from "@/domain/entities/Case";
import React from "react";
import { useNavigate } from "react-router";

interface CaseTableBodyProps {
  cases: Case[];
}

export default function CaseTableBody({ cases }: CaseTableBodyProps) {
  const navigate = useNavigate();
  return (
    <tbody>
      {cases.map((c) => (
        <React.Fragment key={c.id}>
          <tr
            className="[&:not(:last-child)]:mb-[5px] hover:bg-[oklch(0.96_0.03_159.04)] bg-[oklch(0.96_0.01_244.84)] cursor-pointer flex items-center"
            onClick={() => navigate(`/case/${c.id}`)}
          >
            <td className="p-3 w-[100px] md:w-[200px] rounded-tl-lg rounded-bl-lg">
              {c.client_name}
            </td>
            <td className="p-5 w-[100px] md:w-[200px]">{c.doa}</td>
            <td className="p-5 w-[100px] md:w-[200px]">{c.medical_status}</td>
            <td className="p-5 w-[100px] md:w-[200px]">{c.client_status}</td>
            <td className="p-5 flex-1 rounded-tr-lg rounded-br-lg">
              {c.law_firm}
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="p-2"></td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  );
}
