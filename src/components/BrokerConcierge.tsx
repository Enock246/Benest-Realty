"use client";

export default function BrokerConcierge() {
  return (
    <a 
      href="https://wa.me/PLACEHOLDER?text=Hello,%20I%20am%20interested%20in%20a%20private%20tour."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        background: 'var(--ink)',
        color: '#fff',
        padding: '1rem 1.5rem',
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <span style={{ 
        width: '8px', 
        height: '8px', 
        borderRadius: '50%', 
        background: '#4CAF50',
        display: 'inline-block' 
      }} />
      Private Broker Concierge
    </a>
  );
}
