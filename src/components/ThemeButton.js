import React , {useState}from 'react'

function ThemeButton() {
    const [theme, setTheme] =useState('theme' ? 'dark' : 'ligth')
    const switchTheme = () => {
        const newTheme = theme === 'theme' ? 'dark' : 'light'
        setTheme(newTheme)
      }
     
  return (
    <button onClick={switchTheme} style={{color: 'white'}}>Clik</button>
  )
}

export default ThemeButton
