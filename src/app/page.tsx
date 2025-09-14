import ChatInput from "@/Components/ChatInput";
import ChatScreen from "@/Components/ChatScreen";
import Sidebar from "@/Components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-screen p-4 gap-4">
        <Sidebar />
        <ChatScreen />
      </div>
    </>
  );
}
