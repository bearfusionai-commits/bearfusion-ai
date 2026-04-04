import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white font-sans">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="z-10 w-full max-w-4xl text-center mb-8">
        <h1 className="text-5xl font-black tracking-tighter uppercase italic drop-shadow-sm">
          BearFusion <span className="text-blue-400 not-italic">v1.0</span>
        </h1>
        <p className="text-blue-200/50 font-mono text-xs mt-3 tracking-[0.3em] uppercase">
          Enterprise Home Service Intelligence
        </p>
      </div>
      
      {/* The Chat Box Container */}
      <div className="flex flex-col w-full max-w-4xl h-[75vh] border border-white/10 rounded-[2.5rem] shadow-2xl bg-slate-950/60 backdrop-blur-2xl p-6 relative overflow-hidden z-10 border-t-white/20">
        <Chat />
      </div>

      <div className="mt-8 flex items-center gap-2 text-slate-500 text-[10px] font-mono tracking-widest uppercase">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Secure Lead Sync Active • Eastbourne, UK
      </div>
    </main>
  );
}