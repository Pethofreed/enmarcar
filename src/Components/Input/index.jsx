import "./styles.css"

const Input = ({ id, label, onChange, placeholder, type, value }) => {
  return(
    <div className="container-label-input">
      {label &&
        <label
          className="label-component"
          htmlFor={id}
        >
          {label}
        </label>
      }
      <input
        className="input-component"
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input