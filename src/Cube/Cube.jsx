import './Cube.css'
const Cube = ({ text, color, font }) => {
  let splittedText = text.toUpperCase().split('')
  splittedText.length = 6
  splittedText = [...splittedText].map((el) => {
    if (el === undefined) return '*'
    return el
  })
  return (
    <div className="cube_wrapper">
      <div className="cube" style={{ fontFamily: font }}>
        <div className="side front" style={{ color: color }}>
          <div className="wide">{`${splittedText[4]}${splittedText[5]}`}</div>
        </div>
        {/* <div class="side back">
          <div className="wide">{`${splittedText[4]}${splittedText[5]}`}</div>
        </div> */}
        {/* <div class="side right">
          <div className="wide">{`${splittedText[2]}${splittedText[3]}`}</div>
        </div> */}
        <div className="side left" style={{ color }}>
          <div className="wide">{`${splittedText[2]}${splittedText[3]}`}</div>
        </div>
        <div className="side top" style={{ color }}>
          <div className="wide">{`${splittedText[0]}${splittedText[1]}`}</div>
        </div>
        {/* <div class="side bottom">
          <div className="wide">{`${splittedText[0]}${splittedText[1]}`}</div>
        </div> */}
      </div>
    </div>
  )
}
export default Cube
