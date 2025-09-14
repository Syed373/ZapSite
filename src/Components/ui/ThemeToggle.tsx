"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes";
import ThemeToggleIcon from "../Icons/ThemeToggleIcon";

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
            className='cursor-pointer transition-all duration-300'>
            <ThemeToggleIcon />
        </button>
    ): null
}

export default ThemeToggle;