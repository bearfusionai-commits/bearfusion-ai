import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#000' }}>
      
      {/* THE IMAGE - Forced with Old School Style */}
      <img 
        src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          opacity: 0.4,
          zIndex: 0 
        }} 
      />

      {/* THE CONTENT */}
      <div style={{ zIndex: 10, textAlign: 'center', marginBottom: '20px', width: '100%', maxWidth: '900px' }}>
        <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: '900', textTransform: 'uppercase', margin: 0 }}>
          BearFusion <span style={{ color: '#3b82f6' }}>v1.0</span>
        </h1>
        <p style={{ color: '#93c5fd', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Enterprise Home Service Intelligence
        </p>
      </div>
      
      <div style={{ zIndex: 10, width: '100%', maxWidth: '900px', height: '70vh', backgroundColor: 'rgba(15, 23, 42, 0.8)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', padding: '20px', backdropFilter: 'blur(10px)', overflow: 'hidden' }}>
        <Chat />
      </div>

      <div style={{ zIndex: 10, marginTop: '20px', color: '#64748b', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Secure Lead Sync • Eastbourne Network
      </div>
    </main>
  );
}