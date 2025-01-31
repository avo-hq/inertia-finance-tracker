import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm, usePage } from '@inertiajs/react'
import TextInput from '../../components/TextInput'
import FormGroup from '../../components/FormGroup'
import Combobox from '../../components/Combobox'
import Button from '../../components/Button'
import Select from '../../components/Select'

const FormDialog = ({open, setOpen, onSubmit}) => {
  const {errors, current_user, categories, transaction_types} = usePage().props;

  const {post, data, setData, processing, reset} = useForm({
    category_id: categories[0].id,
    amount_cents: 100,
    transaction_type: transaction_types[0],
    description: '',
    date: '',
  });

  const handleSubmit = () => {
    post('/transactions', {
      transform: (data) => {
        data.user_id = current_user.id
        return data
      },
      onSuccess: () => {
        setOpen(false);
        reset();
      }
    })
  }

  return (
    <Dialog open={open} onClose={setOpen} className="relative">
      <DialogBackdrop
        transition
        className="fixed inset-0 z-20 bg-zinc-900/75 backdrop-blur-xs transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-30 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform  rounded-lg bg-white px-4 pt-5 pb-8 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:pb-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div>
              <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
                Record new transaction
              </DialogTitle>
              <div>
                <p className="text-sm text-gray-500">
                  Record any expense or income here.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-4">
                <FormGroup>
                  <TextInput label="Name" name="name" value={data.name} onChange={(ev) => setData('name', ev.target.value)} errors={errors && errors.name} />
                </FormGroup>
                <FormGroup columns={2} className="mt-3">
                  <Select label="Category" name="category_id" options={categories} selectedId={data.category_id} onChange={(category) => setData('category_id', category.id)} errors={errors && errors.category_id} />
                  <Select label="Type" name="transaction_type" options={transaction_types} onChange={(transactionType) => setData('transaction_type', transactionType.id)} selectedId={transaction_types[0].id} errors={errors && errors.transaction_type} />
                </FormGroup>
                <Button type="submit" variant="primary" rounded="md" size="sm" fullWidth className="mt-6" isLoading={processing}>
                  Create
                </Button>
              </form>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default FormDialog;