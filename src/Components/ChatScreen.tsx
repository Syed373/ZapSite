
import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/Components/ui/resizable"
import Chats from './ui/chats';
import CodeEditor from './ui/CodeEditor';

interface ChatScreenProps {
    isOpen: boolean;
}

function ChatScreen({ isOpen }: ChatScreenProps) {
    return (
        <div className={`bg-back flex-1 rounded-xl font-mono transition-all ease-in-out duration-500 flex flex-col overflow-hidden h-[86%] right-2 fixed ${isOpen ? 'w-[95%] lg:w-[78.65%]' : 'w-[95%] lg:w-[98.8%]'} `}>
            <div className={`flex-1 overflow-y-auto p-4 flex justify-center items-center w-full h-full`}>
                <ResizablePanelGroup
                    orientation="horizontal"
                    className="min-h-[200px] rounded-lg border border-[#727272] md:min-w-[450px] w-full h-full"
                >
                    <ResizablePanel defaultSize={50} minSize={500}>
                        <div className="flex h-full items-center justify-center p-2 lg:p-6">
                            <span className="font-semibold w-full h-full"><Chats /></span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle className="hidden lg:flex" />
                    <ResizablePanel defaultSize={50} className="hidden lg:block">
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold w-full h-full"><CodeEditor /></span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    )
}

export default ChatScreen