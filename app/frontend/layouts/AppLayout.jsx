import NavBar from "~/components/NavBar"
import { Head } from "@inertiajs/react"

const AppLayout = ({ children }) => {
  return (
    <main>
      <Head title="Track your finances - Financier" />
      <NavBar />
      <div>{children}</div>
    </main>
  )
}

export default AppLayout
