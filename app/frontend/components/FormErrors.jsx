import { humanize } from '../utils/string';

const FormErrors = ({errors}) => {
  if (!errors) return null;

  const renderErrors = (errors) => {
    // Check if object
    if (typeof errors === 'object') {
      return Object.keys(errors).map((key, index) => {
        return <li className="text-sm" key={index}>{humanize(key)} {errors[key]}</li>
      })
    } else {
      return <li className="text-sm">{errors}</li>
    }
  }
  
  return(
    <div className="bg-rose-100 p-4 rounded-md my-2">
      <ul className="list-inside text-rose-500">
        {renderErrors(errors)}
      </ul>
    </div>
  )
}

export default FormErrors;