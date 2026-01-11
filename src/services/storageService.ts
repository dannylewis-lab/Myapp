/**
 * Storage Service Wrapper
 * Provides a unified interface for local storage operations
 * Can be adapted for different storage backends (AsyncStorage, localStorage, etc.)
 */

type StorageValue = string | number | boolean | object | null;

interface IStorageService {
  getItem(key: string): Promise<StorageValue>;
  setItem(key: string, value: StorageValue): Promise<void>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
  getAllKeys(): Promise<string[]>;
}

class StorageService implements IStorageService {
  private prefix = '@myapp_';

  async getItem(key: string): Promise<StorageValue> {
    try {
      const item = localStorage.getItem(this.prefix + key);
      if (item === null) return null;
      
      // Try to parse as JSON
      try {
        return JSON.parse(item);
      } catch {
        // Return as string if not valid JSON
        return item;
      }
    } catch (error) {
      console.error(`Failed to get item ${key}:`, error);
      throw error;
    }
  }

  async setItem(key: string, value: StorageValue): Promise<void> {
    try {
      const serialized = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(this.prefix + key, serialized);
    } catch (error) {
      console.error(`Failed to set item ${key}:`, error);
      throw error;
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      localStorage.removeItem(this.prefix + key);
    } catch (error) {
      console.error(`Failed to remove item ${key}:`, error);
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      const keys = await this.getAllKeys();
      keys.forEach(key => {
        localStorage.removeItem(this.prefix + key);
      });
    } catch (error) {
      console.error('Failed to clear storage:', error);
      throw error;
    }
  }

  async getAllKeys(): Promise<string[]> {
    try {
      const keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.prefix)) {
          keys.push(key.replace(this.prefix, ''));
        }
      }
      return keys;
    } catch (error) {
      console.error('Failed to get all keys:', error);
      throw error;
    }
  }
}

export const storageService = new StorageService();