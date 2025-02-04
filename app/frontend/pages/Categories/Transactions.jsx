import { Link } from "@inertiajs/react";

export default function Table({transactions}) {
  return (
    <div className="px-2 w-full">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Type
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Category
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Notes
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Amount
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      {transaction.transaction_type}
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-zinc-600">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: transaction.category_color_code }}></div>
                        <span>{transaction.category_name}</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{transaction.notes}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{transaction.amount}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
