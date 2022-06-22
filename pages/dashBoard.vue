<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Collect your information
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Register your tag in our dataBase
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Your pet contact details are accessible online
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >
          <ul>
            <li> Get your order ID from Amazon or ANITECH web shop</li>
            <li> Note the Tag number written on the medal</li>
            <li> define a phone number, adress email, and picture of your dog</li>
          </ul>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn
         @click="e1 = 1"
        >
          Back
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >
          <ul>
            <li> Fill in the form in the area Connect a new Tag</li>
          </ul>
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn
         @click="e1 = 1"
        >
          Back
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        >
          <ul>
            <li> Your Tag ID is now saved in our database</li>
            <li> You can verify it by searching your tag in the area You found a pet</li>
            <li> Research your Tag Id number in our dataBase and see your pet online</li>
          </ul>
        
        </v-card>

        <v-btn
         @click="e1 = 2"
        >
          Back
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>