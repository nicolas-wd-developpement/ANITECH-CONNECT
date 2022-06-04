<template>
<v-main class="white">
      <v-card-text black>
        <v-row>
          <v-col cols="0" lg="2">
              <v-spacer></v-spacer>
          </v-col>
          <v-col cols="12" lg="8">
             <h1> Connect your tag</h1>
          </v-col>
          <v-col cols="0" lg="2">
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
              <input 
                label="Pet photo"
                type="file" 
                name="image"
                @change="handleFileUpload">
              <v-card-text>
                <v-text-field
                  v-model="name" 
                  label="Pet Name" 
                  prepend-icon="mdi-account-circle"
                  :error-messages="nameErrors"
                  required
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                  >
                </v-text-field>
                <v-text-field
                  v-model="phoneNumber"
                  type="phone"
                  label="Phone Number"
                  prepend-icon="mdi-account-circle"
                  required
                  :error-messages="phoneNumberErrors"
                  @input="$v.phoneNumber.$touch()"
                  @blur="$v.phoneNumber.$touch()"
                  > 
                </v-text-field>
                <v-text-field
                  v-model="emailAddress"
                  type="email"
                  label="email"
                  prepend-icon="mdi-account-circle"
                  :error-messages="emailErrors"
                  required
                  @input="$v.emailAddress.$touch()"
                  @blur="$v.emailAddress.$touch()"
                > 
                </v-text-field>
                <v-text-field 
                   v-model="password"
                  :type= "showPassword ? 'text' : 'password'"
                  label="password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' :'mdi-eye-off'"
                  @click:append="showPassword = ! showPassword">
                </v-text-field>
                  <v-text-field
                  v-model="tagNumber"
                  color="white"
                  label="Numéro du colier"
                  required
                  :error-messages="tagErrors"
                  @input="$v.tagNumber.$touch()"
                  @blur="$v.tagNumber.$touch()"

                ></v-text-field>
                <v-autocomplete
                  v-model="breed"
                  :items="species"
                  color="white"
                  item-text="name"
                  label="Espece"
                ></v-autocomplete>
              </v-card-text>
                <v-checkbox
                  v-model="checkbox"
                  :error-messages="checkboxErrors"
                  label="Do you agree?"
                  required
                  @change="$v.checkbox.$touch()"
                  @blur="$v.checkbox.$touch()"
                ></v-checkbox>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-tex v-if="!checkbox  || !tagNumber || !emailAddress || !phoneNumber   ">
                  <v-btn
                  color="success"
                  type="submit"
                  disabled
                  >
                   Save
                  </v-btn>
                </v-tex>
                <v-text v-else>
                  <v-btn
                  color="success"
                  type="submit"
                  :disabled=$v.$anyError
                  :loading="loading"
                  @click="onSubmit, loader = 'loading'"
                  @change="$v.checkbox.$touch()"
                  >
                   Save
                  </v-btn>
                </v-text>
              </v-card-actions>
              <v-spacer></v-spacer>
              <v-snackbar
                v-model="hasSaved"
                :timeout="2000"
                absolute
                bottom
                left
              >
                Your profile has been updated
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
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'
import { useTagStore } from '../store/TagStore'
export default {
  name: 'IndexPage',
  mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(10) },
      emailAddress: { required, email },
      phoneNumber: { required, maxLength: maxLength(13), minLength: minLength(10)},
      tagNumber: { required, maxLength: maxLength(6) },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },
    setup(){
    const tagStore = useTagStore()
      return  {
        tagStore,
      }
    
    },
    data: () => ({
      loading: false,
      name: '',
      email: '',
      emailAddress: '',
      phoneNumber: '',
      tagNumber: '',
      select: null,
      selectedFile: null,
      breed: '',
      checkbox: false,
      showPassword: false,
      collapseOnScroll: true,
      password:'',
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
          phoneNumber:'',
          password:''
        },
        dataTag: {
              "data": {
                  "breed": "",
                  "mail": "",
                  "name": "",
                  "phoneNumber": "",
                  "tagId": "",
                  "tagnumber": "",
                  "password": ""
                  }
            }
    }),
  computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 15 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
        phoneNumberErrors () {
        const errors = []
        if (!this.$v.phoneNumber.$dirty) return errors
        !this.$v.phoneNumber.minLength && errors.push('Phone number must be at minimum 10 digits')
        !this.$v.phoneNumber.maxLength && errors.push('Phone number must be at maximum 15 digits')
        !this.$v.phoneNumber.required && errors.push('Phone is required.')
        return errors
      },
        tagErrors () {
        const errors = []
        if (!this.$v.tagNumber.$dirty) return errors
        !this.$v.tagNumber.maxLength && errors.push('Please enter the number written on the medal')
        !this.$v.tagNumber.required && errors.push('Tag number is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.emailAddress.$dirty) return errors
        !this.$v.emailAddress.email && errors.push('Must be valid e-mail')
        !this.$v.emailAddress.required && errors.push('E-mail is required')
        return errors
      },
      
    },
     watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
      },
    },
    methods: {
        handleFileUpload(event) {
          this.selectedFile = event.target.files[0]
        },
        onSubmit() {
          const formData = new FormData()
          const fileName = this.tagNumber + '.jpeg'
          console.log(fileName)
          formData.append('files.picture', this.selectedFile, fileName)
          for(const pair of formData.entries()) {
          console.log(pair[0]+ ', '+ pair[1]);
          }
          if(!this.$v.checkbox.$dirty) {
            this.$v.$touch()
           return
          }
            const tag = {
              ...this.tag,
              name: this.name,
              id: this.tagNumber,
              tagNumber: this.tagNumber,
              breed: this.breed,
              phoneNumber: this.phoneNumber,
              emailAddress: this.emailAddress,
              password: this.password,
              picture: this.selectedFile
            }
            this.dataTag.data.breed = this.breed
            this.dataTag.data.mail = this.emailAddress
            this.dataTag.data.name = this.name
            this.dataTag.data.phoneNumber = this.phoneNumber
            this.dataTag.data.tagId = this.tagNumber
            this.dataTag.data.tagnumber = this.tagNumber
            this.dataTag.data.password = this.password
            console.log(this.dataTag.data)
            formData.append('data', JSON.stringify(this.dataTag.data));
           for(const pair of formData.entries()) {
           console.log(pair[0]+ ', '+ pair[1]);
           }
            this.tagStore.createTag(formData).then(() => {
              this.$router.push({
                name: 'tag-id',
                params: { id: tag.tagNumber }
              })
            })
            }
    },
}
</script>
<style>
.container {
  max-width: 1900px;
  padding: 0;
}
.display-1 {
    color: black;
}
.display-2 {
    color: white;
}
h1 {
  text-align: center;
}
h2 {
  text-align: center;
}
h3 {
  text-align: center;
}
.col {
  display: flex;
  align-items: center;
  justify-content: center;
}
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>