import { CategoryPageProps } from "@/app/types"
import { getModels } from "@/app/lib/models"
import { getCategoryBySlug } from "@/app/lib/categories"
import ModelsGrid from "@/app/components/ModelsGrid"

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categoryName } = await params
    const models = await getModels({category: categoryName})
    const category = getCategoryBySlug(categoryName)

    return <ModelsGrid title={category.displayName} models={models} />
}