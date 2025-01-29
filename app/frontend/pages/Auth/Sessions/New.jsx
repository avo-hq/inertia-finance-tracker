import Layout from "~/layouts/AppLayout"
import Container from "~/components/Container"

import {useForm, router} from '@inertiajs/react'

const New = () => {
  const {post, data, setData, processing, reset} = useForm({
    email_address: '',
    password: '',
  })

  const handleSubmit = (ev) => {
    ev.preventDefault();

    console.log(data)
    post('/session', {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        reset()
      },
      onError: (errors) => {
        console.log(errors)
      }
    })
  }

  return(
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={data.email_address}
              onChange={(ev) => setData('email_address', ev.target.value)}
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-emerald-900 hover:text-emerald-800">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              value={data.password}
              onChange={(ev) => setData('password', ev.target.value)}
              autoComplete="current-password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-emerald-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            {processing ? 'Signing in...' : 'Sign in'}
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <a href="#" className="font-semibold text-emerald-900 hover:text-emerald-800">
          Sign up for free
        </a>
      </p>
    </div>
  </div>
  )
}

New.layout = (page) => <Layout>{page}</Layout>

export default New
