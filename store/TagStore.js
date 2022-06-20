import { defineStore } from "pinia";
import EventService from '../services/EventService.js'
export const useTagStore = defineStore('TagStore',{
    state() {
        return {
            token: {},
            tags: [],
            avatar:'',
            tag: {},
            user: {},
            name:'',
            tagNumber:'',
            breed:'',
            url:'',
            phoneNumber:'',
            emailAddress:'',
            picture:null,
            dataPicture: {
              "attributes": {
                "name": "",
                "mail": "",
                "phoneNumber": "",
                "breed": "",
                "tagnumber": "",
                "tagId": "",
                "createdAt": "",
                "updatedAt": "",
                "publishedAt": "",
                "oderid": null,
                "picture": {
                  "attributes": {
                                  "name": "",
                                  "mail": "",
                                  "phoneNumber": "",
                                  "breed": "",
                                  "tagnumber": "",
                                  "tagId": "",
                                  "createdAt": "",
                                  "updatedAt": "",
                                  "publishedAt": "",
                                  "oderid": "",
                                  "picture": {
                                      "data": [
                                          {
                                              "id": "",
                                              "attributes": {
                                                  "name": "",
                                                  "alternativeText": null,
                                                  "caption": null,
                                                  "width": "",
                                                  "height": "",
                                                  "formats": {
                                                      "large": {
                                                          "ext": "",
                                                          "url": "",
                                                          "hash": "",
                                                          "mime": "",
                                                          "name": "",
                                                          "path": null,
                                                          "size": "",
                                                          "width": "",
                                                          "height": ""
                                                      }
                                                  }
                                              }
                                          }
                                      ]
                                  }
                          }
                      }
                  }
            },
            dataTag: {
              "data": [
                {
                  "id": '',
                  "attributes": {
                    "breed": "",
                    "createdAt": "",
                    "mail": "",
                    "name": "",
                    "phoneNumber": "",
                    "publishedAt": "",
                    "tagId": "",
                    "tagnumber": "",
                    "updatedAt": "",
                    "oderid": ""
                  },
                  "meta": {
                    "availableLocales": []
                  },
                  "user": {
                    username: '',
                    email: '',
                    password: '',
                  }
                },
              ],
              "meta": {}
            }
        }
    },
    actions: {
        createTag(tag) {
          return  EventService.creatTag(tag)
        },
        fetchTag(id)  {
          return EventService.getTag(id)
            .then(response => {
              this.dataTag = response.data
              this.tag = this.dataTag.data[0].attributes
            })
        },
        getPicture(id) {
          EventService.getPicture(id)
          .then(response => {
            this.dataPicture = response.data
            // Research pictures' URLS
            const arrayData = Object.entries(this.dataPicture.data[0])
            const arrayDataAttributes = Object.entries(arrayData[1][1])
            const arrayPictureAttributes = Object.entries(arrayDataAttributes[1][1])
            const arrayPictureAttributesDetails = Object.entries(arrayPictureAttributes[0][1][0])
            const PictureDetails = Object.entries(arrayPictureAttributesDetails[1][1])
              this.avatar = 'https://strapi-nb0l.onrender.com' + PictureDetails[1][1]
              return this.avatar
          })
        },
        uploadPicture(picture) {
          return  EventService.uploadPicture(picture)
        },
        createUser(user) {
          return  EventService.createUser(user)
        },
        getTagById(id){
          // Research pictures' URLS
          EventService.getPicture(id).then(response => {
            this.dataPicture = response.data
            const arrayToBoucle = Object.entries(this.dataPicture.data)
            arrayToBoucle.forEach((element,index) => {
             const arrayData = Object.entries(this.dataPicture.data[index])
             const arrayDataAttributes = Object.entries(arrayData[1][1])
             if (arrayDataAttributes[4][1]===id) {
              return true
             }else return false
            })
          })
         },
        setToken(){
          EventService.setToken().then(response => {
            this.token = response.data
          })
          return this.token
        }
    
    },
})