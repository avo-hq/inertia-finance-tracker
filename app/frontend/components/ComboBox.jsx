import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label } from '@headlessui/react'
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ComboBox({label, options, value, onChange, onClose}) {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          return option.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      as="div"
      value={selectedPerson}
      onChange={(person) => {
        setQuery('')
        setSelectedPerson(person)
      }}
    >
      <Label className="block text-sm/6 font-medium text-gray-900">{label}</Label>
      <div className="relative mt-1">
        <ComboboxInput
          className="block w-full rounded-md bg-white py-1.5 pr-12 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-600 sm:text-sm/6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(person) => person?.name}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-hidden">
          <ChevronsUpDown className="size-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredOptions.length > 0 && (
          <ComboboxOptions className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 shadow-lg ring-black/5 focus:outline-hidden sm:text-sm">
            {options.map((option) => (
              <ComboboxOption
                key={option.id}
                value={option}
                className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-zinc-100 data-focus:text- data-focus:outline-hidden"
              >
                <div className="flex items-center">
                  <span
                    className="inline-block size-2 shrink-0 rounded-full"
                    aria-hidden="true"
                    style={{ backgroundColor: option.color_code }}
                  />
                  <span className="ml-3 truncate group-data-selected:font-semibold">
                    {option.name}
                  </span>
                </div>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-emerald-600 group-data-focus:text-emerald-700 group-data-selected:flex">
                  <Check className="size-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
