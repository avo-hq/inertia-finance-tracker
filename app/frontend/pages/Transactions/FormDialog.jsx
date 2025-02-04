import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm, usePage } from '@inertiajs/react'
import { format } from 'date-fns'

import FormGroup from '../../components/FormGroup'
import FormErrors from '../../components/FormErrors'
import TextAreaField from '../../components/TextAreaField'
import DateTimeField from '../../components/DateTimeField'
import MoneyField from '../../components/MoneyField'
import Button from '../../components/Button'
import Select from '../../components/Select'

const FormDialog = ({open, setOpen, onSubmit}) => {
  const {errors, categories, transaction_types} = usePage().props;

  const {post, data, setData, processing, reset, transform} = useForm({
    category_id: categories[0].id,
    amount: 100,
    amount_currency: 'USD',
    transaction_type: transaction_types[0].id,
    artemis: true,
    notes: '',
    date: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
  });


  const handleSubmit = (evt) => {
    evt.preventDefault();

    post('/transactions', {
      data: transform((data) => {
        const date = new Date(data.date);
        const fullDate = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS");
        
        return {
          transaction: {
            category_id: data.category_id,
            amount: Math.abs(parseFloat(data.amount || 0)),
            amount_currency: data.amount_currency,
            transaction_type: data.transaction_type,
            notes: data.notes,
            date: fullDate
          }
        }
      }),
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
                <FormErrors errors={errors} />
                <FormGroup columns={2} className="mb-3">
                  <MoneyField
                    label="Amount"
                    name="amount"
                    value={data.amount}
                    onChange={(e) => {
                      setData('amount', e.target.value)
                    }}
                    errors={errors?.amount}
                    required
                    placeholder="0.00"
                    currency="USD"
                  />
                  <DateTimeField
                    label="Date"
                    name="date"
                    value={data.date}
                    onChange={(evt) => {
                      console.log(evt.target.value);
                      setData('date', evt.target.value)
                    }}
                    errors={errors?.date}
                    required
                  />
                </FormGroup>
                <FormGroup columns={2} className="mb-3">
                  <Select label="Category" name="category_id" options={categories} selectedId={data.category_id} onChange={(category) => setData('category_id', category.id)} errors={errors && errors.category_id} />
                  <Select label="Type" name="transaction_type" options={transaction_types} onChange={(transactionType) => {
                    setData('transaction_type', transactionType.id)
                  }} selectedId={transaction_types[0].id} errors={errors && errors.transaction_type} />
                </FormGroup>
                <FormGroup>
                <TextAreaField
                  label="Notes"
                  name="notes"
                  value={data.notes}
                  onChange={(e) => setData('notes', e.target.value)}
                  errors={errors?.notes}
                  rows={2}
                  placeholder="Add notes if you want..."
                />
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