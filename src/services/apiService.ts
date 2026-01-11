/**
 * API Service
 * Handles all backend communication for the MyApp financial management application
 */

interface RequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  status: number;
}

class ApiService {
  private baseUrl: string;
  private defaultTimeout = 30000; // 30 seconds
  private token: string | null = null;

  constructor(baseUrl: string = process.env.REACT_APP_API_URL || 'http://localhost:3000/api') {
    this.baseUrl = baseUrl;
  }

  /**
   * Set authorization token
   */
  setAuthToken(token: string | null) {
    this.token = token;
  }

  /**
   * Get authorization token
   */
  getAuthToken(): string | null {
    return this.token;
  }

  /**
   * Make an API request
   */
  private async request<T>(endpoint: string, config: RequestConfig = {}): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;
    const method = config.method || 'GET';
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...config.headers,
    };

    // Add authorization header if token exists
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const controller = new AbortController();
      const timeout = config.timeout || this.defaultTimeout;
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        method,
        headers,
        body: config.body ? JSON.stringify(config.body) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `HTTP ${response.status}`);
      }

      return {
        success: true,
        data,
        status: response.status,
      };
    } catch (error) {
      console.error(`API request failed: ${method} ${endpoint}`, error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        status: 0,
      };
    }
  }

  /**
   * GET request
   */
  get<T>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  /**
   * POST request
   */
  post<T>(endpoint: string, body?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body });
  }

  /**
   * PUT request
   */
  put<T>(endpoint: string, body?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body });
  }

  /**
   * DELETE request
   */
  delete<T>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }

  /**
   * PATCH request
   */
  patch<T>(endpoint: string, body?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body });
  }
}

export const apiService = new ApiService();