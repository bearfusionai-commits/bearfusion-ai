import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-900 p-4">
      
      {/* Title Section */}
      <div className="z-10 w-full max-w-4xl text-center mb-6">
        <h1 className="text-4xl font-black text-white uppercase tracking-widest">
          BearFusion AI
        </h1>
        <div className="h-1 w-20 bg-blue-400 mx-auto mt-2"></div>
      </div>
      
      {/* The Chat Box - Solid White for visibility */}
      <div className="flex flex-col w-full max-w-4xl h-[75vh] border-4 border-white rounded-2xl shadow-2xl bg-white p-4 relative overflow-hidden z-10">
        <Chat />
      </div>

      <p className="mt-4 text-blue-200 text-xs font-mono uppercase tracking-widest">
        Live Lead Sync Enabled • Eastbourne Network
      </p>
    </main>
  );
}