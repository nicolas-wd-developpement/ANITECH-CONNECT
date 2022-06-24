<template>
<v-main  style="padding: 0;">
    <v-sheet
  height="650"
  class="overflow-hidden"
  style="position: relative;"
  >
      <v-card-text black>
        <v-row>
          <v-col cols="12" lg="12">
             <h1>{{$t("tagActivate")}}</h1>
          </v-col>
        </v-row>
      </v-card-text>
        <!-- lOGIN modal-->
                <v-row>
          <v-col cols="0" lg="2">
          </v-col>
          <v-col cols="12" lg="8">
            <v-card width="400" pa-md-4 class="mx-auto mt-5" elevation="11">
              <v-form @submit.prevent="onSubmit">
                <!-- -->
                <v-card
                  class="overflow-hidden"
                  color="info"
                  dark
                >
                 <v-card-text>
                    <v-file-input
                      v-show= "stepOne"
                      id="file-upload"
                      :label="$t('petPhotoLabel')"
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
                      :label="$t('petNameLabel')"
                      prepend-icon="mdi-account-circle"
                      :error-messages="nameErrors"
                      required
                      @input="$v.name.$touch()"
                      @blur="$v.name.$touch()"
                      >
                    </v-text-field>
                    <vue-tel-input-vuetify
                      v-show= "stepOne"
                      v-model="phoneNumber"
                      mode="national"
                      type="phone"
                      :label="$t('phoneNumberLabel')"
                      required
                      filled
                      :preferred-countries="['fr', 'gb', 'it', 'es','de','nl','se']"
                      :valid-characters-only="true"
                      select-label="Code"
                      :error-messages="phoneNumberErrors"
                      @change="$v.phoneNumber.$touch()"
                      @blur="$v.phoneNumber.$touch()"
                      @input="onInput"
                      > 
                    </vue-tel-input-vuetify>
                    <v-text-field
                      v-show= "stepOne"
                      v-model="emailAddress"
                      type="email"
                      :label="$t('emailLabel')"
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
                      :label="$t('orderId')"
                      prepend-icon="mdi-lock">
                    </v-text-field>
                      <v-text-field
                      v-show= "!stepOne"
                      v-model="tagNumber"
                      color="white"
                      :label="$t('tagNumberLabel')"
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
                      :label="$t('breed')"
                    ></v-text-field>
                  </v-card-text>
                  <v-checkbox
                    v-show= "!stepOne"
                    v-model="checkbox"
                    :error-messages="checkboxErrors"
                    :label="$t('acceptTosLabel')"
                    required
                    @change="$v.checkbox.$touch()"
                    @blur="$v.checkbox.$touch()"
                  >
                  </v-checkbox>
                  <v-dialog
                        v-model="dialog"
                        width="500"
                      >
                    <template #activator="{ on, attrs }">
                      <v-btn
                        v-show= "!stepOne"
                        raised
                        rounded
                        text
                        v-bind="attrs"
                        plain
                        tile
                        x-small
                        v-on="on"

                      >
                      <p class="tos">*terms of use</p>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        {{$t("tos")}}
                      </v-card-title>

                      <v-card-text>
                        {{$t("tosDetails")}}
                      </v-card-text>

                      <v-divider></v-divider>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="primary"
                          text
                          @click="dialog = false"
                        >
                          {{$t('accept')}}
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-card-actions>
                      <v-btn class="stepBtn" @click="stepOne= !stepOne">
                        <span v-show="stepOne"> {{$t("next")}} </span>
                        <span v-show="!stepOne"> {{$t("back")}} </span>
                      </v-btn>
                    <v-spacer></v-spacer>
                    <v-tex v-if="!checkbox  || !tagNumber || !emailAddress || !phoneNumber   ">
                      <v-btn
                      v-show= "!stepOne"
                      color="success"
                      type="submit"
                      disabled
                      >
                      {{$t("save")}}
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
                      {{$t("save")}}
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
                    {{$t("tagSaved")}}
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
    </v-sheet>
  </v-main>
</template>

<script> 
import { validationMixin } from 'vuelidate'
import { required, maxLength, minLength, email } from 'vuelidate/lib/validators'
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue"
import { useTagStore } from '../store/TagStore'
export default {
  name: 'IndexPage',
  components: {
     VueTelInputVuetify,
  },
  mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(10) },
      emailAddress: { required, email },
      phoneNumber: { required, maxLength: maxLength(16), minLength: minLength(10)},
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
      dialog: false,
      petPhotoLabel: '',
      name: '',
      email: '',
      emailAddress: '',
      phoneNumber: '',
      myPhone: '',
      phone: {
        number: '',
        valid: false,
        country: undefined,
      },
      prefix:'',
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
        !this.$v.name.maxLength && errors.push('Name must be at most 16 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
        phoneNumberErrors () {
        const errors = []
        if (!this.$v.phoneNumber.$dirty) return errors
        !this.$v.phoneNumber.minLength && errors.push('Phone number must be at minimum 10 digits')
        !this.$v.phoneNumber.maxLength && errors.push('Phone number must be at maximum 16 digits')
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
   // mounted(){
   //   this.petPhotoLabel = "$t('petPhotoLabel')"
   // },
    methods: {
        onInput(formattedNumber, { number, valid, country }) {
        this.phone.number = number.international;
        this.phone.valid = valid;
        this.phone.country = country && country.name;
        },
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
              phoneNumber: this.phone.number,
              emailAddress: this.emailAddress,
              oderid: this.oderid,
              picture: this.selectedFile
            }
            this.hasSaved = true
            this.dataTag.data.breed = this.breed
            this.dataTag.data.mail = this.emailAddress
            this.dataTag.data.name = this.name
            this.dataTag.data.phoneNumber = this.phone.number
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

.v-form {
  padding-top: -10px;
}



</style>