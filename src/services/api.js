// API Service for backend communication

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

class ApiService {
  constructor() {
    this.baseURL = API_URL
  }

  // Get auth token from localStorage
  getToken() {
    return localStorage.getItem('token')
  }

  // Set auth token
  setToken(token) {
    localStorage.setItem('token', token)
  }

  // Remove auth token
  removeToken() {
    localStorage.removeItem('token')
  }

  // Make authenticated request
  async request(url, options = {}) {
    const token = this.getToken()
    
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      }
    }

    // Add auth token if exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(`${this.baseURL}${url}`, config)
    
    // Handle response
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong')
    }
    
    return data
  }

  // Auth endpoints
  async register(userData) {
    const response = await this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    
    if (response.token) {
      this.setToken(response.token)
    }
    
    return response
  }

  async login(credentials) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
    
    if (response.token) {
      this.setToken(response.token)
    }
    
    return response
  }

  async logout() {
    try {
      await this.request('/auth/logout', {
        method: 'POST'
      })
    } finally {
      this.removeToken()
    }
  }

  async getCurrentUser() {
    return await this.request('/auth/me')
  }

  // User endpoints
  async getUsers() {
    return await this.request('/users')
  }

  async getUser(id) {
    return await this.request(`/users/${id}`)
  }

  async updateUser(id, userData) {
    return await this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData)
    })
  }

  async deleteUser(id) {
    return await this.request(`/users/${id}`, {
      method: 'DELETE'
    })
  }
}

export default new ApiService()