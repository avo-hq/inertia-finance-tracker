import clsx from 'clsx';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  rounded = 'md',
  isLoading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  icon = null,
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center space-x-3 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500',
    info: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    black: 'bg-gray-900 hover:bg-gray-800 text-white focus:ring-gray-500',
    alert: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    // Outline variants
    'primary-outline': 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500',
    'info-outline': 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    'black-outline': 'border-2 border-gray-900 text-gray-900 hover:bg-gray-50 focus:ring-gray-500',
    'alert-outline': 'border-2 border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-500',
    'success-outline': 'border-2 border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-500',
  };

  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  const loadingSpinner = (
    <svg 
      className="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        roundedStyles[rounded],
        fullWidth && 'w-full space-x-3',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      {children}
      <>{isLoading && loadingSpinner}</>
      {icon && !isLoading && <span className="mr-2">{icon}</span>}
    </button>
  );
};

export default Button;