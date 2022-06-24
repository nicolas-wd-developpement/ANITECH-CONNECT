<template>
  <v-container
  >
    <v-card
      flat
      tile
      class="blue white--text text-center"
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-col cols="0" lg="2">

        </v-col>
        <v-col cols="12" lg="8">
          <v-card-text>
            <v-btn
              class="mx-4 white--text"
              icon
              href='https://www.facebook.com/anitechsolution'
            >
                <v-icon 
                  size="48px"
                  >
                  mdi-facebook
                </v-icon>
            </v-btn>
            <v-btn
              class="mx-4 white--text"
              icon
              href='https://instagram.com'
            >
                <v-icon 
                  size="48px"
                  >
                 mdi-instagram 
                </v-icon>
            </v-btn>
                     <v-btn
              class="mx-4 white--text"
              icon
              href='https://www.youtube.com/watch?v=GwXwiZzQvv4&t=2s'
            >
                <v-icon 
                  size="48px"
                  >
                 mdi-youtube 
                </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="0" lg="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="0" lg="2">

        </v-col>
        <v-col cols="12" lg="8">
          <v-btn
            v-for="(link, index) in links"
            :key="index"
            text
            rounded
            class="my-2  white--text"
            :to= "localePath(link.url)"
          >
          {{ $t(link.label) }}
          </v-btn>
        </v-col>
        <v-col cols="0" lg="2">

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="0" lg="2"></v-col>
        <v-col
          class="blue py-4 text-center white--text"
          cols="12" lg="8"
        >
          {{ new Date().getFullYear() }} — <strong> ANITECH CONNECT</strong>
        </v-col>
        <v-col cols="0" lg="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="0" lg="2"></v-col>
        <v-col cols="12" lg="8">
          <v-card-text class="white--text pt-0">
            Import and Retail international dac, North Point Business Park, New Mallow Road Cork Ireland T23 AT2P.
          </v-card-text>
        </v-col>
        <v-col cols="0" lg="2"></v-col>

        <v-divider></v-divider>
      </v-row>
      <v-row>
        <v-col cols="0" lg="2"></v-col>
        <v-col cols="12" lg="8">
          <v-card-text class="white--text">
            {{$t("appDeveloppedBy")}} — <a style="font-weight:500; color:black;" href="https://web-designers.fr" > www.web-designers.fr</a>
          </v-card-text>
        </v-col>
        <v-col cols="0" lg="2"></v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
  export default {
    data: () => ({           
      links: [ {
        label:'home',
        url: '/home'
      },{
        label:'whoWeAre',
        url: '/whoWeAre'
      },
      {
        label:'contactUs',
        url: '/contactUs'
      },
      {
        label:'order',
        url: '/orderTag'
      },
      {
        label:'foundAPet',
        url: '/petFound'
      },
            {
        label:'howItWorks',
        url: '/dashBoard'
      },

           {
        label:'tos',
        url: '/termOfUse'
      },
      
      ],
      icons: [ {
        label:'mdi-facebook',
        url:"https://facebook.com",
        },
        {
          label:'mdi-instagram',
          url:"https://instagram.com"
        }
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: true,
      variant: 'default',
      absolute: true,
      fixed: true,
      height: 800,
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = true
          attrs.fixed = true
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
      availableLocales () {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      }
    }
  }
</script>
<style scoped>
.myFooter {
  height: 500px;
}
</style>