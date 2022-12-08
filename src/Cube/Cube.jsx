import { useRef } from 'react'
import { useEffect } from 'react'
import './Cube.css'
const Cube = ({ text, color, font, rotating, isGradient }) => {
  let splittedText = text.toUpperCase().split('')
  splittedText.length = 6
  splittedText = [...splittedText].map((el) => {
    if (el === undefined) return '*'
    return el
  })
  let ref = useRef()
  useEffect(() => {
    if (!rotating) {
      ref.current.onanimationiteration = () => {
        ref.current.className = 'cube'
      }
    } else {
      ref.current.onanimationiteration = null
      ref.current.className = 'cube rotating'
    }
  }, [rotating])
  return (
    <div className="cube_wrapper">
      <div ref={ref} className={'cube'} style={{ fontFamily: font }}>
        <div className="side front " style={{ color: color }}>
          <div
            className={`wide ${isGradient ? 'rainbow' : ''} bp`}
          >{`${splittedText[4]}${splittedText[5]}`}</div>
        </div>
        <div className="side back" style={{ color: color }}>
          <div
            className={`wide ${isGradient ? 'rainbow' : ''} bp`}
          >{`${splittedText[4]}${splittedText[5]}`}</div>
        </div>
        <div className="side right" style={{ color: color }}>
          <div
            className={`wide ${isGradient ? 'rainbow' : ''} yg`}
          >{`${splittedText[2]}${splittedText[3]}`}</div>
        </div>
        <div className="side left " style={{ color }}>
          <div
            className={`wide ${isGradient ? 'rainbow' : ''} yg`}
          >{`${splittedText[2]}${splittedText[3]}`}</div>
        </div>
        <div className="side top" style={{ color }}>
          <div
            className={`wide ${isGradient ? 'rainbow' : ''} ro`}
          >{`${splittedText[0]}${splittedText[1]}`}</div>
        </div>
        <div className="side bottom" style={{ color: color }}>
          <div
            className={`wide ${isGradient ? 'rainbow' : ''} ro`}
          >{`${splittedText[0]}${splittedText[1]}`}</div>
        </div>
      </div>
    </div>
  )
}
export default Cube
