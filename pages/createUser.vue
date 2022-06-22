<template>
<v-main style="padding: 0;">
    <v-sheet
    height="620"
    class="overflow-hidden"
    style="position: relative;"
    >
    <v-form v-model="valid" @submit.prevent="createUser">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="E-mail"
              required
            ></v-text-field>

          </v-col>
        </v-row>
      </v-container>
          <v-btn
          type="submit"
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
      >
        Validate
      </v-btn>
    </v-form>
  </v-sheet>
</v-main>
</template>


#Forms
When it comes to form validation, Vuetify has a multitude of integrations and baked in functionality. Want to use a 3rd party validation plugin? Out of the box you can use Vee-validate and vuelidate.

Watch a free video on Vuetify Forms

#Usage
The internal v-form component makes it easy to add validation to form inputs. All input components have a rules prop which accepts a mixed array of types function, boolean and string. These allow you to specify conditions in which the input is valid or invalid. Whenever the value of an input is changed, each function in the array will receive the new value and each array element will be evaluated. If a function or array element returns false or a string, validation has failed and the string value will be presented as an error message.

<script>
import { useTagStore } from '../store/TagStore'
  export default {
    setup(){
        const tagStore = useTagStore()
        return  {
            tagStore,
        } 
    },
    data: () => ({
      valid: true,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
         v => !!v || 'password is required',
      ],
      user: {
        username: '',
        email: '',
        password: '',
      }
    }),
    methods: {
        createUser(){
            this.user.username =  this.firstname  + this.lastname
            this.user.email = this.email
            this.user.password = this.password
            this.tagStore.createUser(this.user).then((response)=>{
            }).catch(error => {
                console.log('An error occurred:', error.response);
      });
        }
    }
  }
</script>