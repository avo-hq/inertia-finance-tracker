import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useForm, usePage } from '@inertiajs/react'
import TextInput from '../../components/TextInput'
import ColorInput from '../../components/ColorInput'
import FormGroup from '../../components/FormGroup'
import Button from '../../components/Button'

export default function FormDialog({open, setOpen}) {
  const {errors, current_user} = usePage().props;

  const {post, data, transform, setData, processing, reset} = useForm({
    name: '',
    description: '',
    color_code: '#3687e3',
    icon: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    post('/categories', {
      data: transform((data) => {
        data.user_id = current_user.id;
        return data;
      }),
      onSuccess: () => {
        console.log('success');
        setOpen(false);
        reset();
      }
    });
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
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div>
              <DialogTitle as="h3" className="text-lg font-semibold text-gray-900">
                Create a new category
              </DialogTitle>
              <div>
                <p className="text-sm text-gray-500">
                  Add a category to help you keep track of how you spend your money.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-4">
                <input type="hidden" name="current_user_id" value={1} />
                <TextInput label="Name" name="name" value={data.name} onChange={(ev) => setData('name', ev.target.value)} errors={errors && errors.name} />
                <div className="flex items-center justify-between space-x-4 mt-3">
                  <FormGroup>
                    <TextInput label="Description" name="description" value={data.description} onChange={(ev) => setData('description', ev.target.value)} required={false} errors={errors && errors.description} />
                  </FormGroup>
                  <FormGroup>
                    <ColorInput label="Color code" name="color_code" value={data.color_code} onChange={(ev) => setData('color_code', ev.target.value)} errors={errors} />
                  </FormGroup>
                </div>
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
