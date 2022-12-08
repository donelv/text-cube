import './App.css'
import Cube from './Cube/Cube'
import { createContext, useEffect, useState } from 'react'
import Input from './Input/Input'
import ColorPicker from './ColorPicker/ColorPicker'
import useLocalStorage from 'use-local-storage'
import Loader from './Loader/Loader'
// import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'
// export const ThemeContext = createContext(null)

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  )
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  let [text, setText] = useState('donelv')
  let [color, setColor] = useState('#f8ec24')
  let [isReady, setIsReady] = useState(false)
  let [font, setFont] = useState('Aachenn')
  let [isRotating, setIsRotating] = useState(false)
  let [isGradient, setIsGradient] = useState(false)
  // let [theme, setTheme] = useState('light')
  // let toggleTheme = () => {
  //   setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  // }
  useEffect(() => {
    Promise.all([
      document.fonts.load('12px Aachenn'),
      document.fonts.load('12px AnonymousPro-Regular'),
      document.fonts.load('12px AnonymousPro-Bold'),
      document.fonts.load('12px PermanentMarker'),
      document.fonts.load('12px Hanalei'),
      document.fonts.load('12px HanaleiFill'),
      document.fonts.load('12px GochiHand'),
      document.fonts.load('12px Gotish'),
      document.fonts.load('12px GoodDog'),
    ]).then(() => setIsReady(true))
  }, [])
  return (
    <div className="main" data-theme={theme}>
      {isReady ? (
        <>
          <div className="wrapper">
            <Cube
              text={text}
              color={color}
              font={font}
              rotating={isRotating}
              isGradient={isGradient}
            />
            <div>
              <Input
                value={text}
                onChange={(event) => setText(event.currentTarget.value)}
                label="Text"
                style={{ textTransform: 'uppercase' }}
                maxLength="6"
              />
              <div className="colorInput">
                <Input
                  value={color}
                  onChange={(event) => setColor(event.currentTarget.value)}
                  label="Color"
                  style={{ textTransform: 'uppercase' }}
                />
                <ColorPicker
                  value={color}
                  onChange={(event) => setColor(event.currentTarget.value)}
                />
              </div>
              <div className="radioButtons">
                <label className="radioButtons_label">Font</label>
                <button
                  onClick={() => {
                    setFont('Aachenn')
                  }}
                  className="btn"
                  style={{
                    fontFamily: 'Aachenn',
                    textDecoration: font === 'Aachenn' ? 'underline' : '',
                  }}
                >
                  AACHENN
                </button>
                <button
                  onClick={() => {
                    setFont('Hanalei')
                  }}
                  className="btn"
                  style={{
                    fontFamily: 'Hanalei',
                    textDecoration: font === 'Hanalei' ? 'underline' : '',
                  }}
                >
                  HANALEI
                </button>
                <button
                  onClick={() => {
                    setFont('HanaleiFill')
                  }}
                  className="btn"
                  style={{
                    fontFamily: 'HanaleiFill',
                    textDecoration: font === 'HanaleiFill' ? 'underline' : '',
                  }}
                >
                  HANALEIFILL
                </button>
                <button
                  onClick={() => {
                    setFont('PermanentMarker')
                  }}
                  className="btn"
                  style={{
                    fontFamily: 'PermanentMarker',
                    textDecoration:
                      font === 'PermanentMarker' ? 'underline' : '',
                  }}
                >
                  PERMANENT
                </button>
                <button
                  onClick={() => {
                    setFont('Gotish')
                  }}
                  className="btn"
                  style={{
                    fontFamily: 'Gotish',
                    textDecoration: font === 'Gotish' ? 'underline' : '',
                  }}
                >
                  GOTISH
                </button>
                <button
                  onClick={() => {
                    setFont('GochiHand')
                  }}
                  className="btn"
                  style={{
                    fontFamily: 'GochiHand',
                    textDecoration: font === 'GochiHand' ? 'underline' : '',
                  }}
                >
                  GOCHIHAND
                </button>
                <button
                  onClick={() => {
                    setFont('GoodDog')
                  }}
                  className="btn"
                  style={{
                    fontFamily: 'GoodDog',
                    textDecoration: font === 'GoodDog' ? 'underline' : '',
                  }}
                >
                  GOODDOG
                </button>
              </div>
              <div className="radioButtons">
                <label className="radioButtons_label">Options</label>
                <button onClick={switchTheme} className="btn">
                  Light/Dark
                </button>
                <button
                  onClick={() => {
                    setIsRotating(!isRotating)
                  }}
                  className="btn"
                >
                  {isRotating ? (
                    <span style={{ color: '#f8ec24' }}>Spinnin'</span>
                  ) : (
                    <span>Spin</span>
                  )}
                </button>
                <button
                  onClick={() => {
                    setIsGradient(!isGradient)
                  }}
                  className="btn"
                >
                  <span className={`${isGradient ? 'gradientText' : ''}`}>
                    Gradient
                  </span>
                </button>
                <button
                  onClick={() => {
                    setText('DONELV')
                    setColor('#f8ec24')
                    setFont('Aachenn')
                    setIsGradient(false)
                    setIsRotating(false)
                  }}
                  className="btn"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default App
