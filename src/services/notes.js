import api from './api'

const NotesService = {
  token: { 'x-access-token': localStorage.getItem('token') },

  index: () => api.get('/notes', { headers: NotesService.token }),

  create: () =>
    api.post(
      '/notes',
      {
        title: 'Note title',
        body: 'Note body',
      },
      { headers: NotesService.token }
    ),

  search: (filter) =>
    api.get(`/notes/search?filter=${filter}`, { headers: NotesService.token }),

  destroy: (id) => api.delete(`/notes/${id}`, { headers: NotesService.token }),
}

export default NotesService
