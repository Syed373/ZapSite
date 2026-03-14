"use client";

import { useState, useRef, useEffect } from "react";
import Send from "./Icons/Send";
import Plus from "./Icons/Plus";
import Mic from "./Icons/Mic";
import SidebarIcon from "./Icons/SidebarIcon";
import UserIcon from "./Icons/UserIcon";
import ThemeToggle from "./ui/ThemeToggle";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

interface BottomBarProps {
    onToggleSidebar: () => void;
}

export default function BottomBar({ onToggleSidebar }: BottomBarProps) {
    const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const btnClass =
        "flex-shrink-0 hover:bg-WhenHover rounded-full transition-all duration-500 ease-in-out cursor-pointer p-0.5";

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
        }
    }, [value]);

    return (
        <div className="flex bottom-3 fixed items-end z-[60] w-full px-1 lg:px-0 lg:w-auto justify-center lg:justify-start">
            {/* Login button */}
            <div className={`flex-shrink-0 w-auto lg:w-76 flex items-center justify-between gap-1 lg:gap-2 px-1 lg:px-3 py-2 bg-back transition-all ease-in-out duration-500 mx-1 lg:mx-2 rounded-xl h-16`}>
                <button
                    onClick={() => { router.push('/login') }}
                    className="hidden lg:flex items-center justify-center gap-1 lg:gap-2 bg-background border border-[#353535] text-sm font-mono rounded-xl w-auto lg:w-50 px-2 lg:px-4 py-1.5 transition-colors duration-200 cursor-pointer"
                >
                    <UserIcon />
                    <span className="hidden lg:inline">Login</span>
                </button>

                <div className="hidden lg:block flex-shrink-0 mt-1.5 rounded-full cursor-pointer">
                    <ThemeToggle />
                </div>

                {/* Sidebar toggle */}
                <button
                    onClick={onToggleSidebar}
                    className="flex-shrink-0 p-1.5 hover:bg-WhenHover rounded-lg transition-colors duration-200 cursor-pointer"
                >
                    <SidebarIcon />
                </button>
            </div>

            {/* Text input */}
            <div className="flex-1 min-w-0 lg:flex-shrink-0 lg:w-5xl flex items-center gap-1 lg:gap-2 px-1 lg:px-3 py-2 bg-back transition-all ease-in-out duration-500 rounded-xl min-h-16">
                <div className="flex-1 flex items-center border border-[#353535] rounded-xl px-2 lg:px-3 py-1 bg-background transition-all ease-in-out duration-500 min-w-0">
                    <textarea
                        ref={textareaRef}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Type here ......"
                        className="flex-1 font-mono text-sm text-foreground bg-transparent border-0 resize-none
                     overflow-y-auto focus:outline-none focus:ring-0
                     max-h-28 scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-transparent
                     py-1 leading-5"
                        rows={1}
                    />
                    <button className="flex-shrink-0 hover:bg-WhenHover p-1.5 rounded-full transition-colors duration-200 cursor-pointer ml-1">
                        <Send />
                    </button>
                </div>
            </div>

            <div className="flex-shrink-0 w-fit flex items-center gap-4.25 px-3 py-2 bg-back transition-all duration-500 mx-2 rounded-xl h-16">

                <button className={`hidden lg:block ${btnClass}`}>
                    <Plus />
                </button>
                <button className={`hidden lg:block ${btnClass}`}>
                    <Mic />
                </button>
                <button className={`hidden lg:block ${btnClass}`}>
                    <UserIcon />
                </button>
                <button className={`hidden lg:block ${btnClass}`}>
                    <UserIcon />
                </button>

                <div className="relative lg:hidden" ref={menuRef}>
                    <button
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className={btnClass}
                        aria-label="Toggle menu"
                    >
                        <span className={`block transition-all duration-200 ${menuOpen ? "rotate-90 opacity-0 absolute" : "rotate-0 opacity-100"}`}>
                            <Menu />
                        </span>
                        <span className={`block transition-all duration-200 ${menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0 absolute"}`}>
                            <X />
                        </span>
                    </button>

                    {menuOpen && (
                        <div className={`absolute -right-2 bottom-full mb-6 flex flex-col gap-2 bg-back border border-[#353535] rounded-xl p-2 shadow-lg z-50 transition-all duration-500 origin-top-right ${menuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
                            <button className={btnClass}>
                                <Plus />
                            </button>
                            <button className={btnClass}>
                                <Mic />
                            </button>
                            <button className={btnClass}>
                                <UserIcon />
                            </button>
                            <button className={btnClass}>
                                <UserIcon />
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
