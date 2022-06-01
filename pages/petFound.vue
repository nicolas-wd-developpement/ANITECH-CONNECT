<template>
<v-main black>
        <v-card-text black class="firstBlock">
          <v-row>
              <v-col cols="0" lg="2">
                  <v-spacer></v-spacer>
              </v-col>
              <v-col cols="12" lg="8">
                  <h1 class="display-1"> Pet found</h1>
              </v-col>
              <v-col cols="0" lg="2">
                  <v-spacer></v-spacer>
              </v-col>
          </v-row>
        </v-card-text>
        <!-- lOGIN modal-->
        <v-card width="400" class="mx-auto mt-5 grey">
          <v-form @submit.prevent="onSubmit">
            <!-- -->
            <v-card
              class="overflow-hidden"
              color="primary lighten-1"
              dark
            >
                  <v-text-field
                  v-model="tag.tagNumber"
                  :disabled="!isEditing"
                  color="white"
                  label="Enter the tag number written on the medal Ex: ABC123"
                ></v-text-field>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!isEditing"
                  color="success"
                  type="submit"
                  @click="save, onSubmit"
                >
                  Save
                </v-btn>
              </v-card-actions>
              <v-spacer></v-spacer>
              <v-snackbar
                v-model="hasSaved"
                :timeout="2000"
                absolute
                bottom
                left
              >
                We are looking for the pet
              </v-snackbar>
            </v-card>
          </v-form>
         </v-card>
        <v-card black>
          <v-card-title  width="1900" class="mx-auto mt-5 white">
              <h3 class="display-1"> </h3>
          </v-card-title>
        </v-card>
      </v-main>
</template>

<script>
import { useTagStore } from '../store/TagStore'
export default {
  name: 'IndexPage',
    setup(){
    const tagStore = useTagStore()
      return  {
        tagStore
      }
  },
    data: () => ({
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
          const tag = {
            ...this.tag,
            name: this.tag.name,
            id: this.tag.tagNumber,
            breed: this.tag.breed,
            phoneNumber: this.tag.phoneNumber,
            emailAddress: this.tag.emailAddress
          }
          this.$router.push({
            name: 'tag-id',
            params: { id: tag.tagNumber }
            })
        }
    },
}
</script>
<style>

</style>
