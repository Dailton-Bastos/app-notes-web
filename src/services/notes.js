import api from './api'

// const headers = { 'x-access-token': localStorage.getItem('token') }

const NotesService = {
  index: (token) => api.get('/notes', { headers: token }),
}

export default NotesService
