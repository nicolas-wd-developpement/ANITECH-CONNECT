<template>
  <v-main
    color="primary lighten-1"
    padless
    margin-top="20"
    height="500px"
  >
    <v-row
      justify="center"
      no-gutters

      
    > <!--
      <v-btn
        v-for="(link, index) in links"
        :key="index"
        text
        rounded
        class="my-2"
        :to="link.url"
      >
       {{ link.label }}
      </v-btn>

      -->

      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
       From 2017 to: {{ new Date().getFullYear() }} — <strong>ANITECH</strong>
      </v-col>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
       <a href="https://web-designers.fr">Developped by WD DEVELOPPEMENTS</a>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
  export default {
    data: () => ({
      links: [ {
        label:'Home',
        url: '/'
      },{
        label:'How it works',
        url: '/dashBoard'
      },
      {
        label:'Long in',
        url: '/loginUser'
      },
      {
        label:'Order',
        url: '/orderTag'
      },
      {
        label:'I found a pet',
        url: '/petFound'
      }
      ],
    }),
  }
</script>