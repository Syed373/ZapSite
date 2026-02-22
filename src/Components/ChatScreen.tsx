
import React from 'react'

interface ChatScreenProps {
    isOpen: boolean;
}

function ChatScreen({ isOpen }: ChatScreenProps) {
    return (
        <div className={`bg-back flex-1 rounded-xl font-mono transition-all ease-in-out duration-500 flex flex-col overflow-hidden h-[86%] right-2 fixed ${isOpen? 'w-[78.65%]' : 'w-[98.8%]'} `}>
            <div className={`flex-1 overflow-y-auto p-4 flex justify-center items-center`}>
                {/* Empty state */}
                <div className="text-center text-foreground text-2xl font-bold opacity-30 select-none">
                    ALL chats will be displayed here
                </div>
            </div>
        </div>
    )
}

export default ChatScreen