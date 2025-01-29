import Layout from "~/layouts/AppLayout"
import Container from "~/components/Container"
import { Head } from "@inertiajs/react"

const Home = () => {
  return (
    <div>
      <div className="relative overflow-hidden bg-slate-50 py-20 sm:py-32">
        {/* Blurred gradient backgrounds */}
        <div className="absolute inset-0 z-1 overflow-hidden">
          <div className="absolute -top-[40rem] left-[5%] h-[100rem] w-[100rem] -translate-x-1/2 opacity-10 mix-blend-multiply blur-3xl">
            <div className="aspect-square h-full w-full rounded-full bg-gradient-to-tr from-[#4ade80] to-[#10b981]"></div>
          </div>
          <div className="absolute top-[5rem] right-[5%] h-[70rem] w-[70rem] opacity-10 mix-blend-multiply blur-3xl">
            <div className="aspect-square h-full w-full rounded-full bg-gradient-to-r from-[#84cc16] to-[#22c55e]"></div>
          </div>
        </div>

        {/* White angled background */}
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        </div>

        {/* Main content */}
        <div className="relative mx-auto max-w-7xl z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:ml-24">
            <h1 className="font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
              Smart finance tracking,{' '}
              <span className="text-emerald-600">simplified.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Take control of your personal finances with intelligent tracking, 
              thoughtful insights, and practical tools that help you make better 
              financial decisions.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="/dashboard"
                className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-700"
              >
                Start tracking
              </a>
              <a
                href="/learn-more"
                className="text-sm font-medium text-slate-700 hover:text-emerald-700"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Container for Head component */}
      <Container>
        <Head title="Home - Financier" />
      </Container>
    </div>
  )
}

Home.layout = (page) => <Layout>{page}</Layout>

export default Home