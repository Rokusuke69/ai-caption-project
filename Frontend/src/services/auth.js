import api from './api';

export const authService = {
  async register(username, password) {
    const response = await api.post('/auth/register', { username, password });
    return response.data;
  },

  async login(username, password) {
    const response = await api.post('/auth/login', { username, password });
    return response.data;
  },

  async logout() {
    // Since we're using httpOnly cookies, we just need to clear client-side state
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }
};