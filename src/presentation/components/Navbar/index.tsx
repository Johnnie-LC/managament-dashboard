import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { NavbarItem } from './NavbarItem'

export function Navbar() {
  return (
    <div className="h-screen">
      <div className="p-5 pb-10 text-xl text-blue-600 flex flex-col md:justify-start w-full">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </div>
      <nav className="w-full flex flex-col gap-5 px-1 ">
        <NavbarItem path="/" icon={faFolderOpen} />
        <NavbarItem path="/case/1" icon={faFileAlt} />
      </nav>
    </div>
  )
}
