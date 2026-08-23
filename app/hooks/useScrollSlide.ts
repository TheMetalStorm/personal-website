'use client';

import { useRef, useState, useEffect, CSSProperties } from 'react';

/**
 * Hook for scroll-triggered slide-up animation that avoids SSR hydration flash.
 * 
 * How it works:
 * - Server renders elements fully visible (no initial hidden state)
 * - After hydration, elements NOT in viewport get shifted down via transform
 * - When scrolled into view, they slide up smoothly
 * - Elements already in viewport on load are never shifted (no flash)
 * 
 * Uses only transform (no opacity) to prevent visible flash.
 */
export function useScrollSlide(offset = 30, delay = 0) {
    const ref = useRef<HTMLDivElement>(null);
    const [hasMounted, setHasMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => setHasMounted(true));

        const el = ref.current;
        if (!el) return () => window.cancelAnimationFrame(frame);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '-30px' }
        );

        observer.observe(el);
        return () => {
            window.cancelAnimationFrame(frame);
            observer.disconnect();
        };
    }, []);

    const style: CSSProperties = {
        transform: hasMounted && !isVisible ? `translateY(${offset}px)` : 'translateY(0)',
        transition: `transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    };

    return { ref, style };
}
