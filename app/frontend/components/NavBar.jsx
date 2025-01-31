import { Link, usePage } from "@inertiajs/react"
import Container from "~/components/Container"

const NavBar = () => {
  const {current_user} = usePage().props;
  const isAuthenticated = current_user !== null;
  return (
    <nav className="px-2 py-4 bg-white border-b border-zinc-200 shadow-sm">
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="text-emerald-900 font-bold text-xl">Avonomy</Link>
          <div className="flex items-center space-x-6">
            {isAuthenticated && <Link href="/dashboard" className="text-slate-900">Dashboard</Link>}
            {!isAuthenticated && <Link href="/session/new" className="text-slate-900">Sign In</Link>}
            {!isAuthenticated && <Link href="/register" className="text-slate-900">Register</Link>}
            {isAuthenticated && <Link href="/session" method="delete" as="button" className="text-slate-900">Sign Out</Link>}
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar
