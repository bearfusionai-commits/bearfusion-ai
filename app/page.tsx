import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610444583733-5e7440fb3590?q=80&w=1920&auto=format&fit=crop')" }}>
      {/* Semi-transparent overlay to help text readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex border-b border-gray-700 pb-6 pt-8 relative">
        <div className="flex w-full items-center justify-center font-mono">
          <p className="flex w-full justify-center text-4xl font-extrabold text-white uppercase tracking-tight">
            BearFusion <span className="text-gray-400 font-medium ml-2">v1.0</span>
          </p>
        </div>
      </div>
      
      {/* This is your chat box container */}
      <div className="flex flex-col w-full max-w-5xl h-[70vh] border border-white/20 rounded-3xl shadow-2xl bg-black/70 backdrop-blur-sm p-6 my-10 relative overflow-hidden z-10">
        <Chat />
      </div>
    </main>
  );
}