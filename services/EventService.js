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

const amzAuth = axios.create({
  baseURL: 'https://api.amazon.com/auth/o2/token',
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
    // return apiClient.get('/api/tags/' + '?filters[tagnumber]=' + id)
    return apiClient.get('/api/tags/' + '?filters[tagId][$eq]=' + id)
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
  getPicture(id){
    return apiClient.get('/api/tags?fields[0]=tagnumber&populate[picture][fields][0]=name&populate[picture][fields][1]=url&filters[tagId][$eq]=' + id)
    // return apiClient.get('/api/tags?populate=*')
    // https://strapi-nb0l.onrender.com/api/tags?fields[0]=tagnumber&populate[picture][fields][0]=name&populate[picture][fields][1]=url&filters[tagId][$eq]=ABC123
  },
  setToken(){
    return amzAuth.post('?grant_type=refresh_token&refresh_token=Atzr|IwEBIDAohbK80ygZMX4ocyyIKRFxnZRCs50TLVetTJWk-h_GexhMh1qs_iBY-Pxqdr_Ukzt8N1m2d7PVSEiwx1yzJQ-CI3IWGgQv3cCtY8-2JPjdSC2rmSKR4jtl7pg2MszwKSh1JOMJq5NBHo-KcbqbnzjB6v5eRSnd5L4k9xFJoOnhgwI9aj-7SdbXvZy-M_JKt7qJKQxh9CuxLksZPGpNJPzQE41cWAETOG3D1U0lmFe5N-DPWriwo3WbyQwYEVD7PQKfjfmi-13UvZruR0Uf0Z254vMgpq7nKCB6UyyFMski1eAB3K8f5l8iLqFnqUpy0_g&client_id=amzn1.application-oa2-client.1901df1b736645e881f2c8029bd32ec2&client_secret=8363c02524bf915ea037c1a21e1b5f7bd635b730beec2554643b51f496e7f7ba')
  }
  }
