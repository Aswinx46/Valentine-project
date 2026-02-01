import React, { useEffect, useState } from 'react';

const HeartCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };

        const handleMouseLeave = () => setVisible(false);
        const handleMouseEnter = () => setVisible(true);

        window.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '30px',
                height: '30px',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                transition: 'transform 0.1s ease-out',
                willChange: 'transform',
            }}
        >
            <svg
                viewBox="0 0 32 29.6"
                fill="var(--valentine-red)"
                style={{
                    width: '100%',
                    height: '100%',
                    filter: 'drop-shadow(0 0 5px rgba(255, 51, 102, 0.5))',
                }}
            >
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
        c6.1-9.3,16-11.3,16-21.2C32,3.8,28.2,0,23.6,0z" />
            </svg>
        </div>
    );
};

export default HeartCursor;
