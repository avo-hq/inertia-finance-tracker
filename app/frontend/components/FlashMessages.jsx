import { usePage } from '@inertiajs/react'
import { CircleAlert, TriangleAlert } from 'lucide-react'

const FlashMessages = () => {
  const { flash } = usePage().props

  if (flash.alert) {
    return <div className="bg-red-100 text-red-800 p-4 rounded-md">
      <div className="max-w-xl mx-auto flex justify-center items-center gap-2">
        <TriangleAlert className="w-6 h-6" />
        <p>{flash.alert}</p>
      </div>
    </div>
  }

  if (flash.notice) {
    return <div className="bg-blue-100 text-blue-800 p-4 rounded-md flex items-center gap-2">
      <div className="max-w-xl mx-auto flex justify-center items-center gap-2">
        <CircleAlert className="w-6 h-6" />
        <p>{flash.notice}</p>
      </div>
    </div>
  }

  return null
}

export default FlashMessages
