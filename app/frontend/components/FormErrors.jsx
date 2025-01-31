import { humanize } from '../utils/string';

const FormErrors = ({errors}) => {
  if (!errors) return null;
  return(
    <div className="bg-rose-100 p-4 rounded-md my-2">
      <ul className="list-inside text-rose-500">
        {Object.keys(errors).map((key, index) => {
          return <li className="text-sm" key={index}>{humanize(key)} {errors[key]}</li>
        })}
      </ul>
    </div>
  )
}

export default FormErrors;