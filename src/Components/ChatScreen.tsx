
import ChatInput from './ChatInput'

function ChatScreen() {
    return (
        <div className="bg-back h-full flex-1 rounded-xl flex justify-center font-mono transition-all ease-in-out duration-500 min-w-0">
            <div className="h-full w-full max-w-4xl flex flex-col">
                <div className="flex flex-1 overflow-y-auto p-2 md:p-4 justify-center items-center ">
                    <div className='space-y-2 text-xs md:text-sm w-full max-w-md'>
                        <div className="hover:bg-WhenHover p-2 rounded-lg text-foreground">- Write a short story about a robot discovering emotions</div>
                        <div className="hover:bg-WhenHover p-2 rounded-lg text-foreground">- Help me outline a sci-fi novel set in a post-apocalyptic world</div>
                        <div className="hover:bg-WhenHover p-2 rounded-lg text-foreground">- How many Rs are in the word 'strawberry'? </div>
                        <div className="hover:bg-WhenHover p-2 rounded-lg text-foreground">- Give me 5 creative writing prompts for flash fiction</div>
                    </div>
                </div>

                <div className="p-2">
                    <ChatInput />
                </div>
            </div>
        </div>
    )
}

export default ChatScreen