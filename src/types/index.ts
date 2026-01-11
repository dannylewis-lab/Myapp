/**
 * MyApp Financial Management Application - Type Definitions
 * Central location for all TypeScript interfaces and types
 */

// =====================================================
// USER TYPES
// =====================================================

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  currency: string;
  theme: 'light' | 'dark' | 'auto';
  notifications: NotificationSettings;
  language: string;
}

export interface NotificationSettings {
  emailAlerts: boolean;
  pushNotifications: boolean;
  transactionNotifications: boolean;
  goalNotifications: boolean;
}

// =====================================================
// TRANSACTION TYPES
// =====================================================

export interface Transaction {
  id: string;
  userId: string;
  description: string;
  amount: number;
  category: TransactionCategory;
  date: Date;
  type: 'income' | 'expense';
  paymentMethod: PaymentMethod;
  tags: string[];
  notes?: string;
  attachments?: string[];
  isRecurring: boolean;
  recurringPattern?: RecurringPattern;
  createdAt: Date;
  updatedAt: Date;
}

export type TransactionCategory = 
  | 'food'
  | 'transportation'
  | 'utilities'
  | 'entertainment'
  | 'healthcare'
  | 'shopping'
  | 'education'
  | 'salary'
  | 'investment'
  | 'other';

export type PaymentMethod = 
  | 'cash'
  | 'credit_card'
  | 'debit_card'
  | 'bank_transfer'
  | 'digital_wallet'
  | 'check'
  | 'other';

export interface RecurringPattern {
  frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'quarterly' | 'yearly';
  startDate: Date;
  endDate?: Date;
  occurrences?: number;
}

export interface TransactionFilters {
  startDate?: Date;
  endDate?: Date;
  category?: TransactionCategory[];
  type?: 'income' | 'expense';
  minAmount?: number;
  maxAmount?: number;
  tags?: string[];
  searchText?: string;
}

export interface TransactionSummary {
  totalIncome: number;
  totalExpense: number;
  netCashFlow: number;
  transactionCount: number;
  averageTransaction: number;
}

// =====================================================
// SAVINGS GOAL TYPES
// =====================================================

export interface SavingsGoal {
  id: string;
  userId: string;
  name: string;
  description?: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
  category: SavingsCategory;
  priority: 'low' | 'medium' | 'high';
  status: GoalStatus;
  icon?: string;
  color?: string;
  contributions: GoalContribution[];
  createdAt: Date;
  updatedAt: Date;
}

export type SavingsCategory = 
  | 'vacation'
  | 'home'
  | 'car'
  | 'education'
  | 'emergency'
  | 'investment'
  | 'retirement'
  | 'other';

export type GoalStatus = 'active' | 'paused' | 'completed' | 'cancelled';

export interface GoalContribution {
  id: string;
  amount: number;
  date: Date;
  notes?: string;
}

export interface SavingsGoalProgress {
  goalId: string;
  percentageComplete: number;
  amountRemaining: number;
  daysRemaining: number;
  monthlyContributionNeeded: number;
  isOnTrack: boolean;
}

// =====================================================
// BUDGET TYPES
// =====================================================

export interface Budget {
  id: string;
  userId: string;
  month: string; // YYYY-MM format
  category: TransactionCategory;
  limit: number;
  spent: number;
  alert: number; // Percentage (e.g., 80 for 80%)
  createdAt: Date;
  updatedAt: Date;
}

export interface BudgetOverview {
  totalBudget: number;
  totalSpent: number;
  totalRemaining: number;
  budgetPercentage: number;
  categoriesOverBudget: BudgetAlert[];
}

export interface BudgetAlert {
  category: TransactionCategory;
  limit: number;
  spent: number;
  percentageUsed: number;
  exceeded: boolean;
}

// =====================================================
// ACCOUNT TYPES
// =====================================================

export interface Account {
  id: string;
  userId: string;
  name: string;
  accountType: AccountType;
  balance: number;
  currency: string;
  accountNumber?: string;
  institution?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type AccountType = 
  | 'checking'
  | 'savings'
  | 'credit_card'
  | 'investment'
  | 'loan'
  | 'other';

export interface AccountBalance {
  accountId: string;
  balance: number;
  date: Date;
}

// =====================================================
// REPORT TYPES
// =====================================================

export interface FinancialReport {
  userId: string;
  period: {
    startDate: Date;
    endDate: Date;
  };
  summary: TransactionSummary;
  categoryBreakdown: CategoryBreakdown[];
  accounts: AccountBalance[];
  goals: SavingsGoalProgress[];
  generatedAt: Date;
}

export interface CategoryBreakdown {
  category: TransactionCategory;
  income: number;
  expense: number;
  percentage: number;
  transactionCount: number;
}

export interface DashboardData {
  user: User;
  accounts: Account[];
  totalBalance: number;
  recentTransactions: Transaction[];
  savingsGoals: SavingsGoal[];
  budgets: Budget[];
  upcomingGoals: SavingsGoal[];
  netWorth: number;
}

// =====================================================
// UTILITY TYPES
// =====================================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  timestamp: Date;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// =====================================================
// FORM TYPES
// =====================================================

export interface TransactionFormData {
  description: string;
  amount: number;
  category: TransactionCategory;
  date: Date;
  type: 'income' | 'expense';
  paymentMethod: PaymentMethod;
  tags?: string[];
  notes?: string;
  isRecurring?: boolean;
  recurringPattern?: RecurringPattern;
}

export interface SavingsGoalFormData {
  name: string;
  description?: string;
  targetAmount: number;
  deadline: Date;
  category: SavingsCategory;
  priority: 'low' | 'medium' | 'high';
}

export interface BudgetFormData {
  category: TransactionCategory;
  limit: number;
  alert: number;
}

export interface AccountFormData {
  name: string;
  accountType: AccountType;
  balance?: number;
  currency?: string;
  accountNumber?: string;
  institution?: string;
}

// =====================================================
// ENUM EXPORTS FOR CONVENIENCE
// =====================================================

export enum TransactionCategoryEnum {
  FOOD = 'food',
  TRANSPORTATION = 'transportation',
  UTILITIES = 'utilities',
  ENTERTAINMENT = 'entertainment',
  HEALTHCARE = 'healthcare',
  SHOPPING = 'shopping',
  EDUCATION = 'education',
  SALARY = 'salary',
  INVESTMENT = 'investment',
  OTHER = 'other',
}

export enum PaymentMethodEnum {
  CASH = 'cash',
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  BANK_TRANSFER = 'bank_transfer',
  DIGITAL_WALLET = 'digital_wallet',
  CHECK = 'check',
  OTHER = 'other',
}

export enum SavingsCategoryEnum {
  VACATION = 'vacation',
  HOME = 'home',
  CAR = 'car',
  EDUCATION = 'education',
  EMERGENCY = 'emergency',
  INVESTMENT = 'investment',
  RETIREMENT = 'retirement',
  OTHER = 'other',
}

export enum AccountTypeEnum {
  CHECKING = 'checking',
  SAVINGS = 'savings',
  CREDIT_CARD = 'credit_card',
  INVESTMENT = 'investment',
  LOAN = 'loan',
  OTHER = 'other',
}
