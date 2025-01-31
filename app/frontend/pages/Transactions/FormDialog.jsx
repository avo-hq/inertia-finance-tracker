import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm, usePage } from '@inertiajs/react'
import TextInput from '../../components/TextInput'
import ColorInput from '../../components/ColorInput'
import FormGroup from '../../components/FormGroup'
import Button from '../../components/Button'

const FormDialog = ({open, setOpen, onSubmit}) => {
  const {errors, current_user} = usePage().props;
  const {post, data, setData, processing, reset} = useForm({
    category_id: '',
    user_id: '',
    amount_cents: 100,
    transaction_type: 'income',
    description: '',
    date: '',
  });

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <DialogPanel className="fixed inset-0 w-full max-w-lg p-4 mx-auto my-auto bg-white rounded-lg shadow-lg">
        <DialogTitle>Record Transaction</DialogTitle>
      </DialogPanel>
    </Dialog>
  )
}

export default FormDialog;