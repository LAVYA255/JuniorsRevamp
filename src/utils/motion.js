/**
 * Motion helpers — desktop gets smooth animations, mobile gets near-instant
 * ones so fast scrollers never wait for content to appear.
 */
const mob = typeof window !== 'undefined' && window.innerWidth < 768;

// Fade + slight upward rise
export const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: mob ? 6 : 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0 },
  transition:  { duration: mob ? 0.18 : 0.55, delay: mob ? 0 : delay, ease: 'easeOut' },
});

// Fade only (no movement)
export const fadeIn = (delay = 0) => ({
  initial:     { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport:    { once: true, amount: 0 },
  transition:  { duration: mob ? 0.15 : 0.5, delay: mob ? 0 : delay },
});

// Slide in from left
export const fadeLeft = (delay = 0) => ({
  initial:     { opacity: 0, x: mob ? 0 : -28 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: true, amount: 0 },
  transition:  { duration: mob ? 0.18 : 0.55, delay: mob ? 0 : delay, ease: 'easeOut' },
});

// Slide in from right
export const fadeRight = (delay = 0) => ({
  initial:     { opacity: 0, x: mob ? 0 : 28 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: true, amount: 0 },
  transition:  { duration: mob ? 0.18 : 0.55, delay: mob ? 0 : delay, ease: 'easeOut' },
});

// Stagger container variant
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: mob ? 0 : 0.12, delayChildren: 0 },
  },
};

// Stagger child item
export const staggerItem = {
  hidden: { opacity: 0, y: mob ? 4 : 18 },
  show:   { opacity: 1, y: 0, transition: { duration: mob ? 0.15 : 0.5, ease: 'easeOut' } },
};
