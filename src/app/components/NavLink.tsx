import { ReactNode } from "react"
import Link from "next/link"

type NavLinkProps = {
    href: string
    isActive: boolean
    children: ReactNode
}

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  
    const textColor = isActive ? "text-orange-600" : "text-gray-700"
    
    return (
        <li className="text-sm uppercase">
        <Link
            href={href}
            className={`px-4 py-2 ${textColor} transition-colors rounded-md cursor-pointer hover:text-orange-600`}
        >{children}</Link>
        </li>
    )
}