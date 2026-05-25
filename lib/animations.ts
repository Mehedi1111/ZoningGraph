import type { Variants } from 'framer-motion';

export const FADE_UP: Variants = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' } },
};

export const FADE_IN: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.36, ease: 'easeOut' } },
};

export const STAGGER: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const CARD_STAGGER: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export const VIEWPORT = { once: true, margin: '-60px' as const };
