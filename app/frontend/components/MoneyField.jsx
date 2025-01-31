import clsx from 'clsx';
import { DollarSign } from 'lucide-react';

const MoneyField = ({
  label,
  name,
  value,
  onChange,
  errors,
  required = false,
  placeholder = '0.00',
  currency = 'USD'
}) => {
  // Handle numeric input with 2 decimal places
  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
      onChange(e);
    }
  };

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
      
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <DollarSign 
            className={clsx(
              'h-5 w-5',
              errors ? 'text-rose-400' : 'text-gray-400'
            )} 
            aria-hidden="true" 
          />
        </div>
        
        <input
          type="text"
          inputMode="decimal"
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          className={clsx(
            'block w-full rounded-md bg-white pl-10 pr-3 py-1.5 text-base text-gray-900',
            'outline-1 -outline-offset-1 outline-gray-300',
            'placeholder:text-gray-400',
            'focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-700',
            'sm:text-sm/6',
            errors && 'outline-rose-400 placeholder:text-rose-300'
          )}
        />

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className={clsx(
            'text-sm',
            errors ? 'text-rose-400' : 'text-gray-400'
          )}>
            {currency}
          </span>
        </div>
      </div>
      
      {errors && (
        <p className="text-rose-500 text-sm mt-1">{`${label} ${errors}`}</p>
      )}
    </div>
  );
};

export default MoneyField;