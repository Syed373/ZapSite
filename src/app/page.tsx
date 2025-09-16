import ChatScreen from "@/Components/ChatScreen";
import Sidebar from "@/Components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-screen md:p-4 gap-2 md:gap-4">
        <Sidebar />
        <ChatScreen />
      </div>
    </>
  );
}
