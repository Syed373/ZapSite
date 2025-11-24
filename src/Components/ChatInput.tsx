"use client";

import { useState, useRef, useEffect } from "react";
import Send from "./Icons/Send";
import Plus from "./Icons/Plus";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/Components/ui/native-select"
import { cn } from "@/lib/utils"

export default function ChatInput() {
  const [value, setValue] = useState("");
  const [selectedAgent, setSelectedAgent] = useState("");
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
      <div className="transition-all ease-in-out duration-500 bg-background w-full rounded-2xl flex flex-col justify-center items-center">

        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask Anything..."
          className="m-2 font-light text-foreground text-base sm:text-lg w-[95%] border-0 p-5 resize-none 
                     overflow-y-auto overflow-x-hidden focus:outline-none focus:ring-0
                     max-h-40 scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-transparent
                     rounded-lg"
          rows={1}
        />

        <div className="flex justify-between items-center py-2 border-t border-[#353535] w-[90%]">
          <button className=" flex gap-4 items-center cursor-pointer">
            <Plus />
            <div className="cursor-pointer relative">
              <div className={`flex items-center justify-center ${selectedAgent ? 'hidden' : 'text-sm sm:text-base text-gray-400 hover:text-white transition'}`}>
                Agents
              </div>
              <div className={cn(
                !selectedAgent ? "absolute inset-0 opacity-0" : ""
              )}>
                <NativeSelect
                  value={selectedAgent}
                  onChange={(e) => setSelectedAgent(e.target.value)}
                >
                  <option value="" disabled hidden>Select Agent</option>
                  <NativeSelectOption value="banana">Banana</NativeSelectOption>
                  <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
                  <NativeSelectOption value="grapes">Grapes</NativeSelectOption>
                  <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
                </NativeSelect>
              </div>
            </div>
          </button>
          <button className="hover:bg-WhenHover text-white p-3 rounded-full text-sm transition cursor-pointer">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
}
