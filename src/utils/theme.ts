/**
 * Comprehensive Theme Configuration
 * Design tokens for colors, typography, spacing, shadows, transitions, and more
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================

export const colors = {
  // Primary Colors
  primary: {
    50: '#f0f4ff',
    100: '#e0e9ff',
    200: '#c7d9ff',
    300: '#a4c4ff',
    400: '#7aa3ff',
    500: '#4f7fff',
    600: '#3a66ff',
    700: '#2d52e5',
    800: '#2742cc',
    900: '#1a2a8a',
    950: '#0f1850',
  },

  // Secondary Colors
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#cabffd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#3f0f82',
    950: '#240046',
  },

  // Accent Colors
  accent: {
    50: '#fef3c7',
    100: '#fde68a',
    200: '#fcd34d',
    300: '#fbbf24',
    400: '#f59e0b',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },

  // Semantic Colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#145231',
    950: '#052e16',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  info: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c3d6e',
    950: '#051e3e',
  },

  // Neutral Colors
  neutral: {
    0: '#ffffff',
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },

  // Grayscale
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },

  // Special Colors
  transparent: 'transparent',
  current: 'currentColor',
  inherit: 'inherit',
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const typography = {
  fontFamily: {
    sans: '"Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"Fira Code", "Courier New", monospace',
    serif: '"Merriweather", Georgia, serif',
    display: '"Poppins", "Inter", sans-serif',
  },

  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },

  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Predefined text styles
  styles: {
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: '1.2',
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: '1.3',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: '1.4',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: '1.4',
      letterSpacing: '0em',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    body: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    bodySmall: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: '1.5',
      letterSpacing: '0.025em',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: '1.5',
      letterSpacing: '0em',
      textTransform: 'none' as const,
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.5',
      letterSpacing: '0em',
    },
  },
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const spacing = {
  0: '0px',
  1: '0.25rem',      // 4px
  2: '0.5rem',       // 8px
  3: '0.75rem',      // 12px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
  36: '9rem',        // 144px
  40: '10rem',       // 160px
  44: '11rem',       // 176px
  48: '12rem',       // 192px
  52: '13rem',       // 208px
  56: '14rem',       // 224px
  60: '15rem',       // 240px
  64: '16rem',       // 256px
  72: '18rem',       // 288px
  80: '20rem',       // 320px
  96: '24rem',       // 384px
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: '0px',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  
  // Elevated shadows
  elevation: {
    1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    2: '0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)',
    3: '0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)',
    4: '0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)',
    5: '0 20px 40px rgba(0, 0, 0, 0.2)',
  },

  // Colored shadows
  primary: '0 4px 6px rgba(79, 127, 255, 0.3)',
  secondary: '0 4px 6px rgba(139, 92, 246, 0.3)',
  success: '0 4px 6px rgba(34, 197, 94, 0.3)',
  error: '0 4px 6px rgba(239, 68, 68, 0.3)',
  warning: '0 4px 6px rgba(245, 158, 11, 0.3)',
  info: '0 4px 6px rgba(14, 165, 233, 0.3)',
} as const;

// ============================================================================
// TRANSITIONS & ANIMATIONS
// ============================================================================

export const transitions = {
  duration: {
    fastest: '50ms',
    faster: '100ms',
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '400ms',
    slowest: '500ms',
  },

  easing: {
    linear: 'linear',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    gentle: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  // Common transitions
  base: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  color: 'color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  background: 'background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  border: 'border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  opacity: 'opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  shadow: 'box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// ============================================================================
// ZINDEX
// ============================================================================

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  backdrop: 1300,
  offcanvas: 1040,
  modal: 1050,
  popover: 1070,
  tooltip: 1080,
  notification: 1090,
  max: 9999,
} as const;

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// MEDIA QUERIES
// ============================================================================

export const mediaQueries = {
  xs: '@media (min-width: 0px)',
  sm: '@media (min-width: 640px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',
  xl: '@media (min-width: 1280px)',
  '2xl': '@media (min-width: 1536px)',
  
  // Mobile first approach
  minSm: '@media (min-width: 640px)',
  minMd: '@media (min-width: 768px)',
  minLg: '@media (min-width: 1024px)',
  minXl: '@media (min-width: 1280px)',
  min2xl: '@media (min-width: 1536px)',
  
  // Mobile only
  maxXs: '@media (max-width: 639px)',
  maxSm: '@media (max-width: 767px)',
  maxMd: '@media (max-width: 1023px)',
  maxLg: '@media (max-width: 1279px)',
  maxXl: '@media (max-width: 1535px)',
} as const;

// ============================================================================
// COMPONENT SIZES
// ============================================================================

export const sizes = {
  // Icon sizes
  iconXs: '16px',
  iconSm: '20px',
  iconBase: '24px',
  iconLg: '28px',
  iconXl: '32px',
  icon2xl: '40px',
  icon3xl: '48px',

  // Button heights
  buttonXs: '24px',
  buttonSm: '32px',
  buttonBase: '40px',
  buttonLg: '48px',
  buttonXl: '56px',

  // Input heights
  inputSm: '32px',
  inputBase: '40px',
  inputLg: '48px',

  // Component widths
  maxContent: '1024px',
  maxContainer: '1280px',
  sidebarCollapsed: '64px',
  sidebarExpanded: '256px',
  modalSm: '384px',
  modalBase: '512px',
  modalLg: '640px',
  modalXl: '896px',
} as const;

// ============================================================================
// COMPONENT VARIANTS
// ============================================================================

export const variants = {
  // Button variants
  button: {
    primary: {
      bg: colors.primary[600],
      color: colors.neutral[0],
      hover: colors.primary[700],
      active: colors.primary[800],
    },
    secondary: {
      bg: colors.secondary[600],
      color: colors.neutral[0],
      hover: colors.secondary[700],
      active: colors.secondary[800],
    },
    outline: {
      bg: 'transparent',
      color: colors.primary[600],
      border: colors.primary[600],
      hover: colors.primary[50],
      active: colors.primary[100],
    },
    ghost: {
      bg: 'transparent',
      color: colors.primary[600],
      hover: colors.primary[50],
      active: colors.primary[100],
    },
    danger: {
      bg: colors.error[600],
      color: colors.neutral[0],
      hover: colors.error[700],
      active: colors.error[800],
    },
  },

  // Input variants
  input: {
    default: {
      border: colors.neutral[300],
      bg: colors.neutral[0],
      focus: colors.primary[500],
    },
    filled: {
      border: colors.neutral[200],
      bg: colors.neutral[100],
      focus: colors.primary[500],
    },
    outlined: {
      border: colors.neutral[300],
      bg: colors.neutral[0],
      focus: colors.primary[500],
    },
  },

  // Surface variants
  surface: {
    default: colors.neutral[0],
    elevated: colors.neutral[50],
    sunken: colors.neutral[100],
  },
} as const;

// ============================================================================
// COMPLETE THEME OBJECT
// ============================================================================

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  breakpoints,
  mediaQueries,
  sizes,
  variants,
} as const;

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type Theme = typeof theme;
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Shadows = typeof shadows;
export type Transitions = typeof transitions;
export type ZIndex = typeof zIndex;
export type Breakpoints = typeof breakpoints;
export type Sizes = typeof sizes;
export type Variants = typeof variants;

// ============================================================================
// THEME CONTEXT & HOOKS (Optional exports for use with Context API)
// ============================================================================

export default theme;
