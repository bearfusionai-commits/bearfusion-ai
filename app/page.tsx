import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15, zIndex: 0 }}></div>

      <div style={{ zIndex: 10, textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', margin: 0 }}>BEARFUSION <span style={{ color: '#3b82f6' }}>AI</span></h1>
        <p style={{ color: '#93c5fd', fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase' }}>Eastbourne's Premier Home Network</p>
      </div>
      
      <div style={{ zIndex: 10, width: '90%', maxWidth: '700px', height: '55vh', backgroundColor: 'rgba(15, 23, 42, 0.95)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
        <Chat />
      </div>
    </main>
  );
}