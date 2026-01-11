/**
 * Constants for MyApp Financial Management Application
 * This file contains all application-wide constants including API endpoints,
 * transaction categories, configuration values, and other static data.
 */

// =====================
// API ENDPOINTS
// =====================
export const API_ENDPOINTS = {
  // Base URLs
  BASE_URL: process.env.REACT_APP_API_BASE_URL || 'https://api.myapp.local',
  TIMEOUT: 30000, // 30 seconds

  // Authentication
  AUTH: {
    LOGIN: '/api/v1/auth/login',
    LOGOUT: '/api/v1/auth/logout',
    REGISTER: '/api/v1/auth/register',
    REFRESH_TOKEN: '/api/v1/auth/refresh',
    VERIFY_EMAIL: '/api/v1/auth/verify-email',
    RESET_PASSWORD: '/api/v1/auth/reset-password',
  },

  // User Management
  USER: {
    PROFILE: '/api/v1/users/profile',
    UPDATE_PROFILE: '/api/v1/users/profile',
    PREFERENCES: '/api/v1/users/preferences',
    CHANGE_PASSWORD: '/api/v1/users/change-password',
  },

  // Transactions
  TRANSACTIONS: {
    LIST: '/api/v1/transactions',
    CREATE: '/api/v1/transactions',
    GET: (id: string) => `/api/v1/transactions/${id}`,
    UPDATE: (id: string) => `/api/v1/transactions/${id}`,
    DELETE: (id: string) => `/api/v1/transactions/${id}`,
    EXPORT: '/api/v1/transactions/export',
    IMPORT: '/api/v1/transactions/import',
  },

  // Accounts
  ACCOUNTS: {
    LIST: '/api/v1/accounts',
    CREATE: '/api/v1/accounts',
    GET: (id: string) => `/api/v1/accounts/${id}`,
    UPDATE: (id: string) => `/api/v1/accounts/${id}`,
    DELETE: (id: string) => `/api/v1/accounts/${id}`,
  },

  // Reports & Analytics
  REPORTS: {
    SUMMARY: '/api/v1/reports/summary',
    EXPENSES: '/api/v1/reports/expenses',
    INCOME: '/api/v1/reports/income',
    CATEGORY_BREAKDOWN: '/api/v1/reports/category-breakdown',
    MONTHLY_TRENDS: '/api/v1/reports/monthly-trends',
  },

  // Budgets
  BUDGETS: {
    LIST: '/api/v1/budgets',
    CREATE: '/api/v1/budgets',
    GET: (id: string) => `/api/v1/budgets/${id}`,
    UPDATE: (id: string) => `/api/v1/budgets/${id}`,
    DELETE: (id: string) => `/api/v1/budgets/${id}`,
  },
};

// =====================
// TRANSACTION CATEGORIES
// =====================
export const TRANSACTION_CATEGORIES = {
  // Income Categories
  INCOME: {
    SALARY: 'salary',
    FREELANCE: 'freelance',
    INVESTMENT: 'investment',
    BONUS: 'bonus',
    GIFTS: 'gifts',
    OTHER_INCOME: 'other_income',
  },

  // Expense Categories
  EXPENSES: {
    FOOD_DINING: 'food_dining',
    GROCERIES: 'groceries',
    TRANSPORTATION: 'transportation',
    UTILITIES: 'utilities',
    ENTERTAINMENT: 'entertainment',
    SHOPPING: 'shopping',
    HEALTHCARE: 'healthcare',
    EDUCATION: 'education',
    INSURANCE: 'insurance',
    RENT_MORTGAGE: 'rent_mortgage',
    SUBSCRIPTION: 'subscription',
    PHONE_INTERNET: 'phone_internet',
    PERSONAL_CARE: 'personal_care',
    OFFICE_SUPPLIES: 'office_supplies',
    TRAVEL: 'travel',
    GIFTS_DONATIONS: 'gifts_donations',
    PETS: 'pets',
    MAINTENANCE_REPAIRS: 'maintenance_repairs',
    OTHER_EXPENSES: 'other_expenses',
  },

  // Transfer Categories
  TRANSFERS: {
    TRANSFER_IN: 'transfer_in',
    TRANSFER_OUT: 'transfer_out',
  },
};

// =====================
// CATEGORY DISPLAY DATA
// =====================
export const CATEGORY_LABELS: Record<string, string> = {
  // Income
  salary: 'Salary',
  freelance: 'Freelance Work',
  investment: 'Investment Returns',
  bonus: 'Bonus',
  gifts: 'Gifts Received',
  other_income: 'Other Income',

  // Expenses
  food_dining: 'Food & Dining',
  groceries: 'Groceries',
  transportation: 'Transportation',
  utilities: 'Utilities',
  entertainment: 'Entertainment',
  shopping: 'Shopping',
  healthcare: 'Healthcare',
  education: 'Education',
  insurance: 'Insurance',
  rent_mortgage: 'Rent/Mortgage',
  subscription: 'Subscriptions',
  phone_internet: 'Phone & Internet',
  personal_care: 'Personal Care',
  office_supplies: 'Office Supplies',
  travel: 'Travel',
  gifts_donations: 'Gifts & Donations',
  pets: 'Pets',
  maintenance_repairs: 'Maintenance & Repairs',
  other_expenses: 'Other Expenses',

  // Transfers
  transfer_in: 'Transfer In',
  transfer_out: 'Transfer Out',
};

