import React from 'react';

interface IconProps {
  name: 'play' | 'arrow-right' | 'check' | 'cart' | 'search' | 'shield' | 'rocket' | 'screen' | 'podcast' | 'settings' | 'world';
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 32, className = '' }) => {
  const icons = {
    play: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 10L20 16L12 22V10Z" fill="currentColor"/>
      </svg>
    ),
    'arrow-right': (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 8L20 16L12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    check: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M6 16L12 22L26 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    cart: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M4 4H8L10 20H26L28 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="26" r="2" fill="currentColor"/>
        <circle cx="24" cy="26" r="2" fill="currentColor"/>
      </svg>
    ),
    search: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M16 4L20 12L28 14L22 20L23 28L16 24L9 28L10 20L4 14L12 12L16 4Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    rocket: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M16 4L4 8L16 12L28 8L16 4Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 8L16 12L28 8" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 12V28" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    screen: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 12H28" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    podcast: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="16" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 24C8 20 12 18 16 18C20 18 24 20 24 24" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    settings: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    world: (
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;

