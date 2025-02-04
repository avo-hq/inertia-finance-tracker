import React, {useState} from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {ChevronDown, Home, Settings, X, Tag, Tickets, Menu as MenuIcon, Search} from "lucide-react"

import {usePage, Link} from "@inertiajs/react"
import FlashMessages from "../components/FlashMessages"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout({children}) {
  const url = usePage().url;
  const currentUser = usePage().props.current_user;
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home, current: url.startsWith('/dashboard') },
    { name: 'Transactions', href: '/transactions', icon: Tickets, current: url.startsWith('/transactions') },
    { name: 'Categories', href: '/categories', icon: Tag, current: url.startsWith('/categories') },
  ]

  return (
    <>
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-10 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/90 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                    <span className="sr-only">Close sidebar</span>
                    <X aria-hidden="true" className="size-6 text-white" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-emerald-950 px-6 pb-4">
                <Link href="/dashboard" className="flex h-16 shrink-0 items-center">
                  <h2 className="text-white text-2xl font-bold">Avonomy</h2>
                </Link>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-emerald-700 text-white'
                                  : 'text-emerald-200 hover:bg-emerald-700 hover:text-white',
                                'group flex gap-x-3 rounded-md p-2 text-xs/6 font-semibold',
                              )}
                            >
                              <item.icon
                                strokeWidth={2}
                                size={16}
                              />
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-emerald-900 px-6 pb-4">
            <Link href="/dashboard" className="flex h-16 shrink-0 items-center">
              <h2 className="text-white text-2xl font-bold">Avonomy</h2>
            </Link>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-emerald-800 text-white'
                              : 'text-emerald-200 hover:bg-emerald-800 hover:text-white transition-colors duration-300',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            strokeWidth={2}
                            className={classNames(
                              item.current ? 'text-white' : 'text-emerald-300 group-hover:text-white transition-colors duration-300',
                              'size-5 shrink-0',
                            )}
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <MenuIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Separator */}
            <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6"
                />
                <Search
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                />
              </form>
              <div className="flex items-center">
                <Menu as="div">
                  <MenuButton className="flex items-center p-1.5 gap-x-3">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={currentUser.avatar_url}
                      className="size-8 rounded-full bg-gray-50"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span aria-hidden="true" className="text-sm/6 font-semibold text-gray-900">
                        {currentUser.username}
                      </span>
                      <ChevronDown aria-hidden="true" className="ml-2 size-5 text-gray-400" />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-48 origin-top-right rounded-md bg-white py-2 ring-1 shadow-lg ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 cursor:pointer data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <Link href="/profile" className="block px-4 py-2 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden">
                      Edit my profile
                    </Link>
                    <Link href="/session" as="button" method="delete" className="block px-4 py-2 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden">
                      Sign out
                    </Link>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main>
            <FlashMessages />
            <div className="py-8 px-4 sm:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
