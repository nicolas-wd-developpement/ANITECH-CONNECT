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
              v-for="(icon, index) in icons"
              :key="index"
              class="mx-4 white--text"
              icon
              :to="icon.url"
            >
                <v-icon 
                  size="48px"
                  >
                  {{ icon.label }}
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
            :to="link.url"
          >
          {{ link.label }}
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
            Application developped by — <strong> <a href="https://web-designers.fr"> www.web-designers.fr</a></strong>
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
        label:'Home',
        url: '/'
      },{
        label:'Who we are',
        url: '/whoWeAre'
      },
      {
        label:'Contact us',
        url: '/contactUs'
      },
      {
        label:'Order',
        url: '/orderTag'
      },
      {
        label:'I found a pet',
        url: '/petFound'
      },
            {
        label:'How it works',
        url: '/dashBoard'
      },

           {
        label:'Terms of services',
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
    },
  }
</script>
<style scoped>
.myFooter {
  height: 500px;
}
</style>