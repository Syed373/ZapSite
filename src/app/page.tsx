import ChatInput from "@/Components/ChatInput";
import ChatScreen from "@/Components/ChatScreen";
import Settings from "@/Components/Login";
import Sidebar from "@/Components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-screen p-4 gap-4">
        <div className="h-full space-y-4">
          <Sidebar />
          <Settings />
        </div>
        <ChatScreen />
      </div>
    </>
  );
}
