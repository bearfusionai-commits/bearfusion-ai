import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#000' }}>
      
      <img 
        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, zIndex: 0 }} 
      />

      <div style={{ zIndex: 10, textAlign: 'center', marginBottom: '30px', width: '100%', maxWidth: '900px' }}>
        <h1 style={{ color: 'white', fontSize: '3.5rem', fontWeight: '900', textTransform: 'uppercase', margin: 0, letterSpacing: '-2px' }}>
          BEARFUSION <span style={{ color: '#3b82f6' }}>AI</span>
        </h1>
        <p style={{ color: '#93c5fd', fontSize: '0.9rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
          National Trade & Home Service Network • UK Wide
        </p>
      </div>
      
      <div style={{ zIndex: 10, width: '100%', maxWidth: '850px', height: '65vh', backgroundColor: 'rgba(15, 23, 42, 0.85)', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.15)', padding: '25px', backdropFilter: 'blur(12px)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
        <Chat />
      </div>

      <div style={{ zIndex: 10, marginTop: '25px', color: '#94a3b8', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', alignItems: 'center' }}>
        <span style={{ color: '#22c55e' }}>● NETWORK ACTIVE</span>
        <span>|</span>
        <span>PLUMBING • ELECTRICAL • RENEWABLES • HEATING</span>
      </div>
    </main>
  );
}