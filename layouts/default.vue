<template>
  <v-app>
    <v-header v-if= "$vuetify.breakpoint.lgAndUp">
      <NavBar ></NavBar>
      <nuxt/>
    </v-header>
    <v-header v-else>
      <NavBarMobile></NavBarMobile>
    </v-header>
    <FooterSection></FooterSection>
  </v-app>
</template>

<script>
import FooterSection from '../components/FooterSection.vue'
import NavBar from '../components/NavBar.vue'
import NavBarMobile from '../components/NavBarMobile.vue'
export default {
  name: 'DefaultLayout',
  components: { NavBar, FooterSection, NavBarMobile},
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
<style>
h1 {
  text-align: center;
    box-shadow: 10px 5px 5px lightgray;
  padding: 25px;
  margin-left: 15px;
   margin-right: 15px;

}

h2 {
  text-align: center;
  box-shadow: 10px 5px 5px lightgray;
  padding: 25px;
  margin-left: 15px;
  margin-right: 15px;
}

h3 {
  text-align: center;
}
.col {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
