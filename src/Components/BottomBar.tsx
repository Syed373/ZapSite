"use client";

import { useState, useRef, useEffect } from "react";
import Send from "./Icons/Send";
import Plus from "./Icons/Plus";
import Mic from "./Icons/Mic";
import SidebarIcon from "./Icons/SidebarIcon";
import UserIcon from "./Icons/UserIcon";
import ThemeToggle from "./ui/ThemeToggle";
import { useRouter } from "next/navigation";

interface BottomBarProps {
    onToggleSidebar: () => void;
}

export default function BottomBar({ onToggleSidebar }: BottomBarProps) {
    const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
        }
    }, [value]);

    return (
        <div className="flex bottom-3 fixed items-end z-10">
            {/* Login button */}
            <div className={`flex-shrink-0 w-76 flex items-center justify-between gap-2 px-3 py-2 bg-back transition-all ease-in-out duration-500 mx-2 rounded-xl h-16`}>
                <button
                    onClick={() => { router.push('/Login') }}
                    className="flex items-center justify-center gap-2 bg-background border border-[#353535] text-sm font-mono rounded-xl w-50 px-4 py-1.5 transition-colors duration-200 cursor-pointer"
                >
                    <UserIcon />
                    <span>Login</span>
                </button>

                <div className="flex-shrink-0 mt-1.5 rounded-full cursor-pointer">
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
            <div className="flex-shrink-0 w-5xl flex items-center gap-2 px-3 py-2 bg-back transition-all ease-in-out duration-500 rounded-xl min-h-16">
                <div className="flex-1 flex items-center border border-[#353535] rounded-xl px-3 py-1 bg-background transition-all ease-in-out duration-500 min-w-0">
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
                    {/* Send button */}
                    <button className="flex-shrink-0 hover:bg-WhenHover p-1.5 rounded-full transition-colors duration-200 cursor-pointer ml-1">
                        <Send />
                    </button>
                </div>
            </div>


            {/* Plus button */}
            <div className="flex-shrink-0 w-fit flex items-center gap-4.25 px-3 py-2 bg-back transition-all ease-in-out duration-500 mx-2 rounded-xl h-16">
                <button className="flex-shrink-0 border border-[#353535] hover:bg-WhenHover rounded-full transition-colors duration-200 cursor-pointer">
                    <Plus />
                </button>

                {/* Mic button */}
                <button className="flex-shrink-0 border border-[#353535] hover:bg-WhenHover rounded-full transition-colors duration-200 cursor-pointer">
                    <Mic />
                </button>

                {/* Avatar / user icon */}
                <button className="flex-shrink-0 border border-[#353535] hover:bg-WhenHover rounded-full transition-colors duration-200 cursor-pointer">
                    <UserIcon />
                </button>

                <button className="flex-shrink-0 border border-[#353535] hover:bg-WhenHover rounded-full transition-colors duration-200 cursor-pointer">
                    <UserIcon />
                </button>
            </div>
        </div>
    );
}
