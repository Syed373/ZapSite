"use client"
import { ThemeProvider } from "next-themes";

function ThemeProviders({children, ...Props}: any) {
  return (
    <ThemeProvider {...Props}>
        {children}
    </ThemeProvider>
  )
}

export default ThemeProviders