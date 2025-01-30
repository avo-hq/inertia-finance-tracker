import { Head, usePage } from "@inertiajs/react"
import NavBar from "~/components/NavBar"
import FlashMessages from "~/components/FlashMessages"
const AppLayout = ({ children }) => {

  return (
    <main>
      <Head title="Track your finances - Avonomy" />
      <NavBar />
      <FlashMessages />
      <div>{children}</div>
    </main>
  )
}

export default AppLayout
