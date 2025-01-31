import clsx from 'clsx';

const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  errors,
  required = false,
  rows = 3,
  placeholder = '',
}) => {
  return (
    <div className="space-y-1.5">
      <label 
        htmlFor={name} 
        className={clsx(
          'flex text-sm w-full font-medium',
          errors ? 'text-rose-500' : 'text-gray-900'
        )}
      >
        {label}
        {required && <span className="ml-1 text-rose-500">*</span>}
      </label>
      
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={clsx(
          'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900',
          'outline-1 -outline-offset-1 outline-gray-300',
          'placeholder:text-gray-400',
          'focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-700',
          'sm:text-sm/6',
          errors && 'outline-rose-400 placeholder:text-rose-300'
        )}
      />
      
      {errors && (
        <p className="text-rose-500 text-sm mt-1">{`${label} ${errors}`}</p>
      )}
    </div>
  );
};

export default TextAreaField;