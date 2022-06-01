/* eslint-disable no-console */
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://strapi-nb0l.onrender.com/api/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTags() {
    return apiClient.get('/tags')
  },
  getTag(id) {
    return apiClient.get('/tags/' + '?filters[tagnumber]=' + id)
  },
  creatTag(tag) { 
    return apiClient.post('/tags', tag)
  }
}