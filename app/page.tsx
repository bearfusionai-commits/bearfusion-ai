'use client';

import { useChat } from 'ai/react';
import { Bot, User, Send, BrainCircuit, Users, Phone, ClipboardCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [leads, setLeads] = useState<{name: string, phone: string, issue: string}[]>([]);

  // Simple logic to "simulating" lead extraction from the chat
  useEffect(() => {
    const lastMessage = messages[messages.length - 1]?.content || "";
    // If the AI confirms it got a name and number, we'd normally use a real function here
    // For now, let's just show how the "Dashboard" looks!
  }, [messages]);

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white font-sans">
      
      {/* SIDEBAR: LEAD DASHBOARD */}
      <div className="w-80 border-r border-gray-900 bg-[#0d0d0d] p-6 hidden lg:block">
        <div className="flex items-center gap-2 mb-8 text-blue-500">
          <Users size={20} />
          <h2 className="text-sm font-black uppercase tracking-widest">Live Leads</h2>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-2 text-blue-400">
              <Phone size={14} />
              <span className="text-xs font-bold">New Inquiry</span>
            </div>
            <p className="text-sm font-bold text-white">John Doe</p>
            <p className="text-xs text-gray-500 italic mt-1">"Leaky faucet in kitchen..."</p>
          </div>
          
          <p className="text-[10px] text-center text-gray-700 mt-10 uppercase tracking-tighter">
            Leads are synced to BearFusion CRM
          </p>
        </div>
      </div>

      {/* MAIN CHAT AREA */}
      <div className="flex-1 flex flex-col relative">
        <header className="p-4 border-b border-gray-900 flex justify-between items-center bg-[#0a0a0a]/50 backdrop-blur-xl">
           <div className="flex items-center gap-3">
              <BrainCircuit className="text-blue-600" />
              <h1 className="font-bold tracking-tighter">BEARFUSION <span className="text-blue-600 text-xs ml-1">v1.0-ENTERPRISE</span></h1>
           </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 space-y-8 pb-32 max-w-4xl mx-auto w-full">
          {messages.map(m => (
            <div key={m.id} className="flex gap-4 group">
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-2xl ${
                m.role === 'user' ? 'bg-zinc-800' : 'bg-blue-600'
              }`}>
                {m.role === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black text-zinc-600 uppercase mb-1 tracking-widest">
                  {m.role === 'user' ? 'Potential Client' : 'BearFusion AI Agent'}
                </p>
                <div className="text-[15px] leading-relaxed text-zinc-200">{m.content}</div>
              </div>
            </div>
          ))}
        </main>

        {/* INPUT BOX */}
        <div className="p-6 bg-gradient-to-t from-[#0a0a0a] to-transparent">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto relative group">
            <input
              className="w-full bg-[#111] border border-zinc-800 rounded-2xl py-5 px-6 focus:border-blue-600 outline-none transition-all pr-16 shadow-2xl"
              placeholder="Type your plumbing issue here..."
              value={input}
              onChange={handleInputChange}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-xl hover:bg-blue-500 transition-colors shadow-lg">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}