import {Head, usePage} from "@inertiajs/react"

import DashboardLayout from "~/layouts/DashboardLayout"
import Container from "~/components/Container"
import Card from "~/components/Card"
import BalanceChart from "./BalanceChart"

const Dashboard = ({balance, amount_spent_this_month, amount_spent_last_week, last_weeks_income, chart_data}) => {
  const {current_user} = usePage().props;

  return (
    <div>
      <Head title="My Dashboard - Avonomy" />
      <Container>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-base text-zinc-500">Welcome back, {current_user.username} 👋!</p>
        <div className="my-6 w-full">
          <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-span-3">
              <Card>
                <h2 className="text-base text-zinc-500">Total Balance</h2>
                <p className="text-3xl font-semibold text-zinc-800">{balance}</p>
              </Card>
            </div>
            <div className="col-span-3">
              <Card>
                <h2 className="text-base text-zinc-500">Amount spent this month</h2>
                <p className="text-3xl font-semibold text-zinc-800">{amount_spent_this_month}</p>
              </Card>
            </div>
            <div className="col-span-3">
              <Card>
                <h2 className="text-base text-zinc-500">Amount spent last week</h2>
                <p className="text-3xl font-semibold text-zinc-800">{amount_spent_last_week}</p>
              </Card>
            </div>
            <div className="col-span-3">
              <Card>
                <h2 className="text-base text-zinc-500">Last week's income</h2>
                <p className="text-3xl font-semibold text-zinc-800">{last_weeks_income}</p>
              </Card>
            </div>
          </div>
          <BalanceChart data={chart_data} />
        </div>
      </Container>
    </div>
  )
}

Dashboard.layout = page => <DashboardLayout>{page}</DashboardLayout>


export default Dashboard
