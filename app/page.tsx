import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      
      {/* Decorative Blur Background Circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="z-10 w-full max-w-4xl text-center mb-8">
        <h1 className="text-5xl font-black tracking-tighter uppercase italic">
          BearFusion <span className="text-blue-400 not-italic">v1.0</span>
        </h1>
        <p className="text-blue-200/60 font-mono text-sm mt-2 tracking-widest uppercase">
          Enterprise Home Service Intelligence
        </p>
      </div>
      
      {/* The Chat Box - Glassmorphism Style */}
      <div className="flex flex-col w-full max-w-4xl h-[70vh] border border-white/10 rounded-[2rem] shadow-2xl bg-slate-950/40 backdrop-blur-xl p-6 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
        <Chat />
      </div>

      <div className="mt-8 text-slate-500 text-xs font-mono tracking-tighter uppercase">
        Connected to Eastbourne Service Network • Secure Lead Sync Active
      </div>
    </main>
  );
}