
import ChatInput from './ChatInput'

function ChatScreen() {
    return (
        <div className="bg-back h-full w-full rounded-xl flex justify-center font-mono transition-all ease-in-out duration-500">
            <div className="h-full w-75 md:w-4xl flex flex-col">
                <div className="flex flex-1 overflow-y-auto md:p-4 justify-center items-center ">
                    <div className='space-y-2 text-xs md:text-sm'>
                        <div className="hover:bg-WhenHover p-2 w-xs md:w-md rounded-lg text-foreground">- Write a short story about a robot discovering emotions</div>
                        <div className="hover:bg-WhenHover p-2 w-xs md:w-md rounded-lg text-foreground">- Help me outline a sci-fi novel set in a post-apocalyptic world</div>
                        <div className="hover:bg-WhenHover p-2 w-xs md:w-md rounded-lg text-foreground">- How many Rs are in the word 'strawberry'? </div>
                        <div className="hover:bg-WhenHover p-2 w-xs md:w-md rounded-lg text-foreground">- Give me 5 creative writing prompts for flash fiction</div>
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