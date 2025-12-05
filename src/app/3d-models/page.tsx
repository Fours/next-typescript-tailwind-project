import Form from "next/form"
import ModelsGrid from "@/app/components/ModelsGrid"
import { getModels } from "@/app/lib/models"

type ModelsPageProps = {
    searchParams: Promise<{
        q?: string
    }>
}

export default async function ModelsPage({ searchParams }: ModelsPageProps) {

    const query = (await searchParams).q
    let models = await getModels()
    if (query) {
        models = models.filter(model => {
            return model.name.toLowerCase().includes(query.toLowerCase()) ||
                model.description.toLowerCase().includes(query.toLowerCase())
        })
    }

    return (
        <>
            <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl">
                <input
                    type="text"
                    name="q"
                    placeholder="E.g. dragon"
                    autoComplete="off"
                    defaultValue={query}
                    className="w-full py-3 px-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
                />
            </Form>
            <ModelsGrid title="3D Models" models={models} />
        </>
    )
}