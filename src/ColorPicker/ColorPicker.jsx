import './ColorPicker.css'
const ColorPicker = (props) => {
  return (
    <div className="colorPicker_wrapper">
      <input
        className="colorPicker"
        type="color"
        {...props}
        // value={props.value}/
        // onChange={(event) => setColor(event.currentTarget.value)}
      ></input>
    </div>
  )
}
export default ColorPicker
