"use client";

import { useState, useRef, useEffect } from "react";
import Send from "./Icons/Send";
import Plus from "./Icons/Plus";

export default function ChatInput() {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
    }
  }, [value]);

  return (
    <div className="w-full max-w-4xl mx-auto p-1 rounded-2xl border border-[#353535]">
      <div className="transition-all ease-out duration-500 bg-background w-full rounded-2xl flex flex-col justify-center items-center">

        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask Anything..."
          className="m-2 font-medium text-foreground text-base sm:text-lg w-[95%] border-0 p-5 resize-none 
                     overflow-y-auto overflow-x-hidden focus:outline-none focus:ring-0
                     max-h-40 scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-transparent
                     rounded-lg"
          rows={1}
        />

        <div className="flex justify-between items-center py-2 border-t border-[#353535] w-[90%]">
          <button className=" flex gap-4 items-center">
            <div className="cursor-pointer"><Plus /></div>
            <div className="text-sm sm:text-base text-gray-400 hover:text-white transition cursor-pointer">Agents</div>
          </button>
          <button className="hover:bg-WhenHover text-white p-3 rounded-full text-sm  transition">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
}
