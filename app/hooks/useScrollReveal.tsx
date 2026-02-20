import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px 0px -100px 0px', // Trigger when element is 100px from viewport
    ...options
  });

  return { ref, isInView };
}