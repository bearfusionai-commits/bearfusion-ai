import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden">
      
      {/* 1. The Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop')",
          filter: "brightness(0.3)" 
        }}
      ></div>

      {/* 2. The Header Content */}
      <div className="z-10 w-full max-w-4xl text-center mb-8">
        <h1 className="text-5xl font-black tracking-tighter uppercase italic text-white drop-shadow-2xl">
          BearFusion <span className="text-blue-500 not-italic">v1.0</span>
        </h1>
        <p className="text-blue-200/60 font-mono text-xs mt-3 tracking-widest uppercase text-center w-full flex justify-center">
          Enterprise Home Service Intelligence
        </p>
      </div>
      
      {/* 3. The Chat Box - Glass Effect */}
      <div className="flex flex-col w-full max-w-4xl h-[70vh] border border-white/20 rounded-[2.5rem] shadow-2xl bg-slate-900/80 backdrop-blur-md p-6 relative overflow-hidden z-10">
        <Chat />
      </div>

      <div className="z-10 mt-8 flex items-center gap-2 text-slate-400 text-[10px] font-mono tracking-widest uppercase">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Secure Lead Sync • Eastbourne Network
      </div>
    </main>
  );
}