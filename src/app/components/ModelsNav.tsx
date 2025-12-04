"use client"

import NavLink from "@/app/components/NavLink"
import { usePathname } from "next/navigation"
import type { Category } from "@/app/types"

export default function ModelsNav({ categories }: { categories: Category[] }) {

    const pathname = usePathname()
    console.log("pathname:", pathname)

    return (
        <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
            <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
                <NavLink
                    href="/3d-models"
                    isActive={pathname === "/3d-models"}
                >
                    All
                </NavLink>
                {categories.map(item => (
                <NavLink
                    href={`/3d-models/categories/${item.slug}`}
                    isActive={pathname === `/3d-models/categories/${item.slug}`}
                    key={item.slug}
                >
                    {item.displayName}
                </NavLink>
                ))}
            </ul>
        </nav>
    )

}