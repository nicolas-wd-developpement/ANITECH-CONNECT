<template>
<v-main class="white" height=600 pa-md-4 mx-lg-auto>
      <v-card-text black>
        <v-row>
          <v-col cols="0" lg="2">
              <v-spacer></v-spacer>
          </v-col>
          <v-col cols="12" lg="8">
             <h1> Activate your tag</h1>
          </v-col>
          <v-col cols="0" lg="2">
          </v-col>
        </v-row>
      </v-card-text>
        <!-- lOGIN modal-->
                <v-row>
          <v-col cols="0" lg="2">
              <v-spacer></v-spacer>
          </v-col>
          <v-col cols="12" lg="8">
            <v-card width="400" pa-md-4 class="mx-auto mt-5">
              <v-form @submit.prevent="onSubmit">
                <!-- -->
                <v-card
                  class="overflow-hidden"
                  color="primary lighten-1"
                  dark
                >
                 <v-card-text>
                    <v-file-input
                      v-show= "stepOne"
                      id="file-upload"
                      label="Pet photo"
                      type="file"
                      name="image"
                      filled
                      prepend-icon="mdi-camera"
                      @change="handleFileUpload"
                     >
                    </v-file-input>
                  </v-card-text>
                  <v-card-text>
                    <v-text-field
                     v-show= "stepOne"
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
                     v-show= "stepOne"
                      v-model="phoneNumber"
                      type="phone"
                      label="Phone Number"
                      prepend-icon="mdi-phone"
                      required
                      :error-messages="phoneNumberErrors"
                      @input="$v.phoneNumber.$touch()"
                      @blur="$v.phoneNumber.$touch()"
                      > 
                    </v-text-field>
                    <v-text-field
                      v-show= "stepOne"
                      v-model="emailAddress"
                      type="email"
                      label="email"
                      prepend-icon="mdi-email"
                      :error-messages="emailErrors"
                      required
                      @input="$v.emailAddress.$touch()"
                      @blur="$v.emailAddress.$touch()"
                    > 
                    </v-text-field>
                    <v-text-field
                      v-show= "stepOne" 
                      v-model="oderId"
                      :type="text"
                      label="Order id"
                      prepend-icon="mdi-lock">
                    </v-text-field>
                      <v-text-field
                      v-show= "!stepOne"
                      v-model="tagNumber"
                      color="white"
                      label="Tag number written on the medal"
                      required
                      :error-messages="tagErrors"
                      @input="$v.tagNumber.$touch()"
                      @blur="$v.tagNumber.$touch()"

                    ></v-text-field>
                    <v-text-field
                      v-show= "!stepOne"
                      v-model="breed"
                      color="white"
                      item-text="name"
                      label="Breed"
                    ></v-text-field>
                  </v-card-text>
                    <v-checkbox
                      v-show= "!stepOne"
                      v-model="checkbox"
                      :error-messages="checkboxErrors"
                      label="Do you agree?"
                      required
                      @change="$v.checkbox.$touch()"
                      @blur="$v.checkbox.$touch()"
                    ></v-checkbox>

                  <v-card-actions>
                      <v-btn class="stepBtn" @click="stepOne= !stepOne">
                        <span v-show="stepOne"> Next </span>
                        <span v-show="!stepOne"> Back </span>
                      </v-btn>
                    <v-spacer></v-spacer>
                    <v-tex v-if="!checkbox  || !tagNumber || !emailAddress || !phoneNumber   ">
                      <v-btn
                      v-show= "!stepOne"
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
                  <v-snackbar
                    v-model="hasSaved"
                    :timeout="2000"
                    absolute
                    bottom
                    color="success"
                    right
                  >
                    Your Tag is goind to be saved
                  </v-snackbar>
                </v-card>
              </v-form>

          </v-card>
        </v-col>
        <v-col cols="0" lg="2">
          <v-img
          :lazy-src= "selectedFile"
          max-height="150"
          max-width="250"
          :src= "selectedFile"
          >
          </v-img>
        </v-col>
      </v-row>
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
      token:{},
      loading: false,
      stepOne: true,
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
      oderId:'',
      links:[
        'home',
        'login',
        'register'
        ],
      hasSaved: false,
        isEditing: true,
        model: null,
        tag: {
          id:'',
          name:'',
          tagNumber:'',
          breed:'',
          emailAddress:'',
          phoneNumber:'',
          password:'',
          oderId:''
        },
        dataTag: {
              "data": {
                  "breed": "",
                  "mail": "",
                  "name": "",
                  "phoneNumber": "",
                  "tagId": "",
                  "tagnumber": "",
                  "password": "",
                  "oderId":""
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
          // this.selectedFile = event.target.files[0]
           this.selectedFile = event;
        },
        onSubmit() {
           this.tagNumberUpperCase = this.tagNumber.toUpperCase()
          const formData = new FormData()
          const fileName = this.tagNumberUpperCase + '.jpeg'
          formData.append('files.picture', this.selectedFile, fileName)
          if(!this.$v.checkbox.$dirty) {
            this.$v.$touch()
           return
          }
            const tag = {
              ...this.tag,
              name: this.name,
              id: this.tagNumberUpperCase,
              tagNumber: this.tagNumberUpperCase,
              breed: this.breed,
              phoneNumber: this.phoneNumber,
              emailAddress: this.emailAddress,
              oderid: this.oderid,
              picture: this.selectedFile
            }
            this.hasSaved = true
            this.dataTag.data.breed = this.breed
            this.dataTag.data.mail = this.emailAddress
            this.dataTag.data.name = this.name
            this.dataTag.data.phoneNumber = this.phoneNumber
            this.dataTag.data.tagId = this.tagNumberUpperCase
            this.dataTag.data.tagnumber = this.tagNumberUpperCase
            this.dataTag.data.oderId = this.oderId
            formData.append('data', JSON.stringify(this.dataTag.data));
            this.tagStore.createTag(formData).then(() => {
              this.$router.push({
                name: 'tag-id',
                params: { id: tag.tagNumber }
              })
            }).catch( () => {
                // tag required does not exist
                this.$router.push({
                  name: 'errors'
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
form {
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.footer-form {
  height: 20px;
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

  .stepBtn {
    float: left;
  }

  input[type="file" i] {
    display: none;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: 0 0px 0px 0px rgb(0 0 0 / 0%), 0 0px 0px 0 rgb(0 0 0 / 14%), 0 0px 5px 0 rgb(0 0 0 / 12%) !important;
}

.fileUpload {
    position: relative;
    overflow: hidden;
    margin: 10px;
}
.custom-file-upload {

}
</style>