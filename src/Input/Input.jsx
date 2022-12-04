import './Input.css'
const Input = ({ label, ...props }) => {
  return (
    <div className="input_wraper">
      <input
        // type={props.type}
        className="input"
        // spellCheck="false"
        {...props}
        placeholder=" "
        // required={props.required}
      />
      <label className="input_label">{label}</label>
    </div>
  )
}
export default Input
