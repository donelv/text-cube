import { useEffect, useState } from 'react'
import './Cube.css'
const Cube = ({ text, color }) => {
  let splittedText = text.toUpperCase().split('')
  splittedText.length = 6
  splittedText = [...splittedText].map((el) => {
    if (el === undefined) return '*'
    return el
  })
  return (
    <div className="cube_wrapper">
      <div className="cube">
        <div className="side front" style={{ color }}>
          <div className="wide">{`${splittedText[4]}${splittedText[5]}`}</div>
        </div>
        {/* <div class="side back"></div> */}
        {/* <div class="side right"></div> */}
        <div className="side left" style={{ color }}>
          <div className="wide">{`${splittedText[2]}${splittedText[3]}`}</div>
        </div>
        <div className="side top" style={{ color }}>
          <div className="wide">{`${splittedText[0]}${splittedText[1]}`}</div>
        </div>
        {/* <div class="side bottom"></div> */}
      </div>
    </div>
  )
}
export default Cube
