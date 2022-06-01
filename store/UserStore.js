import { defineStore } from "pinia";
import EventService from "~/services/EventService";
export const useUserStore = defineStore('UserStore',{
state() {
    return {
        user: 'Nicolas BLOND',
        breed:'',
        tagCode:'',
        passWord:''
     }
    },
actions: {
    // API call in services
    createTag(tag) {
        EventService.creatTag(tag)
      }
}
})