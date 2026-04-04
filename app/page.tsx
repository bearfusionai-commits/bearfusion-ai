import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-950 text-white font-sans">
      
      {/* Simple Header */}
      <div className="z-10 w-full max-w-4xl text-center mb-8">
        <h1 className="text-5xl font-extrabold tracking-tighter uppercase italic">
          BearFusion <span className="text-blue-500 not-italic">v1.0</span>
        </h1>
        <p className="text-slate-500 font-mono text-xs mt-3 tracking-widest uppercase">
          Enterprise Home Service Intelligence
        </p>
      </div>
      
      {/* The Chat Box - Solid colors to prevent errors */}
      <div className="flex flex-col w-full max-w-4xl h-[75vh] border border-slate-800 rounded-3xl shadow-2xl bg-slate-900 p-6 relative overflow-hidden z-10">
        <Chat />
      </div>

      <div className="mt-8 flex items-center gap-2 text-slate-600 text-[10px] font-mono tracking-widest uppercase">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        System Online • Eastbourne, UK
      </div>
    </main>
  );
}