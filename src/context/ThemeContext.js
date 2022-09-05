import { createContext } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}){

  return(
    <ThemeContext.Provider value={{color: "bg-slate-500"}}>
      {children}
    </ThemeContext.Provider>
  )
}