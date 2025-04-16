import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

interface NavbarItemProps {
  path: string;
  icon: IconProp;
}
export function NavbarItem({ path, icon }: NavbarItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex flex-col items-center p-2 hover:bg-gray-300 transition duration-500 rounded-md ${
          isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-500"
        }`
      }
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </NavLink>
  );
}
