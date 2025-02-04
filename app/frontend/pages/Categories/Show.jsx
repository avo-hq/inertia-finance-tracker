import DashboardLayout from "../../layouts/DashboardLayout"
import {Head} from "@inertiajs/react"
import Table from "./Transactions"

const Index = ({category}) => {
  console.log(category)

  return <div>
    <Head title={`${category.name} category - Avonomy`} />
    <div className="flex items-center justify-between">
      <header>
        <h1 className="text-2xl font-bold text-zinc-900">{category.name}</h1>
        <p className="text-base text-zinc-500">{category.description}</p>
      </header>
    </div>
    <div className="mt-8">
      <Table transactions={category.transactions} />
    </div>
  </div>
}

Index.layout = (page) => <DashboardLayout>{page}</DashboardLayout>

export default Index