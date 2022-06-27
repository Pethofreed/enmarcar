import'./styles.css'

const Button = ({ children, onClick }) => {
  return (
    <div className='container-button'>
      <button
        className="component-button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default Button