import React, { useState } from 'react';

interface WelcomePageProps {
    onStart: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        // Delay slightly for effect if desired, or call immediately
        setTimeout(() => {
            onStart();
        }, 500);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            padding: '20px',
        }}>
            <h1 style={{
                fontSize: '4rem',
                color: '#fff',
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                marginBottom: '2rem',
                fontFamily: "'Pacifico', cursive, sans-serif", // Fallback if font isn't loaded
            }}>
                Before You Go Further !
            </h1>

            <p style={{
                fontSize: '1.5rem',
                // color: 'var(--text-main)',
                marginBottom: '3rem',
                maxWidth: '600px',
                lineHeight: '1.6',
                color: "white"
            }}>
                Hey Suksh 😊
                This page exists for one reason — to make you smile.
                Ready to see what’s next
            </p>

            <button
                onClick={handleClick}
                style={{
                    backgroundColor: 'var(--valentine-red)',
                    color: 'white',
                    border: 'none',
                    padding: '1.2rem 2.5rem',
                    fontSize: '1.2rem',
                    borderRadius: '50px',
                    boxShadow: '0 10px 20px rgba(255, 51, 102, 0.3)',
                    transition: 'all 0.3s ease',
                    fontWeight: 'bold',
                    position: 'relative',
                    overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(255, 51, 102, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(255, 51, 102, 0.3)';
                }}
            >
                {clicked ? "Opened! ❤️" : "Something for You"}
            </button>
        </div>
    );
};

export default WelcomePage;
