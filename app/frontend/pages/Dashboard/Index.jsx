import DashboardLayout from "~/layouts/DashboardLayout"
import Container from "~/components/Container"
import {Head} from "@inertiajs/react"
import Card from "~/components/Card"
import BalanceChart from "./BalanceChart"

const Dashboard = () => {
  return (
    <div>
      <Head title="My Dashboard - Avonomy" />
      <Container>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-base text-zinc-500">Welcome back, John Doe 👋!</p>
        <div className="my-6 w-full">
          <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-span-3">
              <Card>
                <h2 className="text-base text-zinc-500">Total Balance</h2>
                <p className="text-3xl font-semibold text-zinc-800">$10,000</p>
              </Card>
            </div>
            <div className="col-span-3">
              <Card>
                <h2 className="text-base text-zinc-500">Amount spent this month</h2>
                <p className="text-3xl font-semibold text-zinc-800">$545</p>
              </Card>
            </div>
            <div className="col-span-3">
              <Card>
                <h2 className="text-base text-zinc-500">Amount saved this month</h2>
                <p className="text-3xl font-semibold text-zinc-800">$125</p>
              </Card>
            </div>
          </div>
          <BalanceChart />
        </div>
      </Container>
    </div>
  )
}

Dashboard.layout = page => <DashboardLayout>{page}</DashboardLayout>


export default Dashboard
