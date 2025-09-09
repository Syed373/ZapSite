"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes";

function ThemeToggle() {
    const [mount, setmount] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        setmount(true);
    }, [])

    const toggleTheme = () => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
    };

    return mount ? (
        <button
            onClick={toggleTheme}
            className='cursor-pointer'>
            <img src="ThemeToggle.svg" alt="Theme toggle" className="text-foreground"/>
        </button>
    ): null
}

export default ThemeToggle;