import React from 'react'
import { useTheme } from '../hooks/useTheme'

const themeColors = ['bg-slate-400', 'bg-rose-400', 'bg-cyan-400']

export default function ThemeSelector() {
  const {changeColor} = useTheme()

  return (
    <div className='absolute top-24 left-4 flex flex-col gap-2'>
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
