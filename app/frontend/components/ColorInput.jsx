const ColorInput = ({label, name, value, errors, onChange}) => {
  return (
    <>
      <label htmlFor="color_code" className="flex text-sm w-full font-medium text-gray-900">{label}</label>
      <div className="w-6 h-6 relative rounded-full overflow-hidden">
        <input type="color" name={name} value={value} onChange={onChange} className="border-none w-[200%] h-[200%] absolute inset-0" style={{margin: '-50%'}} />
      </div>
      {errors && errors[name] && <p className="text-rose-500 text-sm mt-1">{`${label} ${errors[name]}`}</p>}
    </>
  )
}

export default ColorInput;