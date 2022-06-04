import { defineStore } from "pinia";
import EventService from '../services/EventService.js'
export const useTagStore = defineStore('TagStore',{
    state() {
        return {
            tags: [],
            avatar:"",
            tag: {},
            user: {},
            name:'',
            tagNumber:'',
            breed:'',
            phoneNumber:'',
            emailAddress:'',
            picture:null,
            dataPicture: {
              "attributes": {
                "name": "test",
                "mail": "test@test.fr",
                "phoneNumber": "7894561313",
                "breed": "caniche",
                "tagnumber": "789456",
                "tagId": "789456",
                "createdAt": "2022-06-04T06:12:45.909Z",
                "updatedAt": "2022-06-04T06:12:45.909Z",
                "publishedAt": "2022-06-04T06:12:45.658Z",
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
                                                          "ext": ".jpeg",
                                                          "url": "/uploads/large_789456_368fbbf7bd.jpeg",
                                                          "hash": "large_789456_368fbbf7bd",
                                                          "mime": "image/jpeg",
                                                          "name": "large_789456.jpeg",
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
                  "id": 1,
                  "attributes": {
                    "breed": "",
                    "createdAt": "",
                    "mail": "",
                    "name": "",
                    "phoneNumber": "",
                    "publishedAt": "",
                    "tagId": "",
                    "tagnumber": "",
                    "updatedAt": ""
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
        getPicture() {
          EventService.getPicture()
          .then(response => {
            this.dataPicture = response.data
            const isGtagNumber = (element) => element === this.tagNumber
            console.log(this.dataPicture.data.findIndex(isGtagNumber))
            this.avatar = "https://strapi-nb0l.onrender.com" + this.dataPicture.data[1].attributes.picture.data[0].attributes.url
            console.log('this.avatar')
            console.log(this.avatar)
            return this.avatar
          })
        },
        uploadPicture(picture) {
          return  EventService.uploadPicture(picture)
        },
        createUser(user) {
          return  EventService.createUser(user)
        },
    
    },
})