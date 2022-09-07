import React from 'react'
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/modeIcon.svg'
const themeColors = ['bg-slate-400', 'bg-rose-400', 'bg-cyan-400']

export default function ThemeSelector() {
  const {changeColor, changeMode, mode} = useTheme()
  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className='absolute justify-center items-center top-24 left-4 flex flex-col gap-2'>
      <div>
        <img 
          src={modeIcon}
          alt="dark/light mode toggle"
          onClick={toggleMode}
          className='w-6 h-6 transition-all'
          style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
        />
      </div>
      {themeColors.map(color => (
        <div
          key={color}
          onClick={() => changeColor(color)}
          className={`w-4 h-4 rounded-full ${color}`}
        />
      ))}
    </div>
  )
}
