import { defineStore } from "pinia";
import EventService from '../services/EventService.js'
export const useTagStore = defineStore('TagStore',{
    state() {
        return {
            tags: [],
            tag: {},
            name:'',
            tagNumber:'',
            breed:'',
            phoneNumber:'',
            emailAddress:'',
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
                    console.log(this.tag)
                  })
        }
    },
})