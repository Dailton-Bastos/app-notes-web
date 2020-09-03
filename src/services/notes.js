import api from './api'

const NotesService = {
  index: () =>
    api.get('/notes', {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),

  create: () =>
    api.post(
      '/notes',
      {
        title: 'Note title',
        body: 'Note body',
      },
      { headers: { 'x-access-token': localStorage.getItem('token') } }
    ),

  search: (filter) =>
    api.get(`/notes/search?filter=${filter}`, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),

  update: (id, params) =>
    api.put(`/notes/${id}`, params, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),

  destroy: (id) =>
    api.delete(`/notes/${id}`, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    }),
}

export default NotesService
