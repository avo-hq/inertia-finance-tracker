import clsx from 'clsx'

const DateTimeField = ({ label, name, value, onChange, errors, required = false }) => {
  return (
    <div className="space-y-1">
      <label 
        htmlFor={name} 
        className={clsx(
          'flex text-sm font-medium',
          errors ? 'text-rose-500' : 'text-gray-900'
        )}
      >
        {label}
        {required && <span className="ml-1 text-rose-500">*</span>}
      </label>
      
      <input
        type="datetime-local"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={clsx(
          'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900',
          'border border-gray-300',
          'focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20',
          'placeholder:text-gray-400 sm:text-sm/6',
          'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
          errors && 'border-rose-400 focus:border-rose-400 focus:ring-rose-500/20'
        )}
      />
      
      {errors && (
        <p className="text-sm text-rose-500 mt-1">
          {`${label} ${errors}`}
        </p>
      )}
    </div>
  )
}

export default DateTimeField