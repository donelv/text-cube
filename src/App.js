import './App.css'
import Cube from './Cube/Cube'
import { createContext, useEffect, useState } from 'react'
import Input from './Input/Input'
import ColorPicker from './ColorPicker/ColorPicker'
import useLocalStorage from 'use-local-storage'
import Loader from './Loader/Loader'
// import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'
export const ThemeContext = createContext(null)

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
  // let [theme, setTheme] = useState('light')
  // let toggleTheme = () => {
  //   setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  // }
  useEffect(() => {
    Promise.all([
      document.fonts.load('12px AnonymousPro-Regular'),
      document.fonts.load('12px AnonymousPro-Bold'),
      document.fonts.load('12px aachenn'),
      // document.fonts.load('italic 700 1em Lato')
    ]).then(() => setIsReady(true))
  }, [])
  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="main" data-theme={theme}>
      {isReady ? (
        <>
          <button onClick={switchTheme} className="btn themeSwitcher">
            Light/Dark
          </button>
          <div className="wrapper">
            <Cube text={text} color={color} font={font} />
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
                  Hanalei
                </button>
                <button
                  onClick={() => {
                    setFont('Permanent Marker')
                  }}
                  className="btn"
                  style={{
                    fontFamily: 'Permanent Marker',
                    textDecoration:
                      font === 'Permanent Marker' ? 'underline' : '',
                  }}
                >
                  Permanent
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
                  Gotish
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
                  GochiHand
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
                  GoodDog
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                setText('DONELV')
                setColor('#f8ec24')
                setFont('Aachenn')
              }}
              className="btn"
            >
              RESET
            </button>

            {/* <ThemeSwitcher theme={theme} switchTheme={switchTheme} /> */}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
  // </ThemeContext.Provider>
}

export default App
