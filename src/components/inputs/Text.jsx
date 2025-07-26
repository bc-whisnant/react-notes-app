const Text = ({ label, name, value, onChange, required = false }) => {
  return (
    <>
      <label htmlFor={ name } className="block font-semibold">{ label }</label>
      <input
        name={ name }
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      />
       {label}: {value}
    </>
  )
}

export default Text