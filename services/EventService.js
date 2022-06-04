/* eslint-disable no-console */
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://strapi-nb0l.onrender.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTags() {
    return apiClient.get('/api/tags')
  },
  getTag(id) {
    return apiClient.get('/api/tags/' + '?filters[tagnumber]=' + id)
  },
  creatTag(tag) { 
    return apiClient.post('/api/tags', tag)
  },
  uploadPicture(picture) {
    return apiClient.post('/upload',picture)
  },
  createUser(user) {
    console.log(user)
    return apiClient.post('/auth/local/register',user)
  },
  getPicture(){
    return apiClient.get('/api/tags?populate=*')
}
  }
