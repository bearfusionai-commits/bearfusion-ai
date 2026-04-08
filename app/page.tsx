import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <main style={{ 
      position: 'fixed', 
      inset: 0, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#020617',
      fontFamily: 'sans-serif',
      color: 'white'
    }}>
      {/* PROFESSIONAL BACKGROUND - Clean and High-End */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.15,
        zIndex: 0
      }}></div>

      {/* HEADER - Focus on Eastbourne Quality */}
      <div style={{ zIndex: 10, textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: 0, letterSpacing: '-1px' }}>
          BEARFUSION <span style={{ color: '#3b82f6' }}>AI</span>
        </h1>
        <p style={{ color: '#93c5fd', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '5px' }}>
          Eastbourne's Premier Trade & Home Network
        </p>
      </div>
      
      {/* CHAT BOX - Sized for Mobile & Laptop */}
      <div style={{ 
        zIndex: 10, 
        width: '90%', 
        maxWidth: '750px', 
        height: '60vh', 
        backgroundColor: 'rgba(15, 23, 42, 0.9)', 
        borderRadius: '32px', 
        border: '1px solid rgba(255,255,255,0.1)', 
        padding: '10px', 
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
      }}>
        <Chat />
      </div>

      {/* FOOTER */}
      <div style={{ zIndex: 10, marginTop: '20px', fontSize: '0.7rem', opacity: 0.5, letterSpacing: '2px', textAlign: 'center' }}>
        PLUMBING • ELECTRICAL • RENEWABLES • HEATING
      </div>
    </main>
  );
}