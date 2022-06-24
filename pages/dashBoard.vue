<template>
<v-main style="padding: 0;">
  <v-sheet
  height="650"
  class="overflow-hidden"
  style="position: relative;"
  >
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          {{$t("collectInfo")}}
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          {{$t("registerTag")}}
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          {{$t("petOnline")}}
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
              <li> {{$t("getYourOrder")}}</li>
              <li> {{$t("noteTag")}}</li>
              <li> {{$t("checkStatus")}}</li>
            </ul>
          </v-card>

          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            {{$t("continue")}}
          </v-btn>

          <v-btn
          @click="e1 = 1"
          >
            {{$t("back")}}
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          >
            <ul>
              <li> {{$t("fillInForm")}}</li>
            </ul>
          </v-card>

          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            {{$t("continue")}}
          </v-btn>

          <v-btn
          @click="e1 = 1"
          >
            {{$t("back")}}
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          >
            <ul>
              <li> {{$t("tagSavedHowToProceed1")}}</li>
              <li> {{$t("tagSavedHowToProceed2")}}</li>
              <li> {{$t("tagSavedHowToProceed3")}}</li>
            </ul>
          
          </v-card>

          <v-btn
          @click="e1 = 2"
          >
            {{$t("back")}}
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-sheet>
</v-main>
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