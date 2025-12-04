import type { ReactNode } from "react"

// Data Types

export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

export type Category = {
    displayName: string
    slug: string
}

// Page Types

export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

export type CategoryPageProps = {
    params: Promise<{
        categoryName: string
    }>
}

// Components Types

export type ModelCardProps = {
    model: Model
}

export type PillProps = {
    children: ReactNode
    className?: string
}

export type ModelsGridProps = {
    title: string
    models: Model[]
}

export type NavLinkProps = {
    href: string
    isActive: boolean
    children: ReactNode
}