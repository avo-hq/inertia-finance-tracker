import DashboardLayout from "~/layouts/DashboardLayout"
import Container from "~/components/Container"
import {Head} from "@inertiajs/react"

const Dashboard = () => {
  return (
    <div>
      <Head title="My Dashboard - Financier" />
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </div>
  )
}

Dashboard.layout = page => <DashboardLayout>{page}</DashboardLayout>


export default Dashboard