// =====================
// CATEGORY COLORS (HEX)
// =====================
export const CATEGORY_COLORS: Record<string, string> = {
  // Income - Green shades
  salary: '#10B981',
  freelance: '#34D399',
  investment: '#6EE7B7',
  bonus: '#A7F3D0',
  gifts: '#D1FAE5',
  other_income: '#ECFDF5',

  // Expenses - Red/Orange shades
  food_dining: '#EF4444',
  groceries: '#F87171',
  transportation: '#FB923C',
  utilities: '#FBBF24',
  entertainment: '#FACC15',
  shopping: '#EL4F46',
  healthcare: '#DC2626',
  education: '#B91C1C',
  insurance: '#7C2D12',
  rent_mortgage: '#991B1B',
  subscription: '#BE123C',
  phone_internet: '#EC4899',
  personal_care: '#F472B6',
  office_supplies: '#F9A8D4',
  travel: '#FECDD3',
  gifts_donations: '#FCA5A5',
  pets: '#FECACA',
  maintenance_repairs: '#FED7AA',
  other_expenses: '#FFE4E6',

  // Transfers - Blue shades
  transfer_in: '#3B82F6',
  transfer_out: '#1E40AF',
};

// =====================
// TRANSACTION TYPES
// =====================
export const TRANSACTION_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
  TRANSFER: 'transfer',
} as const;

// =====================
// ACCOUNT TYPES
// =====================
export const ACCOUNT_TYPES = {
  CHECKING: 'checking',
  SAVINGS: 'savings',
  CREDIT_CARD: 'credit_card',
  INVESTMENT: 'investment',
  CASH: 'cash',
  LOAN: 'loan',
  OTHER: 'other',
} as const;

export const ACCOUNT_TYPE_LABELS: Record<string, string> = {
  checking: 'Checking Account',
  savings: 'Savings Account',
  credit_card: 'Credit Card',
  investment: 'Investment Account',
  cash: 'Cash',
  loan: 'Loan Account',
  other: 'Other',
};

// =====================
// TRANSACTION STATUSES
// =====================
export const TRANSACTION_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  FAILED: 'failed',
} as const;

export const TRANSACTION_STATUS_LABELS: Record<string, string> = {
  pending: 'Pending',
  completed: 'Completed',
  cancelled: 'Cancelled',
  failed: 'Failed',
};

// =====================
// CURRENCY & FORMATTING
// =====================
export const CURRENCY = {
  DEFAULT: 'USD',
  SYMBOL: '$',
  DECIMAL_PLACES: 2,
  THOUSAND_SEPARATOR: ',',
  DECIMAL_SEPARATOR: '.',
} as const;

export const SUPPORTED_CURRENCIES = [
  { code: 'USD', symbol: '$', label: 'US Dollar' },
  { code: 'EUR', symbol: '€', label: 'Euro' },
  { code: 'GBP', symbol: '£', label: 'British Pound' },
  { code: 'JPY', symbol: '¥', label: 'Japanese Yen' },
  { code: 'CAD', symbol: 'C$', label: 'Canadian Dollar' },
  { code: 'AUD', symbol: 'A$', label: 'Australian Dollar' },
  { code: 'CHF', symbol: 'CHF', label: 'Swiss Franc' },
  { code: 'CNY', symbol: '¥', label: 'Chinese Yuan' },
] as const;

// =====================
// DATE & TIME FORMATS
// =====================
export const DATE_FORMATS = {
  SHORT: 'MM/DD/YYYY',
  LONG: 'MMMM DD, YYYY',
  ISO: 'YYYY-MM-DD',
  FULL: 'MMMM DD, YYYY HH:mm:ss',
  TIME_ONLY: 'HH:mm:ss',
  TIME_SHORT: 'HH:mm',
  MONTH_YEAR: 'MMMM YYYY',
} as const;

// =====================
// PAGINATION & LIMITS
// =====================
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  MIN_PAGE_SIZE: 5,
  DEFAULT_PAGE: 1,
} as const;

export const LIMITS = {
  TRANSACTION_DESCRIPTION_MAX_LENGTH: 500,
  ACCOUNT_NAME_MAX_LENGTH: 100,
  NOTES_MAX_LENGTH: 1000,
  SEARCH_QUERY_MAX_LENGTH: 100,
  BUDGET_NAME_MAX_LENGTH: 100,
} as const;

