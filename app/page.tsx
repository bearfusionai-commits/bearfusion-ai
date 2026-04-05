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
      backgroundColor: '#020617',
      fontFamily: 'sans-serif',
      color: 'white'
    }}>
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.2
      }}></div>

      <div style={{ zIndex: 10, textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: 0 }}>
          BEARFUSION <span style={{ color: '#3b82f6' }}>AI</span>
        </h1>
        <p style={{ color: '#93c5fd', letterSpacing: '2px', fontWeight: 'bold' }}>
          NATIONAL TRADE & HOME SERVICE NETWORK
        </p>
      </div>
      
      <div style={{ 
        zIndex: 10, 
        width: '100%', 
        maxWidth: '800px', 
        height: '60vh', 
        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
        borderRadius: '20px', 
        border: '1px solid rgba(255,255,255,0.1)', 
        padding: '10px', 
        overflow: 'hidden' 
      }}>
        <Chat />
      </div>

      <div style={{ zIndex: 10, marginTop: '20px', fontSize: '0.7rem', opacity: 0.6 }}>
        ● NETWORK ACTIVE | PLUMBING • ELECTRICAL • RENEWABLES
      </div>
    </main>
  );
}