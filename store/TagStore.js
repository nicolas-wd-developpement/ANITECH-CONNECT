import { defineStore } from "pinia";
import EventService from '../services/EventService.js'
export const useTagStore = defineStore('TagStore',{
    state() {
        return {
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
        getPicture(id) {
          EventService.getPicture()
          .then(response => {
            this.dataPicture = response.data
            this.avatar = this.getUrl(id)
            console.log(this.getUrl(id))
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
        getUrl(id){
         // Research pictures' URLS
         const arrayToBoucle = Object.entries(this.dataPicture.data)
         arrayToBoucle.forEach((element,index) => {
          const arrayData = Object.entries(this.dataPicture.data[index])
          console.log('this.dataPicture.entries:')
          console.log(arrayData)
          const arrayDataAttributes = Object.entries(arrayData[1][1])
          console.log('arrayDataAttributes:')
          console.log(arrayDataAttributes)
          const arrayPictureAttributes = Object.entries(arrayDataAttributes[10][1])
          console.log('arrayPictureAttributesURL:')
          console.log(arrayPictureAttributes)
          const arrayPictureAttributesDetails = Object.entries(arrayPictureAttributes[0][1][0])
          console.log("arrayPictureAttributesDetails[1][1]")
          console.log(arrayPictureAttributesDetails)
          const Pitcturedetails = Object.entries(arrayPictureAttributesDetails[1][1])
          console.log("Current id")
          console.log(arrayDataAttributes[4][1])
          console.log("this.tagNumber")
          console.log(id)
          if (arrayDataAttributes[4][1]===id) {
            console.log('url:')
            console.log(Pitcturedetails[10][1])
            this.url = 'https://strapi-nb0l.onrender.com' + Pitcturedetails[10][1]
            console.log(this.url)
            return this.url 
          }
         });
            console.log(this.url)
            return this.url
        }
    
    },
})