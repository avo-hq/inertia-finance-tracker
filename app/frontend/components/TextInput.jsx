import clsx from 'clsx';

const TextInput = ({label, name, value, onChange, errors, required = false}) => {
  return (
    <div className="space-y-1.5">
      <label htmlFor="description" className={clsx('flex text-sm w-full font-medium text-gray-900', errors ? 'text-rose-500' : 'text-gray-900')}>
        {label}
      </label>
      <input 
        type="text" 
        id={name} 
        name={name} 
        value={value} 
        required={required}
        onChange={onChange}
        className={clsx(
          'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-700 sm:text-sm/6',
          errors ? 'outline-rose-400 placeholder:text-rose-300' : 'outline-gray-300'
        )}
      />
      {errors && <p className="text-rose-500 text-sm mt-1">{`${label} ${errors}`}</p>}
    </div>
  )
}

export default TextInput;