import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px', 
      backgroundColor: '#020617', /* Dark Navy fallback */
      fontFamily: 'sans-serif'
    }}>
      
      {/* BACKGROUND - Fixed and Dimmmed */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.25
      }}></div>

      {/* CONTENT LAYER */}
      <div style={{ zIndex: 10, textAlign: 'center', marginBottom: '20px', width: '100%', maxWidth: '800px' }}>
        <h1 style={{ color: 'white', fontSize: '3rem', fontWeight: '900', textTransform: 'uppercase', margin: 0, letterSpacing: '-2px' }}>
          BEARFUSION <span style={{ color: '#3b82f6' }}>AI</span>
        </h1>
        <p style={{ color: '#93c5fd', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold', marginTop: '10px' }}>
          National Trade & Home Service Network
        </p>
      </div>
      
      <div style={{ zIndex: 10, width: '100%', maxWidth: '800px', height: '60vh', backgroundColor: 'rgba(15, 23, 42, 0.85)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', padding: '20px', backdropFilter: 'blur(12px)', overflow: 'hidden' }}>
        <Chat />
      </div>

      <div style={{ zIndex: 10, marginTop: '20px', color: '#64748b', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center' }}>
        <span style={{ color: '#22c55e' }}>● NETWORK ACTIVE</span>
        <div style={{ marginTop: '5px' }}>PLUMBING • ELECTRICAL • RENEWABLES • HEATING</div>
      </div>
    </main>
  );
}