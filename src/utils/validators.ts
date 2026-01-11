/**
 * Validators Utility Module
 * 
 * Provides validation functions for common input types in the MyApp financial management application.
 * Includes email, password, PIN, and phone number validation.
 * 
 * @module src/utils/validators
 */

/**
 * Email validation result type
 */
interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates email address format
 * 
 * Requirements:
 * - Must be a valid email format (RFC 5322 simplified)
 * - Must contain @ symbol
 * - Must have valid domain
 * 
 * @param email - Email address to validate
 * @returns ValidationResult with validity status and optional error message
 * 
 * @example
 * validateEmail('user@example.com'); // { isValid: true }
 * validateEmail('invalid.email'); // { isValid: false, error: "Invalid email format" }
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return {
      isValid: false,
      error: 'Email is required and must be a string'
    };
  }

  const trimmedEmail = email.trim().toLowerCase();
  
  // RFC 5322 simplified regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmedEmail)) {
    return {
      isValid: false,
      error: 'Invalid email format'
    };
  }

  // Additional validation: check length
  if (trimmedEmail.length > 254) {
    return {
      isValid: false,
      error: 'Email address is too long'
    };
  }

  const [localPart] = trimmedEmail.split('@');
  if (localPart.length > 64) {
    return {
      isValid: false,
      error: 'Email local part is too long'
    };
  }

  return { isValid: true };
}

/**
 * Validates password strength
 * 
 * Requirements:
 * - Minimum 8 characters
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one number
 * - At least one special character (!@#$%^&*)
 * - Maximum 128 characters
 * 
 * @param password - Password to validate
 * @returns ValidationResult with validity status and optional error message
 * 
 * @example
 * validatePassword('SecurePass123!'); // { isValid: true }
 * validatePassword('weak'); // { isValid: false, error: "..." }
 */
export function validatePassword(password: string): ValidationResult {
  if (!password || typeof password !== 'string') {
    return {
      isValid: false,
      error: 'Password is required and must be a string'
    };
  }

  // Check minimum length
  if (password.length < 8) {
    return {
      isValid: false,
      error: 'Password must be at least 8 characters long'
    };
  }

  // Check maximum length
  if (password.length > 128) {
    return {
      isValid: false,
      error: 'Password must not exceed 128 characters'
    };
  }

  // Check for uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      error: 'Password must contain at least one uppercase letter'
    };
  }

  // Check for lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      error: 'Password must contain at least one lowercase letter'
    };
  }

  // Check for number
  if (!/\d/.test(password)) {
    return {
      isValid: false,
      error: 'Password must contain at least one number'
    };
  }

  // Check for special character
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return {
      isValid: false,
      error: 'Password must contain at least one special character (!@#$%^&*...)'
    };
  }

  return { isValid: true };
}

/**
 * Validates PIN (Personal Identification Number)
 * 
 * Requirements:
 * - Must be 4-6 digits only
 * - No letters or special characters
 * - Cannot be all same digits (e.g., 1111)
 * - Cannot be sequential (e.g., 1234)
 * 
 * @param pin - PIN to validate
 * @returns ValidationResult with validity status and optional error message
 * 
 * @example
 * validatePIN('1234'); // { isValid: true }
 * validatePIN('123'); // { isValid: false, error: "PIN must be 4-6 digits" }
 * validatePIN('1111'); // { isValid: false, error: "PIN cannot contain all identical digits" }
 */
export function validatePIN(pin: string): ValidationResult {
  if (!pin || typeof pin !== 'string') {
    return {
      isValid: false,
      error: 'PIN is required and must be a string'
    };
  }

  const trimmedPIN = pin.trim();

  // Check if PIN contains only digits
  if (!/^\d+$/.test(trimmedPIN)) {
    return {
      isValid: false,
      error: 'PIN must contain only digits'
    };
  }

  // Check length
  if (trimmedPIN.length < 4 || trimmedPIN.length > 6) {
    return {
      isValid: false,
      error: 'PIN must be 4-6 digits long'
    };
  }

  // Check if all digits are the same
  if (/^(\d)\1+$/.test(trimmedPIN)) {
    return {
      isValid: false,
      error: 'PIN cannot contain all identical digits'
    };
  }

  // Check if PIN is sequential
  const digits = trimmedPIN.split('').map(Number);
  const isSequential = digits.every((digit, index) => {
    if (index === 0) return true;
    return digit === digits[index - 1] + 1 || digit === digits[index - 1] - 1;
  });

  if (isSequential && digits.length > 1) {
    return {
      isValid: false,
      error: 'PIN cannot be sequential'
    };
  }

  return { isValid: true };
}

/**
 * Validates phone number
 * 
 * Requirements:
 * - Must be 10-15 digits
 * - Can include spaces, hyphens, and parentheses for formatting
 * - Can include optional + prefix for international format
 * - Must have valid digit count after removing formatting characters
 * 
 * @param phone - Phone number to validate
 * @returns ValidationResult with validity status and optional error message
 * 
 * @example
 * validatePhone('(555) 123-4567'); // { isValid: true }
 * validatePhone('555-123-4567'); // { isValid: true }
 * validatePhone('+1 555 123 4567'); // { isValid: true }
 * validatePhone('123'); // { isValid: false, error: "..." }
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone || typeof phone !== 'string') {
    return {
      isValid: false,
      error: 'Phone number is required and must be a string'
    };
  }

  const trimmedPhone = phone.trim();

  // Allow: digits, spaces, hyphens, parentheses, and + prefix
  if (!/^[\d\s\-()+ ]+$/.test(trimmedPhone)) {
    return {
      isValid: false,
      error: 'Phone number contains invalid characters'
    };
  }

  // Extract only digits
  const digitsOnly = trimmedPhone.replace(/\D/g, '');

  // Check digit count (10-15 digits)
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return {
      isValid: false,
      error: 'Phone number must contain 10-15 digits'
    };
  }

  // Basic validation: check if it has at least some variation (not all same digits)
  if (/^(\d)\1+$/.test(digitsOnly)) {
    return {
      isValid: false,
      error: 'Phone number appears to be invalid (repeated digits)'
    };
  }

  return { isValid: true };
}

/**
 * Validates multiple inputs at once
 * 
 * @param inputs - Object containing inputs to validate with their types
 * @returns Object with validation results for each input
 * 
 * @example
 * validateAll({
 *   email: 'user@example.com',
 *   password: 'SecurePass123!',
 *   pin: '5678',
 *   phone: '555-123-4567'
 * });
 */
export function validateAll(inputs: {
  email?: string;
  password?: string;
  pin?: string;
  phone?: string;
}): Record<string, ValidationResult> {
  const results: Record<string, ValidationResult> = {};

  if (inputs.email !== undefined) {
    results.email = validateEmail(inputs.email);
  }

  if (inputs.password !== undefined) {
    results.password = validatePassword(inputs.password);
  }

  if (inputs.pin !== undefined) {
    results.pin = validatePIN(inputs.pin);
  }

  if (inputs.phone !== undefined) {
    results.phone = validatePhone(inputs.phone);
  }

  return results;
}

export default {
  validateEmail,
  validatePassword,
  validatePIN,
  validatePhone,
  validateAll
};