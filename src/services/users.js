import api from './api'

const UsersService = {
  register: (params) => api.post('users/register', params),

  login: async (params) => {
    const response = await api.post('session', params)
    const { user, token } = response.data
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  },
}

export default UsersService
