<template>
<v-main class="white" height=600 style="padding: 0;">
  <v-sheet
  height="650"
  class="overflow-hidden"
  style="position: relative;"
  >
        <v-card-text black class="firstBlock">
          <v-row>
              <v-col cols="0" lg="2">
                  <v-spacer></v-spacer>
              </v-col>
              <v-col cols="12" lg="8">
                  <h1 class="display-1">{{$t("petFound")}}</h1>
              </v-col>
              <v-col cols="0" lg="2">
                  <v-spacer></v-spacer>
              </v-col>
          </v-row>
        </v-card-text>
        <!-- lOGIN modal-->
        <v-card width="400" class="mx-auto mt-5" color="warning" elevation="11">
          <v-form @submit.prevent="onSubmit">
            <!-- -->
                <v-text-field
                v-model="tag.tagNumber"
                :disabled="!isEditing"
                prepend-icon="mdi-account-circle"
                color="white"
                :label="$t('tagNumberLabel')"
              ></v-text-field>
              <v-row justify="space-between">
                <v-col></v-col>
                <v-col>
                  <v-btn
                  :disabled="!isEditing"
                  color="success"
                  type="submit"
                  @click="save, onSubmit"
                  >
                   {{$t("research")}}
                  </v-btn>
                 </v-col>
                <v-col></v-col>
              </v-row>
              <v-snackbar
                v-model="hasSearched"
                :timeout="2000"
                absolute
                bottom
                left
              >
                We are looking for the pet
              </v-snackbar>
              <v-snackbar
                v-model="hasError"
                absolute
                bottom
                left
                color="warning"
                :timeout="10000"
              >
               {{$t("weHaveError")}} {{errors}}
               <p> {{$t("tryAgain")}}</p>
               <v-btn @click="hasError= false"> Ok</v-btn>
              </v-snackbar>
          </v-form>
         </v-card>
        <v-card black>
          <v-card-title  width="1900" class="mx-auto mt-5 white">
              <h3 class="display-1"> </h3>
          </v-card-title>
        </v-card>
    </v-sheet>
  </v-main>
</template>
<script>
import { useTagStore } from '../store/TagStore'
import EventService from '../services/EventService.js'
export default {
  name: 'IndexPage',
    setup(){
    const tagStore = useTagStore()
      return  {
        tagStore
      }
  },
    data: () => ({
    tagNumberUpperCase:"",
    hasError: false,
    dataPicture:{},
    errors:{},
    hasSearched: false,
    showPassword: false,
    collapseOnScroll: true,
    links:[
      'home',
      'login',
      'register'
    ],
     hasSaved: false,
        isEditing: true,
        model: null,
        species: [
          { name: 'Berger allemand', abbr: 'FL', id: '1' },
          { name: 'labrador', abbr: 'GA', id: '2' },
          { name: 'terrier', abbr: 'NE', id: '3' },
          { name: 'caniche', abbr: 'CA', id: '4' },
          { name: 'péruche', abbr: 'NY', id: '5' },
        ],
        tag: {
          id:'',
          name:'',
          tagNumber:'',
          breed:'',
          emailAddress:'',
          phoneNumber:null
        }
  }),
  computed: {
    availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    },
   methods: {
      customFilter (item, queryText, itemText) {
        const textOne = item.name.toLowerCase()
        const textTwo = item.abbr.toLowerCase()
        const searchText = queryText.toLowerCase()

        return textOne.includes(searchText) > -1 ||
          textTwo.includes(searchText) > -1
      },
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
        onSubmit() {
          this.hasSearched = true
          this.tagNumberUpperCase = this.tag.tagNumber.toUpperCase()
          EventService.getTag(this.tagNumberUpperCase).then(response => {
          this.dataPicture = response.data
          const arrayToBoucle = Object.entries(this.dataPicture.data)
          arrayToBoucle.forEach((element,index) => {
            const arrayData = Object.entries(this.dataPicture.data[index])
            const arrayDataAttributes = Object.entries(arrayData[1][1])
            // check if tag required exist
            if (arrayDataAttributes[4][1]===this.tagNumberUpperCase) {
              this.hasSearched = false
              const tag = {
                ...this.tag,
                name: this.tag.name,
                id: this.tagNumberUpperCase,
                breed: this.tag.breed,
                phoneNumber: this.tag.phoneNumber,
                emailAddress: this.tag.emailAddress
              }
              this.$router.push({
                path: this.localePath('/tag') + '/' + tag.id
                })
            }
          })
          if (this.hasSearched){
            this.hasSearched = false
            this.$router.push({
                path: this.localePath('/tagIDError')
                })
          }
        }).catch( error => {
          this.hasError = true
          this.errors =  error
        })
        }
    },
}
</script>
<style>

.v-application .white {
    background-color: #fff!important;
    border-color: #fff!important;
    padding-top: 20px;
    margin-top: 20px;
    height: 610px;
}

</style>
