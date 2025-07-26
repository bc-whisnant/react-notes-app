const Select = ({ label, name, value, onChange, options }) => {
  return (
    <>
    <label htmlFor={ name } className="block font-semibold">{ label }</label>
    <select
      name={name}
      type="text"
      className="w-full p-2 border rounded-lg"
      value={value}
      onChange={onChange}
    >
      { options.map((option, index) => (
         <option key={ index } value={ option } >{ option }</option>
      ))}
    </select>
    { label }: {value}
  </>
  )
}

export default Select
