import'./styles.css'

const Button = ({ children, onClick }) => {
  return (
      <button
        className="component-button"
        onClick={onClick}
      >
        {children}
      </button>
  )
}

export default Button