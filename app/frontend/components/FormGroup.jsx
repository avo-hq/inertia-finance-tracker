import clsx from 'clsx';

const FormGroup = ({ children, columns = 1, gap = 4, className }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  const gapSizes = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    8: 'gap-8',
  };

  return (
    <div 
      className={clsx(
        'grid w-full',
        gridCols[columns] || gridCols[1],
        gapSizes[gap] || gapSizes[4],
        className
      )}
    >
      {children}
    </div>
  );
};

export default FormGroup;