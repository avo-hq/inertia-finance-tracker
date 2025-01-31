import {useState} from "react"
import FormDialog from "./FormDialog"
import DashboardLayout from "../../layouts/DashboardLayout"
import {Head, Link} from "@inertiajs/react"
import {Plus} from "lucide-react"

const Index = ({categories}) => {
  const [formDialogOpen, setFormDialogOpen] = useState(false)

  return <div>
    <Head title="Transaction Categories - Avonomy" />
    <div className="flex items-center justify-between">
      <header>
        <h1 className="text-2xl font-bold text-zinc-900">Categories</h1>
        <p className="text-base text-zinc-500">Manage your transaction categories</p>
      </header>

      <div className="mt-5">
        <FormDialog open={formDialogOpen} setOpen={setFormDialogOpen} />
        <button onClick={() => setFormDialogOpen(true)} className="flex items-center bg-emerald-900 text-white font-medium text-sm px-4 py-2 rounded-md">
          Add category
          <Plus className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
    <div className="mt-8">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        {categories.map((category) => (
          <div key={category.id} className="col-span-6 md:col-span-4 lg:col-span-3">
            <div className="bg-white p-4 rounded-md border border-zinc-300">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-medium text-zinc-900">{category.name}</h2>

                <div className="w-3 h-3 rounded-full" style={{backgroundColor: category.color_code}}></div>
              </div>
              <p className="text-sm text-zinc-500">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}

Index.layout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Index