// =====================
// VALIDATION RULES
// =====================
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_REQUIRE_UPPERCASE: true,
  PASSWORD_REQUIRE_NUMBERS: true,
  PASSWORD_REQUIRE_SPECIAL: true,
  PHONE_REGEX: /^[\d\s\-\+\(\)]+$/,
  AMOUNT_MAX: 999999999.99,
  AMOUNT_MIN: 0,
} as const;

// =====================
// NOTIFICATION SETTINGS
// =====================
export const NOTIFICATION_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

export const NOTIFICATION_DURATION = {
  SHORT: 3000,
  MEDIUM: 5000,
  LONG: 8000,
  PERSISTENT: 0,
} as const;

// =====================
// STORAGE KEYS
// =====================
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'myapp_auth_token',
  REFRESH_TOKEN: 'myapp_refresh_token',
  USER_PREFERENCES: 'myapp_user_preferences',
  THEME: 'myapp_theme',
  LANGUAGE: 'myapp_language',
  RECENT_SEARCHES: 'myapp_recent_searches',
  CURRENCY: 'myapp_currency',
  SIDEBAR_COLLAPSED: 'myapp_sidebar_collapsed',
} as const;

// =====================
// THEMES
// =====================
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto',
} as const;

// =====================
// REPORT PERIODS
// =====================
export const REPORT_PERIODS = {
  WEEKLY: 'weekly',
  MONTHLY: 'monthly',
  QUARTERLY: 'quarterly',
  YEARLY: 'yearly',
  CUSTOM: 'custom',
} as const;

export const REPORT_PERIOD_LABELS: Record<string, string> = {
  weekly: 'Weekly',
  monthly: 'Monthly',
  quarterly: 'Quarterly',
  yearly: 'Yearly',
  custom: 'Custom Range',
};

// =====================
// SORTING OPTIONS
// =====================
export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export const TRANSACTION_SORT_OPTIONS = [
  { value: 'date', label: 'Date' },
  { value: 'amount', label: 'Amount' },
  { value: 'category', label: 'Category' },
  { value: 'account', label: 'Account' },
  { value: 'description', label: 'Description' },
] as const;

// =====================
// APPLICATION METADATA
// =====================
export const APP_META = {
  NAME: 'MyApp',
  VERSION: '1.0.0',
  DESCRIPTION: 'Personal Financial Management Application',
  BUILD_DATE: '2026-01-11',
  SUPPORT_EMAIL: 'support@myapp.local',
  PRIVACY_POLICY_URL: '/privacy',
  TERMS_URL: '/terms',
} as const;

// =====================
// FEATURE FLAGS
// =====================
export const FEATURES = {
  ENABLE_EXPORT: true,
  ENABLE_IMPORT: true,
  ENABLE_BUDGETS: true,
  ENABLE_REPORTS: true,
  ENABLE_RECURRING_TRANSACTIONS: true,
  ENABLE_MULTI_CURRENCY: true,
  ENABLE_2FA: true,
  ENABLE_DARK_MODE: true,
} as const;

// =====================
// ERROR MESSAGES
// =====================
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network connection error. Please try again.',
  TIMEOUT_ERROR: 'Request timeout. Please try again.',
  UNAUTHORIZED: 'Unauthorized. Please log in again.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNKNOWN_ERROR: 'An unknown error occurred. Please try again.',
} as const;

// =====================
// SUCCESS MESSAGES
// =====================
export const SUCCESS_MESSAGES = {
  TRANSACTION_CREATED: 'Transaction created successfully.',
  TRANSACTION_UPDATED: 'Transaction updated successfully.',
  TRANSACTION_DELETED: 'Transaction deleted successfully.',
  ACCOUNT_CREATED: 'Account created successfully.',
  ACCOUNT_UPDATED: 'Account updated successfully.',
  ACCOUNT_DELETED: 'Account deleted successfully.',
  BUDGET_CREATED: 'Budget created successfully.',
  BUDGET_UPDATED: 'Budget updated successfully.',
  BUDGET_DELETED: 'Budget deleted successfully.',
  PROFILE_UPDATED: 'Profile updated successfully.',
  PASSWORD_CHANGED: 'Password changed successfully.',
} as const;

// =====================
// EXPORT
// =====================
export default {
  API_ENDPOINTS,
  TRANSACTION_CATEGORIES,
  CATEGORY_LABELS,
  CATEGORY_COLORS,
  TRANSACTION_TYPES,
  ACCOUNT_TYPES,
  ACCOUNT_TYPE_LABELS,
  TRANSACTION_STATUS,
  TRANSACTION_STATUS_LABELS,
  CURRENCY,
  SUPPORTED_CURRENCIES,
  DATE_FORMATS,
  PAGINATION,
  LIMITS,
  VALIDATION,
  NOTIFICATION_TYPES,
  NOTIFICATION_DURATION,
  STORAGE_KEYS,
  THEMES,
  REPORT_PERIODS,
  REPORT_PERIOD_LABELS,
  SORT_ORDER,
  TRANSACTION_SORT_OPTIONS,
  APP_META,
  FEATURES,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
};
