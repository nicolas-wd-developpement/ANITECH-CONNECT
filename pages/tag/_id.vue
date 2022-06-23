<template>
    <v-main style="padding: 0;"> 
          <v-container>
          <v-row justify="space-around">
            <v-card width="600">
              <v-img
                height="400"
                :src="tagStore.avatar"
              >
                <v-app-bar
                  flat
                  color="rgba(0, 0, 0, 0)"
                >
                  <v-alert
                  elevation="19"
                  shaped
                  type="info"
                  class="dogName"
                 >
                  <span> #ID N° {{ $route.params.id }} - {{ tagStore.tag.name }} </span>
                  </v-alert>

                  <v-spacer></v-spacer>

                </v-app-bar>

                <v-card-title class="white--text mt-8">
                  <h3 class="ml-3">                   
                  </h3>

                </v-card-title>
              </v-img>

              <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">
                  {{$t("contactDetails")}}
                </div>

                <v-timeline
                  align-top
                  dense
                >
                  <v-timeline-item
                    color=success
                    icon="mdi-account-circle"
                  >
                    <div>
                      <div>
                        <p> {{$t("myNameIs")}} {{ tagStore.tag.name}}, {{$t("iAmA")}} {{tagStore.tag.breed}}</p>
                      </div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item
                    color=primary
                    icon="mdi-phone-forward"
                  >
                    <div>
                      <div>
                        <p> {{$t("contactOwner")}} <span style="font-weight:bolder"> <a :href="`tel:` + tagStore.tag.phoneNumber"> {{tagStore.tag.phoneNumber}} </a> </span> </p>
                      </div>
                    </div>
                  </v-timeline-item>
                  <v-timeline-item
                    color=warning
                    icon= "mdi-email"
                  >
                    <div>
                      <div >
                        <p> {{$t("emailAdress")}} <span style="font-weight:bolder">  <a :href="`mailto:` + tagStore.tag.mail"> {{tagStore.tag.mail}} </a> </span> </p>
                      </div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
    </v-main>
</template>

<script>
import { useTagStore } from '../../store/TagStore'
export default {
      setup(){
      const tagStore = useTagStore()
      return {
        tagStore
      }
    },
    data: () => ({
      avatarUrl: '',
      mailTo:''
    }),
       computed: {
    tag() {
      return this.tagStore.tag
    },
    id() {
      return this.$route.params.id
    }
  },
    created() {
      this.tagStore.fetchTag(this.id)
      this.avatarUrl = this.tagStore.getPicture(this.id)
  },
  mounted(){
      this.tagStore.fetchTag(this.id)
      this.tagStore.getPicture(this.id)
      this.avatarUrl = this.tagStore.data.url
      this.mailTo = "mailto" + this.tagStore.tag.mail
  }
}
</script>
<style>
h1 {
  text-align: center;
}

h2 {
  text-align: center;
}

h3 {
  text-align: center;
}

p {
  text-align: center;
  color: black;
  font-size: 20px ;
}

.col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.firstBlock{
    margin-top: -35px;
}
.dogName{
  font-size: x-large;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  margin: 10px;
  padding: 20px;
}

.v-alert {
    margin-bottom: -15px !important;
}

.v-card__text {
    width: 100%;
    color: black !important;
    font-size: 20px;
}
</style>