import api from './api'

const headers = { 'x-access-token': localStorage.getItem('token') }

const NotesService = {
  index: (token) => api.get('/notes', { headers: token }),

  create: () =>
    api.post(
      '/notes',
      {
        title: 'Note title',
        body: 'Note body',
      },
      { headers }
    ),

  destroy: (id) => api.delete(`/notes/${id}`, { headers }),
}

export default NotesService
