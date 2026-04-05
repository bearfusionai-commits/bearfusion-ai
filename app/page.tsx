import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      padding: '40px 20px', 
      backgroundColor: '#020617',
      fontFamily: 'sans-serif',
      overflowX: 'hidden'
    }}>
      
      {/* 1. PROFESSIONAL BACKGROUND - Clean Home/Trade Image */}
      <img 
        src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          opacity: 0.2, 
          zIndex: -1  /* This sends it to the very back */
        }} 
      />

      {/* 2. HEADER */}
      <div style={{ zIndex: 10, textAlign: 'center', marginBottom: '20px', width: '100%', maxWidth: '800px' }}>
        <h1 style={{ 
          color: 'white', 
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
          fontWeight: '900', 
          textTransform: 'uppercase', 
          margin: 0, 
          letterSpacing: '-2px'
        }}>
          BEARFUSION <span style={{ color: '#3b82f6' }}>AI</span>
        </h1>
        <p style={{ 
          color: '#93c5fd', 
          fontSize: '0.8rem', 
          letterSpacing: '3px', 
          textTransform: 'uppercase', 
          fontWeight: 'bold',
          marginTop: '8px'
        }}>
          National Trade & Home Service Network
        </p>
      </div>
      
      {/* 3. THE CHAT BOX - Adjusted height for laptop screens */}
      <div style={{ 
        zIndex: 10, 
        width: '100%', 
        maxWidth: '800px', 
        height: '60vh', 
        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
        borderRadius: '24px', 
        border: '1px solid rgba(255,255,255,0.1)', 
        padding: '15px', 
        backdropFilter: 'blur(10px)', 
        overflow: 'hidden',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
      }}>
        <Chat />
      </div>

      {/* 4. FOOTER */}
      <div style={{ 
        zIndex: 10, 
        marginTop: '20px', 
        color: '#64748b', 
        fontSize: '0.7rem', 
        textTransform: 'uppercase', 
        letterSpacing: '2px', 
        textAlign: 'center'
      }}>
        <span style={{ color: '#22c55e' }}>● NETWORK ACTIVE</span>
        <div style={{ marginTop: '5px' }}>
          PLUMBING • ELECTRICAL • RENEWABLES • HEATING
        </div>
      </div>
    </main>
  );
}