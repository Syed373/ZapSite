
import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/Components/ui/resizable"

interface ChatScreenProps {
    isOpen: boolean;
}

function ChatScreen({ isOpen }: ChatScreenProps) {
    return (
        <div className={`bg-back flex-1 rounded-xl font-mono transition-all ease-in-out duration-500 flex flex-col overflow-hidden h-[86%] right-2 fixed ${isOpen ? 'w-[78.65%]' : 'w-[98.8%]'} `}>
            <div className={`flex-1 overflow-y-auto p-4 flex justify-center items-center w-full h-full`}>
                <ResizablePanelGroup
                    orientation="horizontal"
                    className="min-h-[200px] rounded-lg border md:min-w-[450px] w-full h-full"
                >
                    <ResizablePanel defaultSize="50%" minSize={500}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">CHATS</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize="50%">
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">CODE</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    )
}

export default ChatScreen