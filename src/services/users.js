import api from './api'

const UsersService = {
  register: (params) => api.post('users/register', params),

  login: async (params) => {
    const response = await api.post('session', params)
    const { user, token } = response.data
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  },

  logout: async () => {
    localStorage.removeItem('user', null)
    localStorage.removeItem('token', null)
  },

  update: async (params) => {
    const user = await api.put('/users', params, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    })

    localStorage.setItem('user', JSON.stringify(user.data))
  },

  delete: async () => {
    await api.delete('/users', {
      headers: { 'x-access-token': localStorage.getItem('token') },
    })

    localStorage.removeItem('user', null)
    localStorage.removeItem('token', null)
  },
}

export default UsersService
