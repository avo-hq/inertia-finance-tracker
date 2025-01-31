import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronsUpDownIcon, Check } from 'lucide-react'

export default function Select({label, options = [], onChange, selectedId}) {
  const selected = options.find(option => option.id === selectedId)

  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="space-y-1.5">
        <Label className="block text-sm/6 font-medium text-gray-900">{label}</Label>
        <div className="relative mt-1">
          <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pr-2 pl-3 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6">
            <span className="col-start-1 row-start-1 truncate pr-6">{selected.name}</span>
            <ChevronsUpDownIcon
              aria-hidden="true"
              className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            />
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
          >
            {options.map((option) => (
              <ListboxOption
                key={option.id}
                value={option}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-emerald-100 data-focus:text-emerald-700 data-focus:outline-hidden"
              >
                <span className="block truncate font-normal group-data-selected:font-semibold">{option.name}</span>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-emerald-600 group-not-data-selected:hidden group-data-focus:text-emerald-700">
                  <Check aria-hidden="true" className="size-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  )
}
