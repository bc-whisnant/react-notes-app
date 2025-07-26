const TextArea = ({ label, name, value, onChange, required }) => {
  return (
    <>
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <textarea
        name={name}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      ></textarea>
      {label}: {value}
    </>
  )
}

export default TextArea
