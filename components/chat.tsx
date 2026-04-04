"use client";

import { useChat } from "ai/react";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col h-full bg-slate-900/50 rounded-2xl overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-200'}`}>
              <p className="text-sm font-bold mb-1 opacity-50 uppercase tracking-tighter">
                {m.role === 'user' ? 'Potential Client' : 'BearFusion AI'}
              </p>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-800 flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Type your plumbing issue here..."
          className="flex-1 bg-slate-800 border-none rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl transition-colors">
          Send
        </button>
      </form>
    </div>
  );
}